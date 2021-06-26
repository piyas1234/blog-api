const { ObjectId } = require("mongodb")
const blogModel = require("../models/blogModel")
 


exports.getBlogView = async (req,res)=>{
    const products = await blogModel.find({})
    res.send(products)
     
}


exports.getSingleBlogView = async (req,res)=>{
    const id = req.params.id
    const product = await blogModel.find({_id:ObjectId(id)})
    res.send(product)
}

exports.DeleteSingleBlogView = async (req, res)=>{
    const id = req.params.id
    const product = await blogModel.deleteOne({_id:ObjectId(id)})
    res.send(product)
}

exports.postBlogView = async (req, res) => {
    const newProduct = new blogModel(req.body);
    await newProduct.save((err)=>{
        if(err){
            res.status(500).json({
                error:"There was a server side error"
            })
            
        }else{
            res.status(200).json({
                message:"Todo was inserted successfully!"
            })
        }
    })
}