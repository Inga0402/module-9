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