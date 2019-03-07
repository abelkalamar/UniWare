require('dotenv').config();
const PORT = 3000;
const path = require('path');
const express = require('express');

const app = express();
const cors = require('cors');
app.use(cors());

const mongoose = require('mongoose');

mongoose.connect(`mongodb+srv://UniWare:${process.env.DB_PASSWORD}@cluster0-qqnoc.mongodb.net/uni`,
  {
    useNewUrlParser: true,
    useCreateIndex: true,
  });

mongoose.connection.once('open', () => {
  console.log('Connection has been made!');
}).on('error', (error) => {
  console.log('Connection error:', error.message);
});

app.use(express.json());
app.use('/static', express.static('static'));

app.use(express.static('./dist'));

app.get('/', function(req,res) {
    
  res.sendFile(path.join(__dirname,'./dist/index.html'));
});

const services = require('./routes/index');

app.use(services);

if (!module.parent) {
  app.listen(PORT, () => console.log(`Port is listening on ${PORT}`)); // eslint-disable-line
}

app.use((req, res, next) => {
  const error = new Error('Not found');
  error.status = 404;
  next(error);
});
app.use((error, req, res) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message
    }
  });
});

module.exports = app;
