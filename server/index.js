require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const { SERVER_PORT } = process.env;
const { seed } = require('./seed.js');
const { displayBooks, addBooks, getAllBooksByCategory, sortAz } = require('./controller.js');


app.use(express.json());
app.use(cors());



app.get('/books', getAllBooksByCategory);

app.get('/gallery', displayBooks);

app.get('/sortedBooks', sortAz);

app.post('/add-books', addBooks);

app.post('/seed', seed);

app.listen(SERVER_PORT, () => console.log(`We listening up on ${SERVER_PORT}`));