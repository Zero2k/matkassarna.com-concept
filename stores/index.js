import { createContext, useContext } from 'react';
import { useStaticRendering } from 'mobx-react-lite';
import { CompanyStore } from './CompanyStore';
import { CompanyModel } from '../models/CompanyModel';
import { ProductsStore } from './ProductsStore';
import {
  ProductModel,
  OptionsModel,
  AlternativesModel
} from '../models/ProductModel';

const isServer = typeof window === 'undefined';

useStaticRendering(isServer);

const companyStore = CompanyStore.create({
  data: [
    CompanyModel.create({
      id: '1',
      name: 'Apple',
      url: '/apple',
      excerpt:
        'Apple Inc. is an American multinational technology company headquartered in Cupertino, California, that designs, develops, and sells consumer electronics.'
    }),
    CompanyModel.create({
      id: '2',
      name: 'Microsoft',
      url: '/microsoft',
      excerpt:
        'Microsoft Corporation is an American multinational technology company with headquarters in Redmond, Washington.'
    })
  ]
});

const productStore = ProductsStore.create({
  data: [
    ProductModel.create({
      id: '1',
      name: 'Macbook Pro',
      options: [
        OptionsModel.create({
          id: '1',
          value1: 2,
          value2: 4,
          alternatives: [
            AlternativesModel.create({
              id: '1',
              name: 'No alternative',
              price: 440
            })
          ]
        }),
        OptionsModel.create({
          id: '2',
          value1: 3,
          value2: 4,
          alternatives: [
            AlternativesModel.create({
              id: '1',
              name: 'No alternative',
              price: 440
            }),
            AlternativesModel.create({ id: '2', name: 'White', price: 700 }),
            AlternativesModel.create({ id: '3', name: 'Black', price: 850 })
          ]
        })
      ]
    })
  ],
  compare: []
});

const stores = {
  companyStore,
  productStore
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
