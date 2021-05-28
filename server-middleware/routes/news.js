const {Router} = require('express')
const router = Router()
const axios = require('axios')
const {api, username, password} = require('../config.js')

router.get('/', async (req, res) => {


  const response = await axios(`${api}/GetMarketAction/20201016111515`, {
    auth: {username: username, password: password}
  })
  const data = response.data
  return res.json(data)
})

module.exports = router
