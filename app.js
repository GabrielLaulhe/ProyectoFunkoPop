const express = require('express');
const {resolve} = require('path');
//const path = require('path');
const app = express();
const mainRoutes = require('./src/routes/mainRoutes');
const shopRoutes = require('./src/routes/shopRoutes');
const adminRoutes = require('./src/routes/adminRoutes');
const authRoutes = require('./src/routes/authRoutes');

app.use(express.static('public'));

app.use('/', mainRoutes);
app.use('/', shopRoutes);
app.use('/', adminRoutes);
app.use('/auth', authRoutes);

app.set('view engine', 'ejs');
//app.set('views', resolve() + '/src/views');
//app.set('views', path.join(__dirname, 'views'));
app.set('views', resolve(__dirname, 'src/views'));



app.use(express.urlencoded({extended: true}));
app.use(express.json());

const port = 3000;
app.listen(port, () => console.log("Servidor corriendo en http://localhost:3000"));


