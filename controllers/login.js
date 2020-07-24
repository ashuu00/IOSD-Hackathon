const express=require('express');
const router=express.Router();
const User=require('../model/SignUp');
router.get('/login', (req, res) => {
    res.json({status:'200'});
});
    /*for signing-up for new users :
    1) if user found then json=>{error:'UserPresent}
    2)otherwise it gives json=>{details:{username,email...}}

    */
router.post('/signup', async (req, res) => {
    const {username,email,password,collegeName,yearJoined}=req.body;
   let isUser=await User.findOne({email:email});
   if(isUser){
       res.json({error:'UserPresent'});
   }
   else{
    let user=new User({username,email,password,collegeName,yearJoined});
    try{
     await user.save();}
    catch(e){console.log(e);
    res.json({status:'401',err:e})}
    //res.send("Welcome Site Working");
    res.json({status:'203',details:req.body});}
});

//For users who already have account
//if logged in successfully then json=>{authenticate:'success'}
//else json=>{authenticate:'failure'}
router.post('/login',(req,res)=>{
    const {username,password}=req.body;
    User.findOne({email:email}).then(user=>{
        if(user){
            if(user.password==password){
                res.json({authenticate:'success'});
            }
        }res.json({authenticate:'failure'});
    })
})
module.exports=router;