const express = require('express');
const cors = require('cors');
const pc = require('./pc');

const app = express();

app.use(cors());

app.get('/*', (req, res) => {
  	res.send(pc(req.url));
});


app.listen(3000, () => {
  console.log('Your app listening on port 3000!');
});
