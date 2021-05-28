const bodyParser = require('body-parser')
const app = require('../server/index.js')

const authRoute = require('./routes/authFire.js')
const brandsRoute = require('./routes/brands.js')
const categoryRoute = require('./routes/category.js')

app.use(bodyParser.json())

app.use('/api/auth', authRoute)
app.use('/api/brands', brandsRoute)
app.use('/api/category', categoryRoute)

module.exports = app
