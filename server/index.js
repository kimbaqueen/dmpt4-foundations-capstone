require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const { SERVER_PORT } = process.env;
const { seed } = require('./seed.js');

// const { getBooks, addBooks } = require('./controller.js');

app.use(express.json());
app.use(cors());


const bookGallery = document.getElementById("book-gallery");

// ****need help with connecting to database & adding to website gallery***
app.get()
    // or fetch ()?
    .then(req, res => {
        // imageLoop.forEach (i => {
        const image = document.createElement('img');
        image.src = `${img_url} from database`;
        image.alt = `Book image for ${title}`;
        image.classList.add('galleryImg');
        // });

        image.addEventListener('mouseover', () => {
            // hover text overlay - pulling title, author, description from database
            // if this doesn't look right may switch to a popup instead
        });

        // image.addEventListener('mouseout', () => {
        //     // goes back to normal
        // });

        bookGallery.appendChild(image);
    });




app.post('/seed', seed);

app.listen(SERVER_PORT, () => console.log(`We listening up on ${SERVER_PORT}`));