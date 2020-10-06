
const express = require('express')
const fs = require("fs");
const app = express();

app.use(express.json());


// YOUR CODE GOES IN HERE

//homepage
app.get('/', function (req, res) {
  res.send('Hello My First Blog!')
})

app.get('/blogs/:title', (req, res) => getBlog(req, res));
app.post('/blogs', (req, res) => postBlog(req, res));
app.put('/posts/:title', (req, res) => updateBlog(req, res));
app.delete('/posts/:title', (req, res) => deleteBlog(req, res));

//read
const getBlog = (req, res) => {
  const title = req.params.title;
  if (fs.existsSync(title)) {
    const response = fs.readFileSync(title, 'utf8')
    res.send(response)
  }
  else {
    res.send(`${title} does not exist!`)
  }

}


//post a new new blog
const postBlog = (req, res) => {
  const title = req.body.title;
  const content = req.body.content;
  fs.writeFileSync(title, content);
  res.send(`${title} created.`);
}

//update
const updateBlog = (req, res) => {
  const title = req.body.title;
  if (fs.existsSync(req.params.title)) {
    fs.writeFileSync(title, req.body.content)
    res.send(`${title} is updated!`)
  }
  else {
    res.send(`${title} does not exist!`)
  }
}

//delete
const deleteBlog = (req, res) => {
  const title = req.params.title;
  if (fs.existsSync(title)) {
    fs.unlinkSync(title)
    res.send(`${title} is deleted.`)
  }
  else {
    res.send(`${title} does not exist!`)
  }
}





const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server started on port ${port}`));