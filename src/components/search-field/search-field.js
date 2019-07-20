const searchForm = document.querySelector('.search-form');
const searchField = searchForm.querySelector('.search-field');

searchField.addEventListener('blur', (event) => {
  const field = event.currentTarget;

  if (field.value.trim() === '') {
    field.classList.add('search-field_error');
    field.value = 'I’ve not found what I’m looking for...';
  } else {
    field.classList.remove('search-field_error');
  }
}, false);

searchForm.addEventListener('submit', (event) => {
  if (searchField.value.trim() === '') {
    searchField.classList.add('search-field_error');
    searchField.value = 'I’ve not found what I’m looking for...';
    event.preventDefault();
  } else {
    searchField.classList.remove('search-field_error');
  }
}, false);
