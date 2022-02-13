const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const db = require('../db_connection');
const dotenv = require('dotenv');

dotenv.config();

// Inscription
exports.signup = async (req, res) => {
  const { nom, prenom, email, password, photo } = req.body;
  if (nom && prenom && email && password) {
    const hashPassword = await bcrypt.hash(password, 10);
    const sql = `INSERT INTO user (nom, prenom, email, password, photo) VALUES ('${nom}', 
  '${prenom}', '${email}', '${hashPassword}', '${photo}')`;
    try {
      db.query(sql, (error) => {
        if (error) {
          return res
            .status(401)
            .json({ message: 'Cet email est déjà utilisé' });
        }
        return res.status(201).json({ message: 'Enregistrement confirmé' });
      });
    } catch (err) {
      return res.status(500).json({ loggedIn: false, message: 'Erreur' });
    }
  } else {
    return res
      .status(401)
      .json({ loggedIn: false, message: 'Formulaire incomplet' });
  }
};

// Connexion
exports.login = (req, res, next) => {
  const { email, password } = req.body;
  const sql = `SELECT * FROM user WHERE email = '${email}'`;
  try {
    db.query(sql, (error, result) => {
      if (error) {
        console.log(error);
        return res.status(500).json({ loggedIn: false, message: 'Erreur' });
      }
      if (result?.length > 0) {
        bcrypt.compare(password, result[0].password).then((valid) => {
          if (!valid) {
            return res.status(401).json({ error: 'Mot de passe incorrect !' });
          }
          return res.status(200).json({
            userId: result[0].userId,
            firstName: result[0].nom,
            lastName: result[0].prenom,
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
        return res
          .status(401)
          .json({ loggedIn: false, message: 'Utilisateur inconnu' });
      }
    });
  } catch (err) {
    return res.status(500).json({ loggedIn: false, message: 'Error' });
  }
};

// Delete user
exports.deleteUser = (req, res, next) => {
  db.query(
    `DELETE FROM user WHERE userId = ${req.params.id}`,
    (error, result) => {
      if (error) {
        return res.status(400).json({
          error,
        });
      }
      return res.status(200).json({ message: 'Compte supprimé' });
    }
  );
};
