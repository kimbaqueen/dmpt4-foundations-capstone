const url = 'http://localhost:4003';


const bookGallery = document.getElementById('book-gallery');
const popup = document.getElementById('popup');
const selectedBook = document.getElementById('selected-book');

const sortAlpha = document.getElementById('sort-alpha');

const cybersecurityCategory = document.getElementById('cybersecurity');
const dataCategory = document.getElementById('data');
const devopsCategory = document.getElementById('dev-ops');
const leadershipCategory = document.getElementById('leadership');
const productCategory = document.getElementById('product');
const softwareCategory = document.getElementById('software');
const uxuiCategory = document.getElementById('ux-ui');

function displayBooks() {
    axios.get(`${url}/gallery`).then((res) => {
        renderBooks(res);
    });
};

displayBooks();

function renderBooks(res) {
    for (let i = 0; i < res.data.length; i++) {
        const image = document.createElement('img');
        image.src = res.data[i].image_url;
        image.alt = res.data[i].title;
        image.classList.add('bookGalleryImg');

        image.addEventListener('click', () => {
            popup.style.transform = `translateY(0)`;
            renderPopupContents(res);
            console.log('event listener', res);
        });
        bookGallery.appendChild(image);
    };

    popup.addEventListener('click', () => {
        selectedBook.innerText = "";
        popup.style.transform = `translateY(-100%)`;
    });
};

// ***** insert selected book data from table to display as inner text for the function below ****
// create a function? that pulls selected image book info from database (singular)
// Then maybe need to pass this new function into the renderPopupContents invoked function around line 35?
// to get it to insert image info into the innerText lines of renderPopupContents function?
// res.data.title ... res.data.author... res.data.short_description
// maybe i can just add the above to the renderBooks function instead. since i'm already tapped into the database and info i need.

// i'm tapped into the data!!! but it's  not dynamic... need it to auto update everytime i select a different image. loop?

function renderPopupContents(res) {
    const popupTitle = document.createElement('div');
    popupTitle.innerText = res.data[0].title;
    popupTitle.classList.add('popup-title');
    console.log('popup', res);

    const popupAuthor = document.createElement('div');
    popupAuthor.innerText = res.data[0].author;
    popupAuthor.classList.add('popup-author');

    const popupDescription = document.createElement('div');
    popupDescription.innerText = res.data[0].short_description;
    popupDescription.classList.add('popup-description');

    selectedBook.appendChild(popupTitle);
    selectedBook.appendChild(popupAuthor);
    selectedBook.appendChild(popupDescription);
};

function getAllBooksByCategory(category) {
    axios.get(`${url}/books?category=${category}`).then((res) => {
        bookGallery.innerHTML = "";
        renderBooks(res);
    });
};

function sortAz() {
    axios.get(`${url}/sortedBooks`).then((res) => {
        bookGallery.innerHTML = "";
        renderBooks(res);
    });
};

function sortZa() {
    axios.get(`${url}/descBooks`).then((res) => {
        bookGallery.innerHTML = "";
        renderBooks(res);
    });
};

sortAlpha.addEventListener('click', () => {
    sortAz();
});

sortAlpha.addEventListener('dblclick', (event) => {
    sortZa(event);
});

cybersecurityCategory.addEventListener('click', () => {
    getAllBooksByCategory('Cybersecurity');
});

dataCategory.addEventListener('click', () => {
    getAllBooksByCategory('Data');
});

devopsCategory.addEventListener('click', () => {
    getAllBooksByCategory('DevOps');
});

leadershipCategory.addEventListener('click', () => {
    getAllBooksByCategory('Leadership');
});

productCategory.addEventListener('click', () => {
    getAllBooksByCategory('Product Management');
});

softwareCategory.addEventListener('click', () => {
    getAllBooksByCategory('Software Engineering');
});

uxuiCategory.addEventListener('click', () => {
    getAllBooksByCategory('UX/UI');
});
