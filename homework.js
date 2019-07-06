const express=require('express');
const app=express();
const bodyParser=require('body-parser');
const fs=require('fs');
app.use(bodyParser.json());
app.post('/write', function(request,response){
    const message=request.body.message;
    console.log(message);
    fs.writeFile('hw.html',message,function(error){
        if(error)
        {
            console.log(error);
            response.end;
        }
        else{
            response.send('message successfully recorded');
        }
    });
});
 app.get('/get',function(request,response){
    fs.readFile("hw.html","utf-8", function(err,data){ 
       console.log(data);
       res.send(data);
   });
});
app.listen(8000);