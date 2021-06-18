const bodyParser = require('body-parser')
const app = require('../server/index.js')

const authRoute = require('./routes/authFire.js')

app.use(bodyParser.json())

app.use('/api/auth', authRoute)

module.exports = app
