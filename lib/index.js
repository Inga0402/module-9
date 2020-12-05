"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var express = require('express');

var app = express();
app.get('/', function (req, res) {
  res.send('Hello World');
});
app.listen(3000, function () {
  console.log("App is running on port 3000");
});

var validator = require('validator');

var message = "Node js is cool!";
console.log(message);

var validateEmail = function validateEmail(email) {
  return validator.isEmail(email);
};

console.log('Is mango@mail.com a valid email?: ', validateEmail('mango@mail.com'));
console.log('Is Mangozedog.com a valid email?: ', validateEmail('Mangozedog.com'));

var User = /*#__PURE__*/function () {
  function User() {
    _classCallCheck(this, User);
  }

  _createClass(User, [{
    key: "consrtuctor",
    value: function consrtuctor(name) {
      this._name = name;
    }
  }, {
    key: "name",
    get: function get() {
      return this._name;
    }
  }]);

  return User;
}();

var mango = new User("Mango");
console.log(mango.name);