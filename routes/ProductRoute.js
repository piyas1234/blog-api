// const productModel = require('../models/ProductModel')
const { postProductView, getProductView } = require('../views/ProductView')
const router = require('express').Router()
 

router.get("/", getProductView)
router.post("/", postProductView)



module.exports = router;


