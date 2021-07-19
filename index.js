const express = require('express');
const app = express();
const path = require('path');
const userList = require('./Users');
const Logger = require('./middleware/logger');
const users = require('./routes/api/users');
var exphbs  = require('express-handlebars');

/* Body Parse middleware */
app.use(express.json());
app.use(express.urlencoded({extended: false}));

/* Handlebar Middleware */
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

/* Homepage Routes */
app.get('/' ,(req, res) => {
    res.render('index', {
        title: 'xXx',
        userList
    });
});

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

app.use('/api/users', users);



/* Set Static Folder */
app.use(express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log('Runing on port: '+PORT);
});