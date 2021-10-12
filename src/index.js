const express = require('express');
const app = express();
const router = require("./routes");


app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.listen( process.env.SYSTEM_PORT, () => {
    console.log("Server is running at localhost: ", process.env.SYSTEM_PORT);

});