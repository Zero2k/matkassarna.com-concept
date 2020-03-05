import { createContext, useContext } from 'react';
import { useStaticRendering } from 'mobx-react-lite';
import { ProductsStore } from './ProductsStore';
import { ProductModel } from '../models/ProductModel';

const isServer = typeof window === 'undefined';

useStaticRendering(isServer);

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
  ],
  compare: []
});

const stores = {
  productsStore
};

export const createStore = () => {
  if (isServer) {
    stores;
  }
  if (stores !== null) {
    stores;
  }

  return stores;
};

export const StoreContext = createContext(stores);
export const StoreProvider = StoreContext.Provider;
export const useStore = () => useContext(StoreContext);
