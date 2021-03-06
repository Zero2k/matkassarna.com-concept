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
    }),
    CompanyModel.create({
      id: '2',
      name: 'Amazon',
      url: '/amazon',
      excerpt:
        'Amazon.com, Inc. is an American multinational technology company based in Seattle, with 750,000 employees.'
    })
  ]
});

const productStore = ProductsStore.create({
  data: [
    ProductModel.create({
      id: '123',
      name: 'Macbook Pro',
      options: [
        OptionsModel.create({
          id: '134',
          value1: 2,
          value2: 4,
          alternatives: [
            AlternativesModel.create({
              id: '100',
              name: 'No alternative',
              price: 440
            })
          ]
        }),
        OptionsModel.create({
          id: '234',
          value1: 3,
          value2: 6,
          alternatives: [
            AlternativesModel.create({
              id: '101',
              name: 'No alternative',
              price: 440
            }),
            AlternativesModel.create({ id: '202', name: 'White', price: 700 }),
            AlternativesModel.create({ id: '303', name: 'Black', price: 850 })
          ]
        })
      ]
    }),
    ProductModel.create({
      id: '234',
      name: 'IMac',
      options: [
        OptionsModel.create({
          id: '456',
          value1: 2,
          value2: 4,
          alternatives: [
            AlternativesModel.create({
              id: '200',
              name: 'No alternative',
              price: 550
            })
          ]
        }),
        OptionsModel.create({
          id: '567',
          value1: 3,
          value2: 6,
          alternatives: [
            AlternativesModel.create({
              id: '201',
              name: 'No alternative',
              price: 350
            }),
            AlternativesModel.create({ id: '202', name: 'White', price: 450 }),
            AlternativesModel.create({ id: '303', name: 'Black', price: 550 })
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
