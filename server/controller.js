require("dotenv").config();
const { CONNECTION_STRING } = process.env;
const Sequelize = require("sequelize");

const sequelize = new Sequelize(CONNECTION_STRING, {
    dialiect: "postgres",
    dialectOptions: {
        ssl: {
            rejectUnauthorized: false
        }
    }
});

module.exports = {
    getAllBooksByCategory: (req, res) => {
        const { category } = req.query;
        if (category) {
            sequelize.query(`SELECT * FROM books WHERE category='${category}'`).then((dbRes) => res.status(200).send(dbRes[0])).catch(error => console.log(error));
        } else {
            sequelize.query(`SELECT * FROM books`).then((dbRes) => res.status(200).send(dbRes[0])).catch(error => console.log(error));
        }
    },

    displayBooks: (req, res) => {
        sequelize.query(`SELECT image_url, title, author, short_description FROM books`).then((dbRes) => res.status(200).send(dbRes[0])).catch(error => console.log(error));
    },

    // ***** help with the add book app.post function & get it to pull from the form data entered ****
    addBooks: (req, res) => {
        sequelize.query(`
            INSERT INTO books ('title', 'author', 'category', 'image_url', 'short_description')
            VALUES ${title}, ${author}, ${category}, ${image_url}, ${short_description}`).then((dbRes) => res.status(200)).send((dbRes[0])).catch(error => console.log(error));
    },

    sortAz: (req, res) => {
        sequelize.query(`SELECT * FROM books ORDER BY title ASC`).then((dbRes) => res.status(200).send(dbRes[0])).catch(error => console.log(error));
    }
}

