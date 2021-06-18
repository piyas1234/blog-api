
const productModel = require('../models/ProductModel')


exports.getProductView = async (req,res)=>{
    const products = await productModel.find({})
    res.send(products)
     
}


exports.postProductView = async (req, res) => {
    const newProduct = new productModel(req.body);
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