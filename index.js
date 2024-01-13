function fetchBooks() {
  return fetch("https://anapioficeandfire.com/api/books")
    .then((resp) => resp.json())
    .then((json) => renderBooks(json));
}

function renderBooks(books) {
  const bookTitles = books.map((book) => book.title);
  console.log(bookTitles);
}

document.addEventListener("DOMContentLoaded", fetchBooks);
