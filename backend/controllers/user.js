const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const db = require('../db_connection');
const dotenv = require('dotenv');

dotenv.config();

exports.signup = async (req, res, next) => {
  const { nom, prenom, email, password, photo } = req.body;
  const hashPassword = await bcrypt.hash(password, 10);
  const sql = `INSERT INTO user (nom, prenom, email, password, photo) VALUES ('${nom}', 
  '${prenom}', '${email}', '${hashPassword}', '${photo}')`;
  db.query(sql, (error) => {
    if (error) {
      console.log(error);
    }
    res.send({ status: 201, message: 'Successful request !' });
  });
};

exports.login = (req, res, next) => {
  const { email, password } = req.body;
  const sql = `SELECT * FROM user WHERE email = '${email}'`;
  db.query(sql, (error, result) => {
    if (error) {
      console.log(error);
    }
    if (result.length > 0) {
      bcrypt.compare(password, result[0].password).then((valid) => {
        if (!valid) {
          res.status(401).json({ error: 'Mot de passe incorrect !' });
        }
        res.status(200).json({
          userId: result[0].userId,
          token: jwt.sign(
            { userId: result[0].userId },
            process.env.JWTPRIVATEKEY,
            {
              expiresIn: '24h',
            }
          ),
        });
      });
    } else {
      res.json({ loggedIn: false, message: 'Utilisateur inconnu' });
    }
  });
};
