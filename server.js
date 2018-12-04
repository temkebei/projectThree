const express = require('express');
const mongoose = require('mongoose');
const db = require("./models")
const PORT = process.env.PORT || 3001;
const app = express();
app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());
app.use(express.static("public"));
mongoose.connect('mongodb://localhost/recipe_db', {
  useNewUrlParser: true
});
// mongoose.connect('mongodb://localhost/data', { useNewUrlParser: true });
// mongoose.connect('mongodb://localhost/users', { useNewUrlParser: true });
require('./routes/api-routes')(app);
app.listen(PORT, function () {
  console.log(`App running on port ${PORT}`);
  
});