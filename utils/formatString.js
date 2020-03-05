const formatString = (company, arr) => {
  if (arr.length === 0) {
    return;
  }

  const first =
    company.charAt(0).toUpperCase() + company.substr(1).toLowerCase();

  const list = arr
    .slice(0, arr.length - 1)
    .map(item => item.charAt(0).toUpperCase() + item.substr(1).toLowerCase());

  const last =
    arr[arr.length - 1].charAt(0).toUpperCase() +
    arr[arr.length - 1].substr(1).toLowerCase();

  const single = `${first + ' and ' + last}`;
  const multiple = `${first + ', ' + list.join(', ') + ' and ' + last}`;

  return !list.length ? single : multiple;
};

export default formatString;
