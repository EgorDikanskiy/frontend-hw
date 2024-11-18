import { makeAutoObservable, runInAction } from 'mobx';
import QueryModel from './QueryParamsModel';
import PaginationModel from './PaginationModel';
import { getProducts, Products } from 'api/getProducts';
import { Category, getCategories } from 'api/getCategories';
import { NavigateFunction } from 'react-router-dom';
import { updateQueryParams } from 'config/updateQueryParams';

class CatalogStore {
    products: Products[] = [];
    totalItemsCount: number = 0;
    queryModel: QueryModel;
    paginationModel: PaginationModel;
    categories: Category[] = [];
    selectedCategoryId: number | null = null;
    loading = false;
    error: string | null = null;

    constructor(queryModel: QueryModel, paginationModel: PaginationModel) {
        makeAutoObservable(this);
        this.queryModel = queryModel;
        this.paginationModel = paginationModel;
    }

    // Геттер для списка опций категорий
    get categoryOptions() {
        if (this.loading) return [];  // Если данные всё ещё загружаются
        if (this.error) return [];    // Если произошла ошибка

        return this.categories.map(category => ({
            id: category.id,
            value: category.name,
            key: String(category.id),
        }));
    }

    // Геттер для выбранной категории
    get selectedCategory() {
        if (this.selectedCategoryId === null) return null; // Если категория не выбрана

        return this.categoryOptions.find(option => option.id === this.selectedCategoryId) || null;
    }
    
    // Синхронизируем состояние стора с URL-параметром categoryId
    syncCategoryFromUrl(searchParams: URLSearchParams) {
        const categoryId = searchParams.get('categoryId');
        const parsedCategoryId = categoryId ? Number(categoryId) : null;
        this.setSelectedCategory(parsedCategoryId, () => {}); // Пустая функция, т.к. navigate не требуется
    }

    setSearchQuery(query: string, navigate: NavigateFunction) {
        this.queryModel.setSearchQuery(query);
        updateQueryParams(navigate, { title: query || null, page: 1 });     
    }

    // Устанавливаем выбранную категорию и обновляем данные, а также URL
    setSelectedCategory(categoryId: number | null, navigate: NavigateFunction) {
        this.selectedCategoryId = categoryId;
        this.queryModel.setCategoryId(categoryId);        
        updateQueryParams(navigate, { categoryId: categoryId, page: 1 });
    }

    // Синхронизируем URL с текущим выбранным значением categoryId
    syncCategoryWithUrl(navigate: NavigateFunction) {
        if (this.queryModel.categoryId !== this.selectedCategoryId) {
            updateQueryParams(navigate, { categoryId: this.selectedCategoryId });
        }
    }

    // Инициализация категорий и текущего выбора из URL при первом монтировании
    initializeFilter(searchParams: URLSearchParams, navigate: NavigateFunction) {
        this.getCategoriesAction();
        this.syncCategoryFromUrl(searchParams);
        this.fetchData();

        // Обновляем URL, если значение categoryId меняется
        this.syncCategoryWithUrl(navigate);
    }


    // Метод для загрузки всех данных и управления пагинацией
    async fetchData() {
        this.loading = true;
        this.error = null;
        try {
            await this.fetchTotalItemsCount();
            runInAction(() => {
                this.paginationModel.setTotalPage(Math.ceil(this.totalItemsCount / this.queryModel.limit));
                this.paginationModel.setCurrentPage(this.queryModel.page);
            });
            await this.fetchItems();
        } catch (error) {
            runInAction(() => {
                this.error = `Ошибка при загрузке товаров ${error}`;
            });
        } finally {
            runInAction(() => {
                this.loading = false;
            });
        }
    }

    async fetchItems() {
        const params = this.queryModel.getParamsForApi();
        try {
            const response = await getProducts(params);
            runInAction(() => {
                this.products = response;
            });
        } catch (error) {
            console.error("Ошибка при загрузке товаров:", error);
            this.error = 'Ошибка при загрузке товаров';
        }
    }

    async fetchTotalItemsCount() {
        const { title, categoryId } = this.queryModel.getParamsForApi();
        try {
            const filteredItems = await getProducts({ title, categoryId });
            runInAction(() => {
                this.totalItemsCount = filteredItems.length;
            });
        } catch (error) {
            console.error("Ошибка при загрузке общего количества товаров", error);
            this.error = 'Ошибка при загрузке общего количества товаров';
        }
    }

    getCategoriesAction = async () => {
        try {
            const response = await getCategories();
            runInAction(() => {
                this.categories = response;
            });
        } catch (error) {
            runInAction(() => {
                this.error = 'Ошибка при загрузке категорий';
            });
            console.error("Ошибка при загрузке категорий", error);
        }
    };
}

export default CatalogStore;
