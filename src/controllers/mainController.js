const fs = require ("fs")
const funko = JSON.parse(fs.readFileSync("./public/funko.json", "utf8"));


const mainControllers = {

    home: (req, res) => {res.render('index', {title: "Home | Funkoshop", funko:funko})},
    contact: (req, res) => res.send('Route for contact view'),
    about: (req, res) => res.send('Route for about view'),
    faqs: (req, res) => res.send('Route for faqs view')
}

module.exports = mainControllers;