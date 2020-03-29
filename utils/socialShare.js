const socialMedia = (site, pageUrl, text = '') => {
  let url;

  switch (site) {
    case 'facebook':
      url = 'https://www.facebook.com/sharer.php?u=' + pageUrl;
      break;
    case 'twitter':
      url = 'https://twitter.com/intent/tweet?url=' + pageUrl + '&text=' + text;
      break;
    default:
      break;
  }

  return url;
};

export const openSocialWindow = (site, pageUrl, text) => {
  var left = (screen.width - 570) / 2;
  var top = (screen.height - 570) / 2;
  var params =
    'menubar=no,toolbar=no,status=no,width=570,height=570,top=' +
    top +
    ',left=' +
    left;

  const url = socialMedia(site, pageUrl, text);

  window.open(url, 'NewWindow', params);
};
