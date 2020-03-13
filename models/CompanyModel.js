import { types } from 'mobx-state-tree';

export const CompanyModel = types
  .model('CompanyModel', {
    id: types.identifier,
    name: types.string,
    url: types.string,
    excerpt: types.string
  })
  .views(self => ({}))
  .actions(self => ({}));
