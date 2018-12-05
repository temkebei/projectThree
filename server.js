const express = require('express');
const mongoose = require('mongoose');
const db = require("./models")
const path = require('path');
const PORT = process.env.PORT || 3001;
const app = express();
app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());

app.use(express.static(path.join(__dirname, 'client/build')));
//'mongodb://localhost/recipe_db'
//process.env.MONGODB_URI,
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true
});
// mongoose.connect('mongodb://localhost/data', { useNewUrlParser: true });
// mongoose.connect('mongodb://localhost/users', { useNewUrlParser: true });
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});
require('./routes/api-routes')(app);
app.listen(PORT, function () {
  console.log(`App running on port ${PORT}`);
  
});