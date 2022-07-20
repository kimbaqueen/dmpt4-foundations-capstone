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

    addBooks: (req, res) => {
        const { title, author, category, image_url, short_description } = req.body;
        console.log(req.body);
        sequelize.query(`
            INSERT INTO books (title, author, category, image_url, short_description)
            VALUES ('${title}', '${author}', '${category}', '${image_url}', '${short_description}')`).then(() => res.sendStatus(200)).catch(error => console.log(error));
    },

    sortAz: (req, res) => {
        sequelize.query(`SELECT * FROM books ORDER BY title ASC`).then((dbRes) => res.status(200).send(dbRes[0])).catch(error => console.log(error));
    },

    sortZa: (req, res) => {
        sequelize.query(`SELECT * FROM books ORDER BY title DESC`).then((dbRes) => res.status(200).send(dbRes[0])).catch(error => console.log(error));
    }
}

