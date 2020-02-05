import { ProductsStore } from './ProductsStore';
import { ProductModel } from '../models/ProductModel';

const productsStore = ProductsStore.create({
  data: [
    ProductModel.create({
      id: '1',
      name: 'Apple',
      url: '/apple',
      excerpt:
        'Apple Inc. is an American multinational technology company headquartered in Cupertino, California, that designs, develops, and sells consumer electronics.'
    }),
    ProductModel.create({
      id: '2',
      name: 'Microsoft',
      url: '/microsoft',
      excerpt:
        'Microsoft Corporation is an American multinational technology company with headquarters in Redmond, Washington.'
    })
  ]
});

const stores = {
  productsStore
};

export const initializeStores = isServer => {
  if (isServer) {
    stores;
  }
  if (stores === null) {
    stores;
  }

  return stores;
};
