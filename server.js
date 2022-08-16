const express = require('express')
const app = express();
const cors = require('cors')

app.use(cors({
    origin: 'http://127.0.0.1:5500' //origin: * for all
}));

app.get('/data', (req, res) => {
    res.json({name : 'rafay',subject: 'computer science'});
});

app.listen(5000, () => {
    console.log('server is listening on port 5000');
});