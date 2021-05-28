const {Router} = require('express')
const router = Router()
const axios = require('axios')
const {api, username, password} = require('../config.js')
const {db} = require('../firebase.js')

router.get('/', async (req, res) => {
  const id = req.query.category
  const brands = await axios(`${api}/brandsInfoNew.json`)

  const testCategory = await axios(`${api}/${id}.json`)
  const sizes = testCategory.data.table.fields.filter(field => field.class === 'size').sort((a,b) => a.key.split('-')[0] - b.key.split('-')[0])
  const items = testCategory.data.table.items.map(item => {
    item.rows.forEach(row => {
      row.sizes.sort((a,b) => a.key - b.key)
    })
    return item
  })

  const transCategory = {
    id: testCategory.data.id,
    name: testCategory.data.name,
    table: {
      fields: sizes,
      items: items
    }
  }

  const data = {brands: brands.data, category: transCategory}

  res.json(data)
})

module.exports = router
