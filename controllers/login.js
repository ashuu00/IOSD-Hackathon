const express=require('express');
const router=express.Router();
const User=require('../model/SignUp');
router.get('/login', (req, res) => {
    res.json({status:'200'});
});

router.post('/login', async (req, res) => {
    const {username,email,password}=req.body;
    let user=new User({username:username,email:email,password:password});
    try{
    await user.save();} 
    catch(e){console.log(e);
    res.json({status:'401',err:e})}
    //res.send("Welcome Site Working");
    res.json({status:'203',details:req.body});
});

module.exports=router;