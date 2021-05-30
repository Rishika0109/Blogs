const express=require('express');
const app=express();
app.set('view engine','ejs');
app.listen(3000);
app.get('/',(req,res)=>{
res.render('index');
});
app.get('/home',(req,res)=>{
    res.render('home');
    });
    app.get('/newblog',(req,res)=>{
        res.render('newblog');
        });
        app.use((req,res)=>{
            res.render('404');
            });
       

