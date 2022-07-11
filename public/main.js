// const { forEach } = require("lodash");

const { format } = require("sequelize/types/utils");


const url = 'http://localhost:4003';

const bookGallery = document.getElementById('book-gallery');
const popup = document.getElementById('popup');

const bookForm = document.getElementById('book-form');

// Do i need these below or is having them in my form event listener enough?
let bookTitle = document.getElementById('book-title').value;
let bookAuthor = document.getElementById('book-author').value;
let bookImg = document.getElementById('book-img').value;
let bookCategory = document.querySelector('#book-category').value;
let bookDescription = document.getElementById('book-description').value;

function getBooks() {
    console.log('get books test');
    axios.get(`${url}/books`).then(res => console.log(res.data));
};

getBooks();

// ****need help with code for adding to website gallery from database images 
// currently getting a sequelize error in browser***
function displayBooks() {
    axios.get(`${url}/gallery`).then(res => {
        console.log('display books test');
        sequelize.query(`SELECT image_url FROM books`).forEach(([i]) => {
            const image = document.createElement('img');
            image.src = `${img_url} from database`;
            image.alt = `Book image for ${title}`;
            image.classList.add('bookGalleryImg');

            image.addEventListener('click', () => {
                // popup code
            });

            bookGallery.appendChild(image);
        });

        popup.addEventListener('click', () => {
            // close popup off click code
        });

    });
};

displayBooks();

// front end filter by category button functions? 
let filterInput = document.getElementById('filterButtons');
filterInput.addEventListener('click', filterButtons)
function filterButtons() {
    // get value of book-category buttons when clicked and display filtered gallery
    // do i need to create function for each button or is there a way to do it using DOM ID when clicked?
};

// sequelize select by category from table & display on front end?

// Add.html - post form data to database
format.addEventListener('submit', function (event) {
    event.preventDefault();

    let bookTitle = document.getElementById('book-title').value;
    let bookAuthor = document.getElementById('book-author').value;
    let bookImg = document.getElementById('book-img').value;
    let bookCategory = document.querySelector('#book-category').value;
    let bookDescription = document.getElementById('book-description').value;

    // how to get this front end to connect with backend and post values to my database?

});