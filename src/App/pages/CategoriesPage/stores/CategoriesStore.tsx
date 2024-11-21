import { makeAutoObservable, runInAction } from 'mobx';
import { Category, getCategories } from 'api/getCategories';

class CategoriesStore {
  categories: Category[] = []; // Все категории из API
  displayedCategories: Category[] = []; // Категории, которые отображаются
  loading = false; // Флаг загрузки
  error: string | null = null; // Ошибки загрузки
  hasMoreCategories = true; // Есть ли ещё категории для загрузки
  itemsPerLoad = 9; // Сколько категорий показывать за раз
  offset = 0; // Смещение для отображения категорий

  constructor() {
    makeAutoObservable(this);
  }

  // Получить все категории из API
  loadAllCategories = async () => {
    this.loading = true;
    this.error = null;

    try {
      const response: Category[] = await getCategories(); // Загружаем все данные
      runInAction(() => {
        this.categories = response;
        this.displayNextBatch(); // Отображаем первую порцию
      });
    } catch (error) {
      runInAction(() => {
        this.error = 'Ошибка при загрузке категорий';
      });
      console.error('Ошибка при загрузке категорий', error);
    } finally {
      runInAction(() => {
        this.loading = false;
      });
    }
  };

  // Отображает следующую порцию категорий с задержкой
  displayNextBatch = () => {
    if (!this.hasMoreCategories || this.loading) return;

    this.loading = true;

    // Искусственная задержка
    setTimeout(() => {
      const nextBatch = this.categories.slice(this.offset, this.offset + this.itemsPerLoad);

      runInAction(() => {
        this.displayedCategories = [...this.displayedCategories, ...nextBatch];
        this.offset += this.itemsPerLoad;

        // Если больше данных нет, завершить скроллинг
        if (this.offset >= this.categories.length) {
          this.hasMoreCategories = false;
        }

        this.loading = false; // После загрузки данных ставим флаг в false
      });
    }, 2000); // Задержка
  };
}

export default CategoriesStore;
