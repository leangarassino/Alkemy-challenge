const express = require('express');
const apiRouter = require('./routes/api')
require('./db');


const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use('/api', apiRouter);

app.listen(3000, () => {
    console.log('Servidor arrancado!');
})