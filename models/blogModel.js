const  mongoose =   require('mongoose')
const { Schema } = mongoose;

const blogSchema = new Schema({
   title:{
       type:String,
       min:10,
       max:300,
       require:true
   },
   image:String,
  
   description:{
       type:String,
       min:20,
       max:1000,
       require:true
   }
});
const blogModel = new mongoose.model('blog', blogSchema);
 
module.exports =  blogModel;