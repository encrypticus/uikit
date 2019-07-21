const searchForm = document.querySelector('.search-form');
const searchField = searchForm.querySelector('.search-field');

const toggleSearchFieldClass = function (event) {
  const field = event.currentTarget;

  if (field.value.trim() === '') {
    field.classList.add('search-field_error');
    field.value = 'I’ve not found what I’m looking for...';
  } else {
    field.classList.remove('search-field_error');
  }
};

const toggleSearchFormClass = function (event) {
  const searchFieldValue = searchField.value.trim();

  if (searchFieldValue === '') {
    searchField.classList.add('search-field_error');
    searchField.value = 'I’ve not found what I’m looking for...';
    event.preventDefault();
  } else {
    searchField.classList.remove('search-field_error');
  }
};

searchField.addEventListener('blur', toggleSearchFieldClass, false);
searchForm.addEventListener('submit', toggleSearchFormClass, false);
