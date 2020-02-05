import { types } from 'mobx-state-tree';

export const ProductModel = types
  .model('ProductModel', {
    id: types.identifier,
    name: types.string,
    url: types.string,
    excerpt: types.string
  })
  .views(self => ({}))
  .actions(self => ({}));
