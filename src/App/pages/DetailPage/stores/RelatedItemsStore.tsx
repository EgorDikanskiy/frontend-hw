import { makeAutoObservable, runInAction } from 'mobx';

class RelatedItemsStore {
    items = [];
    selectedCategoryId: number | null = null;

    constructor() {
        makeAutoObservable(this);
    }

    setCategory(categoryId: number) {
        if (categoryId !== this.selectedCategoryId) {
            this.selectedCategoryId = categoryId;
            // Только запускаем загрузку данных, если categoryId корректен
            if (categoryId) {
                this.fetchItemsByCategory();
            }
        }
    }

    async fetchItemsByCategory() {
        if (!this.selectedCategoryId) return; // проверка на null

        try {
            const response = await fetch(`https://api.escuelajs.co/api/v1/products?categoryId=${this.selectedCategoryId}&offset=0&limit=3`);
            const data = await response.json();
            runInAction(() => {
                this.items = data;
            });
        } catch (error) {
            console.error('Error fetching items:', error);
        }
    }
}

export default RelatedItemsStore;
