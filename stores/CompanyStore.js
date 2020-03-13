import { types } from 'mobx-state-tree';
import { CompanyModel } from '../models/CompanyModel';

export const CompanyStore = types
  .model('CompanyStore', {
    data: types.maybe(types.array(CompanyModel))
  })
  .views(self => ({}))
  .actions(self => ({}));
