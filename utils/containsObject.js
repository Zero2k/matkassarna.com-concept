import _ from 'lodash';

export const containsObject = (obj, list) => {
  let i;
  for (i = 0; i < list.length; i++) {
    const isEqual = _.isEqual(list[i], obj);
    if (isEqual) {
      return true;
    }
  }

  return false;
};
