export const routerUrls = {
  root: '/',
  catalog: {
    mask: '/catalog',
    create: () => '/catalog',
  },
  productDetail: {
    mask: '/detail/:id',
    create: (id: number) => `/detail/${id}`,
  },
  categories: {
    mask: '/categories',
    create: () => `/categories`,
  },
  about_us: {
    mask: '/about_us',
    create: () => `/about_us`,
  },
  cart: {
    mask: '/cart',
    create: () => `/cart`,
  },
  payment: {
    mask: '/payment',
    create: () => `/payment`,
  },
  login: {
    mask: '/login',
    create: () => `/login`,
  },
  profile: {
    mask: '/profile',
    create: () => `/profile`,
  },
  register: {
    mask: '/register',
    create: () => `/register`,
  },
};
