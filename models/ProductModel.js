import { types } from 'mobx-state-tree';

export const AlternativesModel = types.model('AlternativesModel', {
  id: types.identifier,
  name: types.string,
  price: types.number
});

export const OptionsModel = types.model('OptionsModel', {
  id: types.identifier,
  value1: types.number,
  value2: types.number,
  alternatives: types.array(AlternativesModel)
});

export const ProductModel = types
  .model('ProductModel', {
    id: types.identifier,
    name: types.string,
    options: types.array(OptionsModel)
  })
  .views(self => ({}))
  .actions(self => ({}));
