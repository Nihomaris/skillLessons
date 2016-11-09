const express = require('express');
const cors =require('cors');

const app = express();
app.use(cors());
app.get('/', (req, res) => {
  var [lastname, ...other] = req.query.fullname.replace(/\s+/g," ").replace(/^\s+|\s+$/g, "").split(' ').reverse();
  if(lastname == '' || lastname.search(/[0-9_\+|-|\/|\*]/) !== -1) { res.end('Invalid fullname') }
  var names = ''
  other.forEach(function(item, i, arr) {
  	if(arr.length > 2 || item.search(/[0-9_\+|-|\/|\*]/) !== -1) { res.end('Invalid fullname') }
  	names = ' ' + item.slice(0, 1).toUpperCase() + '.' + names;
  });

  lastname = lastname.charAt(0).toUpperCase() + lastname.substr(1).toLowerCase();

  res.send(lastname  + names);
});


app.listen(3000, () => {
  console.log('Your app listening on port 3000!');
});
