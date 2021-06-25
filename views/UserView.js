const UserModel = require("../models/AuthModel");
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const config = require('./config')
const saltRounds = 10;
exports.getUserView = (req, res) => {
  UserModel.findOne({ email: req.body.email }, function (err, user) {
    if (err) return res.status(500).send("Error on the server.");
    if (!user) return res.status(404).send("No user found.");

    var passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
    if (!passwordIsValid)
      return res.status(401).send({ auth: false, token: null });

    var token = jwt.sign({ id: user._id }, config.secret, {
      expiresIn: 86400, // expires in 24 hours
    });

    res.status(200).send({ auth: true, token: token, admin:user.admin });
  });
};

exports.postUserView =   (req, res) => {
    bcrypt.hash(req.body.password, saltRounds, function (err, hash) {
    const newProduct = new UserModel({
      name: req.body.name,
      email: req.body.email,
      password: hash,
      admin:'false'
    });
    newProduct.save((err) => {
      if (err) {
        res.status(500).json({
          error: "There was a server side error",
        });
      } else {
        res.status(200).json({
          message: "User was Create successfully!",
        });
      }
    });
  });
};
