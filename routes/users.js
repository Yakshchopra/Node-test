const express=require('express');
const router = express.Router();
const mongoose=require('mongoose');
//login page
router.get('/login',(req,res)=>res.render('Login'));

//register page
router.get('/register',(req,res)=>res.render('register'));

//Register handle
router.post('/register', (req,res)=> {
    const { name,email,password,password2}= req.body;
    let errors = [];
    if(!name || !email || !password || !password2){
        errors.push({msg: 'Please fill in all the fields'});
    }

    if(password !== password2){
        errors.push({msg:'The passwords must match'});
    }
    if(password.length<6){
        errors.push({msg: 'The password must be at least 6 charachters long'});
    }
    if(errors.length>0){
res.render('register',{
    errors,
    name,
    email,
    password,
    password2

})

    }
    else{
       User.findOne({ email: email})
       .then(user=>{
           if(user){
               //user exists
               errors.push({msg: 'Email already taken'});
               res.render('register',{
                errors,
                name,
                email,
                password,
                password2
               });
           }else {
               const newUser = new User({
                   name,
                   email,
                   password
               });

               console.log(newUser)
               res.send('hello');
           }
       });
    }
});
module.exports = router;