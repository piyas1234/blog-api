const { getUserView, postUserView } = require('../views/UserView');

const userRouter = require('express').Router()
 

userRouter.post("/login", getUserView )
userRouter.post("/signup", postUserView )



module.exports = userRouter;


