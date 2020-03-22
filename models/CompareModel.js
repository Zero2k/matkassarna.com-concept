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

export const SelectedModel = types.model('SelectedModel', {
  id: types.identifier,
  name: types.string,
  price: types.number
});

export const CompareModel = types
  .model('CompareModel', {
    id: types.identifier,
    name: types.string,
    options: types.array(OptionsModel),
    selectedOption: types.maybe(OptionsModel),
    selectedAlternative: types.maybe(SelectedModel)
  })
  .views(self => ({}))
  .actions(self => ({}));
