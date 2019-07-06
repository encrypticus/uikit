var searchForm = document.querySelector('.page-header__form'),
    searchField = searchForm.querySelector('.search-field'),
    searchButton = searchForm.querySelector('.search-field__button');

searchField.addEventListener('blur', function () {

  if (this.value.trim() === '') {
    this.classList.add('search-field_error');
    this.value = 'I’ve not found what I’m looking for...';
  } else {
    this.classList.remove('search-field_error');
  }
}, false);

searchForm.addEventListener('submit', function (event) {

  if (searchField.value.trim() === '') {
    searchField.classList.add('search-field_error');
    searchField.value = 'I’ve not found what I’m looking for...';
    event.preventDefault();
  }  else {
    searchField.classList.remove('search-field_error');
  }
}, false);