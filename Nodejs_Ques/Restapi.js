const express = require('express');
const app = express();

const users = [
    { id: 1, name: 'Akhil' },
    { id: 2, name: 'Bobby' },
];

app.get('/users', (req, res) => {
    res.json(users);
});

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});
