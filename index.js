const express=require('express');
const mongoose=require('mongoose');
const bodyParser=require('body-parser');
//const MongoKey=require('./util/keys');

const app=express();
// support parsing of application/json type post data
app.use(bodyParser.json());
let loginRoute=require('./controllers/login');
//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect('mongodb+srv://IosdApp@cluster0.m3zbq.mongodb.net/AfCoronaApp?retryWrites=true&w=majority',
{ useNewUrlParser: true, useUnifiedTopology: true },
()=>console.log("Connected to DB"));

app.use('/',loginRoute);

app.listen(3000, () => {
    console.log('App listening on port 3000!');
});
