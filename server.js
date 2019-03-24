let express = require('express'),
  bodyParser = require('body-parser'),
  _ = require('underscore'),
  json = require('./movies.json'),
  app = express(),
  path = require('path'),
  ejs = require('ejs'),
  request = require('request')

app.set('port', process.env.PORT || 3500)
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.set('view engine', 'html')
app.engine('html', ejs.renderFile)
let router = new express.Router()
// to do 
router.get('/test', (req, res) => {
  let data = {
    name: 'Jason Krol',
    website: 'http://kroltech.com'
  }
  res.json(data)
})
router.get('/', (req, res) => {
  res.json(json)
})
router.post('/', (req, res) => {
  // console.log(req)
  console.log(req.body)
  if (req.body.Id && req.body.Title && req.body.Director && req.body.Year && req.body.Rating) {
    json.push(req.body)
    res.json(json)
  } else {
    // res.json(500, {error: 'There was an error!'})
    res.status(500).json({error: 'There was an error!'})
  }
})
router.put('/:id', (req, res) => {
  if (req.body.Id && req.body.Title && req.body.Director && req.body.Year && req.body.Rating) {
    // if (elem.Id)
    _.each(json, (elem, index) => {
      if (elem.Id === req.body.Id) {
        elem.Title = req.body.Title
        elem.Director = req.body.Director
        elem.Year = req.body.Year
        elem.Rating = req.body.Rating
      }
    })
    res.json(json)
  } else {
    res.status(500).json({error: 'there was an error!'})
  }
})
router.delete('/:Id', (req, res) => {
  var indexToDel = -1
  _.each(json, (elem, index) => {
    if (elem.Id == req.params.Id) {
      indexToDel = index
    }
  })
  console.log(~indexToDel)
  if (~indexToDel) {
    json.splice(indexToDel, 1)
  }
  res.json(json)
})
router.get('/test/post', (req, res) => {
  res.render(path.resolve('./test/post.html'))
})

router.get('/external-api', (req, res) => {
  request({
    method: 'GET',
    uri: 'http://localhost:' + (process.env.PORT || 3500)
  }, (err, response, body) => {

    if (err) { throw err }
    var movies = []
    _.each(JSON.parse(body), (elem, index) => {
      movies.push({
        Title: elem.Title,
        Rating: elem.Rating
      })
    })
    res.json(_.sortBy(movies, 'Rating').reverse())
  })
})
router.get('/imdb', (req, res) => {
  request({
    method: 'GET',
    uri: 'http://sg.media-imdb.com/suggests/a/aliens.json'
  }, (err, response, body) => {
    console.log('body', body)
    var data = body.substring(body.indexOf('(') + 1)
    data = JSON.parse(data.substring(0, data.length - 1))
    console.log('data', data)
    var related = []
    _.each(data.d, (movie, index) => {
      related.push({
        Title: movie.l,
        Year:movie.y,
        Post: movie.i ? movie.i[0] : ''
      })
    })
    res.json(related)
  })
})









app.use('', router)
let server = app.listen(app.get('port'), () => {
  console.log('Server up: http://localhost:' + app.get('port'))
})