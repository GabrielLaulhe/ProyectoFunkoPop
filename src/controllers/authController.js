const authController = {

    getLogin: (req, res) => res.send('route for login views'),
    postLogin: (req, res) => res.send('route for login users'),
    getRegister: (req, res) => res.send('route for register views'),
    postRegister: (req, res) => res.send('route for add users'),
    logout: (req, res) => res.send('route for logout users')

}

module.exports = authController;