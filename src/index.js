const express = require('express');
const app = express()
 
app.get('/', function (req, res) {
  res.send('Hello World')
})
 
app.listen(3000, () => {
    console.log("App is running on port 3000");
});

 
 const validator = require('validator');

 
 const message = "Node js is cool!";

console.log (message);

const validateEmail = email => {
    return validator.isEmail(email);
  };
  console.log(
    'Is mango@mail.com a valid email?: ',
    validateEmail('mango@mail.com'),
  );
  
  console.log(
    'Is Mangozedog.com a valid email?: ',
    validateEmail('Mangozedog.com'),
  );