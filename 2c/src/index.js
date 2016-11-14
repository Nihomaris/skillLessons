const express = require('express');
const cors = require('cors');
const canonize = require('./reg');

const app = express();

app.use(cors());
app.get('/', (req, res) => {
  const username = canonize(req.query.username);
  console.log(username);
  res.send('@' + username[7]);
});


app.listen(3000, () => {
  console.log('Your app listening on port 3000!');
});



