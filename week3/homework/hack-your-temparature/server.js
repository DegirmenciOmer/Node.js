const express = require('express'),
  hbs = require('express-handlebars'),
  axios = require('axios'),
  app = express(),
  API_KEY = require('./sources/keys.json').API_KEY;


// YOUR CODE GOES IN HERE

app.use(express.json());


// connect express to hbs
app.set('view engine', 'handlebars');
app.engine('handlebars', hbs({ defaultLayout: false }));
app.use(express.urlencoded({ extended: true }));

app.get('/', function (req, res) {
  res.render('index');
});

app.post('/weather', async (req, res) => {
  const cityName = req.body.cityName;
  try {
    const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`);
    const data = await response.data;
    //const data = await response.json();
    res.render('index', { weatherText: `The temparature in ${cityName} is: ${Math.floor(data.main.temp)}` });
  } catch (error) {
    console.error(error);
    res.render('index', { weatherText: `${error}` });
  }

});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server started on port ${port}`));