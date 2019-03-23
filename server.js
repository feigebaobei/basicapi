let express = require('express'),
  bodyParser = require('body-parser'),
  _ = require('underscore'),
  json = require('./movies.json'),
  app = express()

app.set('port', process.env.PORT || 3500)
app.use(bodyParser.json())
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
app.use('', router)
let server = app.listen(app.get('port'), () => {
  console.log('Server up: http://localhost:' + app.get('port'))
})