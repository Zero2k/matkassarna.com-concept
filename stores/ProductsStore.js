import { flow, types } from 'mobx-state-tree';
import { ProductModel } from '../models/ProductModel';

export const ProductsStore = types
  .model('ProductsStore', {
    data: types.maybe(types.array(ProductModel)),
    compare: types.maybe(types.array(ProductModel))
  })
  .views(self => ({}))
  .actions(self => ({}));
