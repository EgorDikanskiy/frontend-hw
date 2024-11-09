import { makeAutoObservable, action } from "mobx";
import { Items, getItems } from '../api/getItems';
import { Item, getItem } from '../api/getItem';
import { Category, getCategories } from '../api/getCategories';
import { fromPromise, IPromiseBasedObservable } from "mobx-utils";

class ItemsStore {
    items?: IPromiseBasedObservable<Items[]>;
    item?: IPromiseBasedObservable<Item>;
    searchQuery = "";
    filteredItems: Items[] = [];
    categories?: IPromiseBasedObservable<Category[]>;
    selectedCategoryId: number | null = null;

    constructor() {
        makeAutoObservable(this, {
            getItemsAction: action,
            getCategoriesAction: action,
            applyFilter: action,
            setSearchQuery: action,
            setSelectedCategory: action
        });
    }

    setSearchQuery(query: string) {
        this.searchQuery = query;
    }

    setSelectedCategory(categoryId: number | null) {
        this.selectedCategoryId = categoryId;
    }

    getItemsAction = () => {
        this.items = fromPromise(getItems());
        this.items?.then(action((items) => {
            this.filteredItems = items; // Начальное значение фильтра
        }));
    };

    getItemAction = (id: string | undefined) => {
        this.item = fromPromise(getItem(id));
    }

    getCategoriesAction = () => {
        this.categories = fromPromise(getCategories());
    };

    applyFilter() {
        if (this.items?.state === "fulfilled") {
            this.filteredItems = this.items.value.filter(item => {
                const matchesSearch = item.title.toLowerCase().includes(this.searchQuery.toLowerCase());
                const matchesCategory = this.selectedCategoryId === null || item.category?.id === this.selectedCategoryId;
                
                return matchesSearch && matchesCategory;
            });
        }
    }
}

export default new ItemsStore();
