const express = require("express");
const path = require("path");
const app = express();

const PORT = process.env.PORT || 3000;

app.use('/js', express.static(path.join(__dirname, '../../src/js')));
app.use('/css', express.static(path.join(__dirname, '../../src/css')));

app.get('/', (req, res) => { 
    res.sendFile(path.join(__dirname, '../html', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
