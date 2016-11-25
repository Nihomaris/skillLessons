const express = require('express');
const cors = require('cors');

const valid = require('./valid');
// const convert = require('color-convert');

const app = express();
app.use(cors());
app.get('/', (req, res) => {

if(req.query.color) {
  res.send(valid(req.query.color));
} else {
  res.send('Invalid color');
}
  
});


app.listen(3000, () => {
  console.log('Your app listening on port 3000!');
});


const test = [ 'aaafff',
  '000fff',
  'ABCDEF',
  '1A2B3C',
  '000000',
  'fff',
  'abc',
  '000',
  ' abcdef',
  ' abcdef',
  '-123456',
  '00',
  '',
  'bcdefg',
  'abcdeff',
  '0bcdeff',
  undefined,
  undefined,
  '#ababab',
  '#aba',
  '#232323',
  '##ababab',
  '#abcd' ]

