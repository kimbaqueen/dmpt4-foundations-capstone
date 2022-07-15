
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


const bookForm = document.getElementById('book-form');

function renderBooks(res) {
    for (let i = 0; i < res.data.length; i++) {
        const image = document.createElement('img');
        image.src = res.data[i].image_url;
        image.alt = res.data[i].title;
        image.classList.add('bookGalleryImg');

        // popup code - goal to display title, author, description in pop up window on click
        image.addEventListener('click', () => {
            popup.style.transform = `translateY(0)`;
            // to disply in selectedBook div
            // for (let j = 0; j < res.data.length; j++) {
            //     console.log("test");
            //     // *** 3 elements below aren't displaying as expected on my pop up ***
            //     const popupTitle = document.createElement('div');
            //     popupTitle.innerText = res.data[j].title;
            //     popupTitle.classList.add('popup-title');

            //     const popupAuthor = document.createElement('div');
            //     popupAuthor.innerText = res.data[j].author;
            //     popupAuthor.classList.add('popup-author');

            //     const popupDescription = document.createElement('div');
            //     popupDescription.innerText = res.data[j].short_description;
            //     popupDescription.classList.add('popup-description');
            // };
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
    // console.log('filter books test');
    axios.get(`${url}/books?category=${category}`).then((res) => {
        console.log(res);
        bookGallery.innerHTML = "";

        renderBooks(res);
    });
};


// *** A-Z button sort *** needs help
// replace with if statement true/false 2 event listeners
// sortAlpha.addEventListener('click', () => {
//     res.data[i].sort(function (a, b) {
//         if (a.res.data[i].title.toLowerCase() < b.res.data[i].title.toLowerCase()) {
//             return -1;
//         } else if (a.res.data[i].title.toLowerCase() > b.res.data[i].title.toLowerCase()) {
//             return 1;
//         } else {
//             return 0;
//         }
//     });
// });

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





// **** 2nd view ---- Add.html ---- post form data to database*****

// bookForm.addEventListener('submit', function (event) {
//     event.preventDefault();

//     let bookTitle = document.getElementById('book-title').value;
//     let bookAuthor = document.getElementById('book-author').value;
//     let bookImg = document.getElementById('book-img').value;
//     let bookCategory = document.querySelector('#book-category').value;
//     let bookDescription = document.getElementById('book-description').value;

//     // how to get this front end to connect with backend and post values to my database?

// });