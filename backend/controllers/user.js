const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const db = require('../db_connection');
const dotenv = require('dotenv');

dotenv.config();

exports.signup = (req, res, next) => {
  const user = req.body;
  console.log(user);
  const sql = 'INSERT into user (nom, prenom, email, password) values = ?';
  db.query(sql, [user], (error) => {
    if (error) {
      console.log(error);
    }
    res.send({ status: 201, message: 'Successful request !' });
  });
};

exports.login = (req, res, next) => {
  User.findOne({ email: req.body.email })
    .then((user) => {
      if (!user) {
        return res.status(401).json({ error: 'Utilisateur non trouvé !' });
      }
      bcrypt
        .compare(req.body.password, user.password)
        .then((valid) => {
          if (!valid) {
            return res.status(401).json({ error: 'Mot de passe incorrect !' });
          }
          res.status(200).json({
            userId: user._id,
            token: jwt.sign({ userId: user._id }, process.env.JWTPRIVATEKEY, {
              expiresIn: '24h',
            }),
          });
        })
        .catch((error) => res.status(500).json({ error }));
    })
    .catch((error) => res.status(500).json({ error }));
};
