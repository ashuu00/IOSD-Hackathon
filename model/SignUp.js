const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const UserSchema=new Schema({
    username:{ type:String,
    required:true},
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
});

module.exports=mongoose.model("User",UserSchema);

//Password: ZFSVP23Lpa9j77JG