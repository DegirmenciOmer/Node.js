const { json } = require('express');
const express = require('express')
const exphbs = require('express-handlebars')
const app = express();
 

// YOUR CODE GOES IN HERE

app.use(express.json());

app.set('view engine', 'handlebars');
app.engine('handlebars', exphbs({ defaultLayout: false }));

app.get('/', function (req, res) {
  res.render('index');
});


app.post('/weather', (req,res) => {
  const targetCity = req.body.cityName;
  res.send(targetCity)
});



 

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server started on port ${port}`));