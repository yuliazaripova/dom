/* eslint-disable no-restricted-globals */
import renderHistoryBtns from '../../components/history/history';

const renderScreenInformation = () => {
  let info = '<div class="jumbotron">';
  info += `<p class="list-group-item">availHeight - ${screen.availHeight}px - доступная высота экрана без элементов интерфейса ОС</p>`;

  info += `<p class="list-group-item">availWidth - ${screen.availWidth}px - доступная ширина экрана без элементов интерфейса ОС</p>`;

  info += `<p class="list-group-item">colorDepth - ${screen.colorDepth} - глубина цвета: количество бит, используемых для отображения цвета (1, 4, 8, 15, 16, 24 или 32)</p>`;

  info += `<p class="list-group-item">height - ${screen.height}px - общая высота экрана</p>`;

  info += `<p class="list-group-item">pixelDepth - ${screen.pixelDepth}px - глубина пикселя</p>`;

  info += `<p class="list-group-item">width - ${screen.width}px - общая ширина экрана</p></div>`;

  document.getElementById('root').innerHTML += info;
};

renderHistoryBtns();
renderScreenInformation();
