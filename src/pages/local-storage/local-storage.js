import renderHistoryBtns from '../../components/history/history';
import createElement from '../../helpers/helpers';

const renderLocalStorageItems = () => {
  const root = document.getElementById('root');
  const inputGroup = createElement('div', 'input-group mb-3');
  const input = '<input type="text" class="form-control" placeholder="Enter item ..." id="inputDefault">';
  inputGroup.innerHTML += input;
  const listContainer = createElement('ul', 'list-group');
  const inputGroupAppend = createElement('div', 'input-group-append');
  const addBtn = createElement('button', 'btn btn-outline-success', '+ add item');

  const createListItem = (key, pre) => {
    const listItem = createElement('li', 'list-group-item d-flex justify-content-between');
    listItem.dataset.list = `${key.replace(/\s+/g, '')}`;
    listItem.innerHTML = `<p style="width:80%">${key}: ${localStorage.getItem(key)}</p>`;
    const deleteBtn = createElement('button', 'btn btn-outline-danger', 'x');
    deleteBtn.addEventListener('click', () => {
      localStorage.removeItem(key);
      document.querySelector(`[data-list=${key.replace(/\s+/g, '')}]`).classList.add('display-none');
    });
    listItem.append(deleteBtn);
    if (pre) {
      listContainer.prepend(listItem);
    } else {
      listContainer.append(listItem);
    }
  };

  addBtn.addEventListener('click', () => {
    const defaultInput = document.querySelector('#inputDefault');
    const { value } = defaultInput;
    localStorage.setItem(value, value);
    defaultInput.value = '';
    createListItem(value, true);
  });

  inputGroupAppend.append(addBtn);
  inputGroup.append(inputGroupAppend);
  root.append(inputGroup);

  for (let i = 0; i < localStorage.length; i += 1) {
    const key = localStorage.key(i);
    createListItem(key, false);
  }

  root.append(listContainer);
};

renderHistoryBtns();
renderLocalStorageItems();
