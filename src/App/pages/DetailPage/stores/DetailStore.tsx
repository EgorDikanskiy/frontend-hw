import { makeAutoObservable, runInAction } from 'mobx';
import { getProduct, Product } from 'api/getProduct';
import { getProducts, Products } from 'api/getProducts';

class DetailStore {
  product: Product = {
    id: 0,
    title: '',
    price: 0,
    description: '',
    images: [],
    category: { id: 0 },
  };
  relatedItems: Products[] = [];
  loading = false;
  error: string | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  // Объединённая функция для загрузки данных
  fetchAllData = async (id: string | undefined) => {
    this.loading = true;
    this.error = null;

    try {
      // Загрузка основного элемента
      const fetchedItem = await getProduct(id);
      runInAction(() => {
        this.product = fetchedItem;
      });

      // Загрузка связанных товаров
      if (fetchedItem.category.id) {
        const params = {
          categoryId: fetchedItem.category.id,
          offset: 0,
          limit: 3,
        };
        const fetchedRelatedItems = await getProducts(params);
        runInAction(() => {
          this.relatedItems = fetchedRelatedItems;
        });
      }
    } catch (error) {
      runInAction(() => {
        this.error = `Ошибка при загрузке данных + ${error}`;
      });
    } finally {
      runInAction(() => {
        this.loading = false;
      });
    }
  };
}

export default DetailStore;
