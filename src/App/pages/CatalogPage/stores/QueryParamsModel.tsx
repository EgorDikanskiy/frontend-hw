import { makeAutoObservable } from 'mobx';


class QueryModel {
    searchQuery: string = '';
    categoryId: number | null = null;
    page: number = 1;
    limit: number = 9;

    constructor() {
        makeAutoObservable(this);
    }

    // Устанавливаем параметры на основе URL
    setQueryParams(searchParams: URLSearchParams) {
        this.searchQuery = searchParams.get('title') || '';
        this.categoryId = searchParams.get('categoryId') ? Number(searchParams.get('categoryId')) : null;
        this.page = Number(searchParams.get('page')) || 1;
    }

    // Возвращаем параметры для API запроса
    getParamsForApi() {
        return {
            title: this.searchQuery,
            categoryId: this.categoryId,
            offset: (this.page - 1) * this.limit,
            limit: this.limit,
        };
    }

    setSearchQuery(query: string) {
        this.searchQuery = query;
    }

    setCategoryId(categoryId: number | null) {
        this.categoryId = categoryId;
    }
}

export default QueryModel;
