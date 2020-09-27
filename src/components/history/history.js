/* eslint-disable no-restricted-globals */
import createElement from '../../helpers/helpers';

const renderHistoryBtns = () => {
  const backButton = createElement('button', 'btn btn-primary', '<= Back');
  const forwardButton = createElement('button', 'btn btn-primary', 'Go =>');
  const histLength = createElement('span', 'badge badge-pill badge-dark', `Length: ${history.length}`);
  const btnContainer = createElement('div', 'container');
  histLength.style.marginLeft = '5px';
  btnContainer.style.margin = '20px 0 20px 0';

  backButton.addEventListener('click', () => history.back());
  forwardButton.addEventListener('click', () => history.forward());

  btnContainer.append(backButton);
  btnContainer.append(forwardButton);
  btnContainer.append(histLength);

  document.body.prepend(btnContainer);
};

export default renderHistoryBtns;
