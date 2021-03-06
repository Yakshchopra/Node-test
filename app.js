const express= require('express');
const expressLayouts= require('express-ejs-layouts');
const mongoose=require('mongoose');

const app= express();

//DB config
const db=require('./routes/config/keys').MongoURI;

//connect to mongo
mongoose.connect(db, { useNewUrlParser: true})
.then(()=> console.log('MongoDB connected'))
.catch(err=>console.log(err));

//layout page
app.use(expressLayouts);
app.set('view engine','ejs');

//BpdyParser
app.use(express.urlencoded({ extended: false}));

//Routes
app.use('/',require('./routes/index'));
app.use('/users',require('./routes/users'));
const PORT= process.env.port||5050;
app.listen(PORT,console.log(`Server stated on port ${PORT}`));