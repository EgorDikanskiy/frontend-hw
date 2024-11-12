import { makeAutoObservable, runInAction } from 'mobx';
import QueryModel from './QueryParamsModel';
import PaginationModel from './pagination-model';
import { getItems, Items } from '../../../../api/getItems';
import { Category, getCategories } from '../../../../api/getCategories';
import { fromPromise, IPromiseBasedObservable } from 'mobx-utils';
import { NavigateFunction } from 'react-router-dom';
import { updateQueryParams } from '../../../../config/updateQueryParams';

class CatalogStore {
    items: Items[] = [];
    totalItemsCount: number = 0;
    queryModel: QueryModel;
    paginationModel: PaginationModel;
    categories?: IPromiseBasedObservable<Category[]>;
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
        return this.categories?.state === "fulfilled"
            ? this.categories.value.map(category => ({
                id: category.id,
                value: category.name,
                key: String(category.id),
            }))
            : [];
    }

    // Геттер для выбранной категории
    get selectedCategory() {
        return this.selectedCategoryId
            ? this.categoryOptions.find(option => option.id === this.selectedCategoryId) || null
            : null;
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
                this.error = 'Ошибка при загрузке товаров';
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
            const response = await getItems(params);
            runInAction(() => {
                this.items = response;
            });
        } catch (error) {
            console.error("Ошибка при загрузке товаров:", error);
            this.error = 'Ошибка при загрузке товаров';
        }
    }

    async fetchTotalItemsCount() {
        const { title, categoryId } = this.queryModel.getParamsForApi();
        try {
            const filteredItems = await getItems({ title, categoryId });
            runInAction(() => {
                this.totalItemsCount = filteredItems.length;
            });
        } catch (error) {
            console.error("Ошибка при загрузке общего количества товаров", error);
            this.error = 'Ошибка при загрузке общего количества товаров';
        }
    }

    getCategoriesAction = () => {
        this.categories = fromPromise(getCategories());
    };
}

export default CatalogStore;
