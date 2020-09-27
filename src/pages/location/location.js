/* eslint-disable no-undef */
/* eslint-disable no-restricted-globals */
import renderHistoryBtns from '../../components/history/history';

const renderLocation = () => {
  let info = '<div class="jumbotron">';
  info += `<p class="" data-toggle="tooltip" data-placement="right" title="" data-original-title="'#' с последующим идентификатором">hash - ${location.hash}</p>`;

  info += `<p class="" data-toggle="tooltip" data-placement="right" title="" data-original-title="'?' с последующими параметрами URL">search - ${location.search}</p>`;

  info += `<p class="" data-toggle="tooltip" data-placement="right" title="" data-original-title="домен текущего URL">hostname - ${location.hostname}</p>`;

  info += `<p class="" data-toggle="tooltip" data-placement="right" title="" data-original-title="URL полностью">href - ${location.href}</p>`;

  info += `<p class="" data-toggle="tooltip" data-placement="right" title="" data-original-title="первый '/' после хоста с последующим текстом URL">pathname - ${location.pathname}</p></div>`;

  document.getElementById('root').innerHTML += info;

  $(() => {
    $('[data-toggle="tooltip"]').tooltip();
  });
};

renderHistoryBtns();
renderLocation();
