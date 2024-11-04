export const routerUrls = {
    root: '/',
    catalog: {
      mask: '/catalog',
      create: () => '/catalog',
    },
    productDetail: {
      mask: '/detail/:id',
      create: (id: number) => `/detail/${id}`,
    }
}