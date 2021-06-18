const {Router} = require('express')
const router = Router()
const axios = require('axios')
const {api, username, password} = require('../config.js')
const {db} = require('../firebase.js')

router.get('/', async (req, res) => {
  const email = req.query.email
  const password = req.query.password
  const users = await db.ref(`users`).once('value').then(snapshot => snapshot.val())

 if (users.find(user => user.email === email && user.password === password)) {
   return res.json(users.find(user => user.email === email && user.password === password))
 } else if (users.find(user => user.email === email)) {
   return res.status(401).send({message: 'Неверный пароль'});
 } else {
   return res.status(401).send({message: 'Неверный email или пароль'})
 }
})

module.exports = router
