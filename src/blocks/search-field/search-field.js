const searchFields = document.querySelectorAll(".search-field_error");

Array.prototype.forEach.call(searchFields, function (field) {
  field.value = "I’ve not found what I’m looking for...";
});