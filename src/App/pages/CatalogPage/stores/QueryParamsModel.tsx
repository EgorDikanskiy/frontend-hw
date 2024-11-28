import { makeAutoObservable } from 'mobx';

class QueryModel {
  searchQuery: string = '';
  categoryId: number | null = null;
  page: number = 1;
  limit: number = 9;
  priceMin: number = 1;
  priceMax: number = 1000;

  constructor() {
    makeAutoObservable(this);
  }

  // Устанавливаем параметры на основе URL
  setQueryParams(searchParams: URLSearchParams) {
    this.searchQuery = searchParams.get('title') || '';
    this.categoryId = searchParams.get('categoryId') ? Number(searchParams.get('categoryId')) : null;
    this.page = Number(searchParams.get('page')) || 1;
    this.priceMin = Number(searchParams.get('price_min')) || 0;
    this.priceMax = Number(searchParams.get('price_max')) || 1000;
  }

  // Возвращаем параметры для API запроса
  getParamsForApi() {
    return {
      title: this.searchQuery,
      categoryId: this.categoryId,
      offset: (this.page - 1) * this.limit,
      limit: this.limit,
      price_min: this.priceMin,
      price_max: this.priceMax,
    };
  }

  setSearchQuery(query: string) {
    this.searchQuery = query;
  }

  setCategoryId(categoryId: number | null) {
    this.categoryId = categoryId;
  }

  setPriceRange(min: number, max: number) {
    this.priceMin = min;
    this.priceMax = max;
  }
}

export default QueryModel;
