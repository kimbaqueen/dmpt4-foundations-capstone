require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const { SERVER_PORT } = process.env;
const { seed } = require('./seed.js');
const { getAllBooks, displayBooks, addBooks } = require('./controller.js');


app.use(express.json());
app.use(cors());



app.get('/books', getAllBooks);

app.get('/gallery', displayBooks);

app.post('/books', addBooks);

app.post('/seed', seed);

app.listen(SERVER_PORT, () => console.log(`We listening up on ${SERVER_PORT}`));