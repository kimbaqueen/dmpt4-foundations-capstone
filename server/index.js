require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');
const { SERVER_PORT } = process.env.PORT || 4003;
const { seed } = require('./seed.js');
const { displayBooks, addBooks, getAllBooksByCategory, sortAz, sortZa } = require('./controller.js');

app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, "../public")));


app.get('/books', getAllBooksByCategory);

app.get('/gallery', displayBooks);

app.get('/sortedBooks', sortAz);

app.get('/descBooks', sortZa);

app.post('/gallery', addBooks);

app.post('/seed', seed);

app.listen(SERVER_PORT, () => console.log(`We listening up on ${SERVER_PORT}`));