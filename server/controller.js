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
    getAllBooks: (req, res) => {
        // console.log("test")
        sequelize.query(`SELECT * FROM books`).then((dbRes) => res.status(200).send(dbRes[0])).catch(err => console.log(error));
    },

    displayBooks: (req, res) => {
        sequelize.query(`SELECT image_url FROM books`).then((dbRes) => res.status(200).send(dbRes[0])).catch(err => console.log(error));
    },

    // help with the add book app.post function & get it to pull from the form data entered
    addBooks: (req, res) => {
        sequelize.query(`
            INSERT INTO books ('title', 'author', 'category', 'image_url', 'short_description')
            VALUES ${title}, ${author}, ${category}, ${image_url}, ${short_description}`)
            .then((dbRes) => res.status(200)).sent((dbRes[0])).catch(err => console.log(error));
    }
}

