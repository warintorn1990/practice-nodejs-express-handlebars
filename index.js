const express = require('express');
const app = express();
const path = require('path');
const users = require('./Users');
const Logger = require('./logger');
// const moment = require('moment');

// const logger = (req, res, next) => {
//     console.log(req.get('host'));
//     console.log(req.originalUrl);
//     console.log(moment().format());
//     next();
// }

/* init Middleware */

app.use(Logger);


// app.get('/', (req, res) => {
//     res.send("Hello Express");
// });

// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });

app.get('/api/users', (req, res) => {
    res.json(users);
});


/* Set Static Folder */
app.use(express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log('Runing on port: '+PORT);
});