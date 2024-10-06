const express = require('express');
const crypto = require("crypto");

let uuid = crypto.randomUUID();

const app = express();
const PORT = 3000;

app.get('/', async (req, res) => {
    console.log("Someone is coming to my server!");
    res.send(`<h1>Hello, World! from Dockerized Node Application</h1>
                <h2>My uuid is ${uuid}</h2>
              `);
});

app.listen(PORT, () => {
    console.log(`App is running on PORT ${PORT}`);
});
