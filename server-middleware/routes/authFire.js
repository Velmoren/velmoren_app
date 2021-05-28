const {Router} = require('express')
const router = Router()
const axios = require('axios')
const {api, username, password} = require('../config.js')

router.get('/', async (req, res) => {
  const response = await axios(`${api}/users.json`)
  console.log(response)
  const data = response.data
  return res.json(data)
})

module.exports = router
