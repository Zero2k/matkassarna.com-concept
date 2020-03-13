import { types } from 'mobx-state-tree';
import { ProductModel } from '../models/ProductModel';
import { CompareModel } from '../models/CompareModel';

import { containsObject } from '../utils/containsObject';

export const ProductsStore = types
  .model('ProductsStore', {
    data: types.maybe(types.array(ProductModel)),
    compare: types.maybe(types.array(CompareModel))
  })
  .views(self => ({
    isCompared(product) {
      console.log(containsObject(product, self.compare));
      return containsObject(product, self.compare);
    }
  }))
  .actions(self => ({
    compareProduct(product) {
      if (!containsObject(product, self.compare)) {
        self.compare.push(product);
      }
      console.log('STORE', self.compare.toJSON());
    }
  }));
