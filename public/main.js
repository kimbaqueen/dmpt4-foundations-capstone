// const { forEach } = require("lodash");


const url = 'http://localhost:4003';

const bookGallery = document.getElementById('book-gallery');
const popup = document.getElementById('popup');
const bookTitle = document.getElementById('book-title');
const bookAuthor = document.getElementById('book-author');
const bookDescription = document.getElementById('book-description');

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
// sequelize select by category from table & display on front end?