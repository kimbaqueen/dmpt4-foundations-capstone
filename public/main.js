
const url = 'http://localhost:4003';

const bookGallery = document.getElementById('book-gallery');
const popup = document.getElementById('popup');

const bookForm = document.getElementById('book-form');


function getBooks() {
    console.log('get books test');
    axios.get(`${url}/books`).then(res => console.log(res.data));
};

getBooks();

function displayBooks() {
    axios.get(`${url}/gallery`).then(res => {
        console.log('display books test');
        for (let i = 0; i < res.data.length; i++) {
            const image = document.createElement('img');
            image.src = res.data[i].image_url;
            image.alt = res.data[i].title;
            image.classList.add('bookGalleryImg');

            image.addEventListener('click', () => {
                // popup code - goal to display title, author, description in pop up window on click
                popup.style.transform = `translateY(0)`;

                // *** 3 elements below aren't displaying as expected on my pop up ***
                const popupTitle = document.createElement('div');
                popupTitle.innerHTML = res.data[i].title;
                popupTitle.classList.add('popup-title');

                const popupAuthor = document.createElement('div');
                popupAuthor.innerHTML = res.data[i].author;
                popupAuthor.classList.add('popup-author');

                const popupDescription = document.createElement('div');
                popupDescription.innerHTML = res.data[i].short_description;
                popupDescription.classList.add('popup-description');
            });

            bookGallery.appendChild(image);
        };

        popup.addEventListener('click', () => {
            popup.style.transform = `translateY(-100%)`;
        });
    });
};

displayBooks();

// front end filter by category button functions? 
// let filterInput = document.getElementById('filterButtons');
// filterInput.addEventListener('click', filterButtons)
// function filterButtons() {
//     // get value of book-category buttons when clicked and display filtered gallery
//     // do i need to create function for each button or is there a way to do it using DOM ID when clicked?
// };

// sequelize select by category from table & display on front end?

// Add.html - post form data to database
// bookForm.addEventListener('submit', function (event) {
//     event.preventDefault();

//     let bookTitle = document.getElementById('book-title').value;
//     let bookAuthor = document.getElementById('book-author').value;
//     let bookImg = document.getElementById('book-img').value;
//     let bookCategory = document.querySelector('#book-category').value;
//     let bookDescription = document.getElementById('book-description').value;

//     // how to get this front end to connect with backend and post values to my database?

// });