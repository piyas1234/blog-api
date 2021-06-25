const  mongoose =   require('mongoose')
const { Schema } = mongoose;

const UserSchema = new Schema({
    name:{
        type:String,
        required :true,
        max:20,
    },
    email:{
        type:String,
        required :true,
        max:50
    },
    password:{
        type:String,
        required :true,
        max:50
    },
    admin:{
        type:String,
        required :true,
        
    }
});


const UserModel = new mongoose.model('blogUser', UserSchema);
 
module.exports = UserModel;