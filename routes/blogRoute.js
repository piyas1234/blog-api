
const {  getBlogView , postBlogView, getSingleBlogView, DeleteSingleBlogView,  } = require('../views/blogView')
const blogRoute = require('express').Router()
 

blogRoute.get("/", getBlogView)
// blogRoute.get("/:id", getSingleBlogView)
// blogRoute.delete("/delete/:id", DeleteSingleBlogView)
// blogRoute.post("/", postBlogView)



module.exports = blogRoute;


