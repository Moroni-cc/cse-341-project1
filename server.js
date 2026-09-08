const express = require('express');
const app = express();
const mongodb = require('./db/connect');

const port = process.env.PORT || 8080;

app.use('/', require('./routes'));

mongodb.initDb((err) => {
    if (err) {
        console.log(err);
    } else {
        app.listen(port, () => {
            console.log(`Base de datos conectada y servidor corriendo en el puerto ${port}`);
        });
    }
});