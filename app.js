const express = require('express');
const app = express();
const bodyParser = require('body-parser')

app.use(bodyParser.json())

const User = require('./models/user');

//routers
app.get('/users',function(req,res){

    User.findAll()
        .then(users => {
            return res.send(users)
        })
})

//get user
app.get('/user/:id',function(req,res){

    User.findByPk(req.params.id)
        .then(user => {
            return res.send(user)
        })
})

//get all users
app.post('/users',function(req,res){
    console.log(req.header('Content-Type'))
    console.log('req',req.body)
    User.create({name : req.body.name,
                 email :req.body.email,
                 password : req.body.password })
        .then(response => {
            return res.send(response);
        }) 
})

//edit user
app.post('/user/:id/edit',function(req,res){
    User.findByPk(req.params.id)
        .then(user => {
            if(!user){
                return res.send('USER NOT FOUND')
            }
            user.name = req.body.name
            user.email = req.body.email
            user.password = req.body.password
            user.save();
            return res.send(user);
        })
})

//delete user
app.post('/user/:id/delete',function(req,res){
    User.destroy({where : {id : req.params.id}})
    return res.send('user deleted')
})


//start server
app.listen(4000,() => {
    console.log("listen to port 4000")
})