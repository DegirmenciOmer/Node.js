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


app.get('/', function (req, res) {
  res.render('index');
});

app.post('/weather', async (req, res) => {
  try {
    let cityName;
    const response = await axios.get(`api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`);
    const data = await response.json()
    console.log(data);
    console.log(response);
    res.render('index');
  } catch (error) {
    console.error(error);
    res.render('index', { weatherText: "City is not found!" });
  }

});




const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server started on port ${port}`));