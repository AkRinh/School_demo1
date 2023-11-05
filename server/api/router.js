const express = require('express')
// const { postStudent } = require('../controller/controller')
const router = express.Router()


router.post('/upload', postStudent)

router.get('/', (req,res)=> {
    res.json('support')
})

router.get('/class/:id', (req, res) => {
    var id = req.params.id
    res.json('hello ' + id)
})

module.exports = router;