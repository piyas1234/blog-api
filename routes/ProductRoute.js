
const {  getBlogView , postBlogView, getSingleBlogView, DeleteSingleBlogView,  } = require('../views/ProductView')
const router = require('express').Router()
 

router.get("/", getBlogView)
router.get("/:id", getSingleBlogView)
router.delete("/delete/:id", DeleteSingleBlogView)
router.post("/", postBlogView)



module.exports = router;


