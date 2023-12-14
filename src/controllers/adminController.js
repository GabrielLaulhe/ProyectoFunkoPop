const fs = require ("fs")
const funko = JSON.parse(fs.readFileSync("./public/funko.json", "utf8"));

const adminController = {


    getAdmin: (req, res) => {res.render('admin/admin', {title: "Admin | Funkoshop", funko:funko})},
    getCreate: (req, res) => res.send('route for find users and items'),
    postCreate: (req, res) => res.send('route for add users'),
    getEdit: (req, res) => {
    
    const idParam = parseInt(req.params.id);
    const item = funko.find(item => item.product_id === idParam);

    res.render('admin/edit', {view: {title: "Item | Funkoshop"},
                item: item,
        });

    },
    putEdit: (req, res) => res.send('route for edit'),
    delete: (req, res) => res.send('route for delete users')

} 

module.exports = adminController;