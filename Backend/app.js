const express = require('express');
const app=express();
const bodyparser=require('body-parser');
const mongoose=require('mongoose');
var cors=require('cors');
var mydb ='mongodb+srv://navyastudio:navya143@cluster0.ijjl9.mongodb.net/navyastudioDb?retryWrites=true&w=majority';

var port = 3000 || ENV['PORT'];

var route=require('./controllers/routes')
mongoose.connect(mydb, { useNewUrlParser: true, useUnifiedTopology: true});
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));

app.use(cors());


app.use('/api',route); 


//port 3000 
app.listen(port,function(req,res){
    console.log('listening on : ' + port);
});