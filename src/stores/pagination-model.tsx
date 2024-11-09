import { makeAutoObservable, action } from "mobx";

class PaginationModel {
    currentPage = 1;
    totalPage = 1;

    constructor() {
        makeAutoObservable(this, {
            setCurrentPage: action,
            nextPage: action,
            prevPage: action
        });
    }

    setTotalPage(count: number) {
        this.totalPage = count;
    }

    setCurrentPage(page: number) {
        if (page >= 1 && page <= this.totalPage) {
            this.currentPage = page;
        }
    }
    
    nextPage() {
        if (this.currentPage < this.totalPage) {
            this.currentPage++;
        }
    }

    prevPage() {
        if (this.currentPage > 1) {
            this.currentPage--;
        }
    }
}   
    

export default new PaginationModel();
