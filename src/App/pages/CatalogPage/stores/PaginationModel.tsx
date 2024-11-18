import { makeAutoObservable } from 'mobx';

class PaginationModel {
  currentPage = 1;
  totalPage = 1;

  constructor() {
    makeAutoObservable(this);
  }

  setTotalPage(count: number) {
    this.totalPage = count;
  }

  setCurrentPage(page: number) {
    if (page >= 1 && page <= this.totalPage) {
      this.currentPage = page;
    }
  }

  setNextPage() {
    if (this.currentPage < this.totalPage) {
      this.currentPage++;
    }
  }

  setPrevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  // Добавляем метод getPaginationItems
  getPaginationItems() {
    const { currentPage, totalPage } = this;
    const pages: (number | string)[] = [];

    if (totalPage <= 5) {
      for (let i = 1; i <= totalPage; i++) {
        pages.push(i);
      }
    } else {
      pages.push(1);

      if (currentPage > 3) {
        pages.push('...');
      }

      const startPage = Math.max(2, currentPage - 1);
      const endPage = Math.min(totalPage - 1, currentPage + 1);

      for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
      }

      if (currentPage < totalPage - 2) {
        pages.push('...');
      }

      pages.push(totalPage);
    }

    return pages;
  }
}

export default PaginationModel;
