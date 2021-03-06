const url = 'http://localhost:4003';
const bookForm = document.getElementById('book-form');
const inputs = document.querySelectorAll('#book-title, #book-author, #book-img, #book-category, #book-description');

function addToGallery(book) {
    axios.post(`${url}/gallery`, book).then((res) => {
        renderBooks(res);
    });
};


bookForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const book = {
        title: document.getElementById('book-title').value,
        author: document.getElementById('book-author').value,
        image_url: document.getElementById('book-img').value,
        category: document.querySelector('#book-category').value,
        short_description: document.getElementById('book-description').value,
    };

    addToGallery(book);

    alert("Book Submitted!");

    inputs.forEach(input => {
        input.value = '';
    });
});