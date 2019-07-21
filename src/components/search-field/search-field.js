const searchForm = document.querySelector('.search-form');
const searchField = searchForm.querySelector('.search-field');

const toggleFieldClass = function toggleSearchFieldClass(event) {
  const field = event.currentTarget;

  if (field.value.trim() === '') {
    field.classList.add('search-field_error');
    field.value = 'I’ve not found what I’m looking for...';
  } else {
    field.classList.remove('search-field_error');
  }
};

const toggleFormClass = function toggleSearchFormClass(event) {
  const searchFieldValue = searchField.value.trim();

  if (searchFieldValue === '') {
    searchField.classList.add('search-field_error');
    searchField.value = 'I’ve not found what I’m looking for...';
    event.preventDefault();
  } else {
    searchField.classList.remove('search-field_error');
  }
};

searchField.addEventListener('blur', toggleFieldClass, false);
searchForm.addEventListener('submit', toggleFormClass, false);
