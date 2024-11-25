import { makeAutoObservable } from 'mobx';

export interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

export class CartStore {
  cart: CartItem[] = [];

  constructor() {
    makeAutoObservable(this);

    // Загрузка данных из localStorage при инициализации
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      this.cart = JSON.parse(storedCart);
    }
  }

  // Добавить товар в корзину
  addToCart = (item: CartItem) => {
    const existingItem = this.cart.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
      existingItem.quantity += item.quantity;
    } else {
      this.cart.push(item);
    }
    this.saveToLocalStorage();
  };

  // Удалить товар из корзины
  removeFromCart = (id: number) => {
    this.cart = this.cart.filter((item) => item.id !== id);
    this.saveToLocalStorage();
  };

  // Изменить количество товара
  updateQuantity = (id: number, quantity: number) => {
    const item = this.cart.find((cartItem) => cartItem.id === id);
    if (item) {
      item.quantity = Math.max(1, quantity); // Минимальное количество — 1
    }
    this.saveToLocalStorage();
  };

  // Очистить корзину
  clearCart = () => {
    this.cart = [];
    this.saveToLocalStorage();
  };

  // Получить общее количество товаров
  get totalItems() {
    return this.cart.reduce((sum, item) => sum + item.quantity, 0);
  }

  // Получить общую стоимость товаров
  get totalPrice() {
    return this.cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }

  // Сохранить корзину в localStorage
  private saveToLocalStorage() {
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }
}

export default CartStore;
