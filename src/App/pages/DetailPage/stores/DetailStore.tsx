import { makeAutoObservable } from "mobx"
import { Item, getItem } from '../../../../api/getItem'
import { fromPromise, IPromiseBasedObservable } from "mobx-utils"

class ItemStore {
    item?: IPromiseBasedObservable<Item>;

    constructor() {
        makeAutoObservable(this);
    }

    getItemAction = (id: string | undefined) => {
        this.item = fromPromise(getItem(id));
    }
}

export default ItemStore;