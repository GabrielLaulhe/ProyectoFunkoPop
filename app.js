const express = require('express');
const app = express();

app.use(express.static('public'));

const port = 3000;

app.get('/ping', (req, res) => {

    res.send('pong');
})

app.listen(port, () => console.log("Servidor corriendo en http://localhost3000"));

