//Module imports
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

//Server and DB config imports
const serverConfig = require('./configs/server.config');
const dbConfig = require('./configs/db.config');

//Declaring the express app.
const app = express();

//Configuring the app to use cors and body-parser
app.use(cors());
app.use(express.json())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Connecting to DB
mongoose.connect(dbConfig.DB_URL);
const db = mongoose.connection;
db.on("error", () => {
  console.log("Error while connecting to MongoDB")
});
db.once("open", () => {
  console.log("Connected to MongoDB");
})

// app.get('/', (req, res) => {
//   res.status(200).send("Hello World")
// })

require('./routes/data.route')(app);

app.listen(serverConfig.PORT, () => {
  console.log(`Server running on PORT: ${serverConfig.PORT}`);
})



