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




function renderBooks(res) {
    for (let i = 0; i < res.data.length; i++) {
        const image = document.createElement('img');
        image.src = res.data[i].image_url;
        image.alt = res.data[i].title;
        image.classList.add('bookGalleryImg');

        // popup code - goal to display title, author, description in pop up window on click
        image.addEventListener('click', () => {
            popup.style.transform = `translateY(0)`;

            const popupTitle = document.createElement('div');
            popupTitle.innerText = 'test title';
            popupTitle.classList.add('popup-title');

            const popupAuthor = document.createElement('div');
            popupAuthor.innerText = 'test author';
            popupAuthor.classList.add('popup-author');

            const popupDescription = document.createElement('div');
            popupDescription.innerText = 'test description';
            popupDescription.classList.add('popup-description');

            popup.appendChild(popupTitle);
            popup.appendChild(popupAuthor);
            popup.appendChild(popupDescription);


            // *** 3 elements below aren't displaying as expected on my pop up ***

        });
        bookGallery.appendChild(image);
    };

    popup.addEventListener('click', () => {
        popup.style.transform = `translateY(-100%)`;
    });
};

function displayBooks() {
    axios.get(`${url}/gallery`).then((res) => {
        renderBooks(res);
    });
};

displayBooks();

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

sortAlpha.addEventListener('dblclick', () => {
    sortZa();
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


