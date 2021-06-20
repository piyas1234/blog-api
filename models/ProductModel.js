const  mongoose =   require('mongoose')
const { Schema } = mongoose;

const ProductSchema = new Schema({
   title:{
       type:String,
       min:10,
       max:30,
       require:true
   },
   image:String,
   price:{
      type:String,
      require:true
   },
   description:{
       type:String,
       min:20,
       max:100,
       require:true
   }
});
const productModel = new mongoose.model('product', ProductSchema);
 
module.exports =  productModel;