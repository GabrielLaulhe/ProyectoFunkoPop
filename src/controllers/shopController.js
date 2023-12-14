const fs = require ("fs")
const funko = JSON.parse(fs.readFileSync("./public/funko.json", "utf8"));
let cart = [];
const shopController = {

    shop: (req, res) => {res.render('shop/shop', {title: "Shop | Funkoshop", funko:funko})},
    findItem: (req, res) => {
        const idParam = parseInt(req.params.id);
        const item = funko.find(item => item.product_id === idParam);
        
    
        if (!item) {
          res.status(404).send('El producto con el ID seleccionado no existe o fue eliminado');
        }
    
        res.render('shop/item', {view: {title: "Item | Funkoshop"},
                item: item,
                enableGlide: true
        });
    },


    addItem: (req, res) => {
        const idParam = parseInt(req.params.id);
        const item = funko.find(item => item.product_id === idParam);

        if (!item) {
            res.status(404).send('El producto con el ID seleccionado no existe o fue eliminado');
        }
      cart.push(item);

      res.redirect('/shop/cart');

    },


    getCart: (req, res) => {
      res.render('shop/cart', {
          view: {title: "Carrito | Funkoshop"}, cart: cart})},

    postCart: (req, res) => res.send('Route for go to checkout page')

    };

module.exports = shopController;