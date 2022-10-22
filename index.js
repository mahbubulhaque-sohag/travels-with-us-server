const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

const vehicles = require('./vehicle.json');

app.use(cors());

app.get('/', (req, res) => {
    res.send(`API is running`)
});

app.listen(port, () => {
    console.log(`API is running on ${port}`)
})

app.get('/vehicles', (req, res)=>{
    res.send(vehicles);
});
