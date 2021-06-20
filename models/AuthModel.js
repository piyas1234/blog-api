const  mongoose =   require('mongoose')
const { Schema } = mongoose;

const UserSchema = new Schema({
    name:{
        type:String,
        require:true,
        max:20,
    },
    email:{
        type:String,
        require:true,
        max:50
    },
    password:{
        type:String,
        require:true,
        max:50
    }
});


const UserModel = new mongoose.model('user', UserSchema);
 
module.exports = UserModel;