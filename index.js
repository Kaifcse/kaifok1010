const express = require('express');
const path = require('path');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
    res.render('index', { title: 'EJS Demo', message: 'Hello ji kaise hai aap!' });
});

const PORT = 3010;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});