const express = require('express');
const app = express();
const path = require('path');

// app.get('/', (req, res) => {
//     res.send("Hello Express");
// });

// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });
const users = [
    {
        id: 1,
        name: 'Arm',
        email: 'Arm@gmail'
    },
    {
        id: 2,
        name: 'Art',
        email: 'Art@gmail'
    },
    {
        id: 1,
        name: 'May',
        email: 'May@gmail'
    }
]

app.get('/api/users', (req, res) => {
    res.json(users);
});


/* Set Static Folder */
app.use(express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log('Runing on port: '+PORT);
});