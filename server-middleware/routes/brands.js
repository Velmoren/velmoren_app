const {Router} = require('express')
const router = Router()
const axios = require('axios')
const {api, username, password} = require('../config.js')
const {db} = require('../firebase.js')

router.get('/', async (req, res) => {
  // const response = await axios(`${api}/brandsInfoNew.json`)
  // const data = response.data
  // res.json(data)
  await db.ref("brandsInfoNew").once('value').then(snapshot => {
    res.json(snapshot.val())
  })


})

module.exports = router
