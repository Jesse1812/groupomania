const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const db = require('../db_connection');
const dotenv = require('dotenv');

const getImageUrl = (req) =>
  req.protocol + '://' + req.get('host') + '/images/' + req.file.filename;

dotenv.config();

// Inscription
exports.signup = async (req, res) => {
  const { nom, prenom, email, password } = req.body;
  if (nom && prenom && email && password) {
    const uniqueEmail = `SELECT * FROM user WHERE email = '${email}'`;
    db.query(uniqueEmail, (error, result) => {
      if (error) {
        return res.status(401).json({ message: 'Une erreur est survenue' });
      } else if (result.length > 0) {
        return res.status(401).json({ message: 'Cet email est déjà utilisé' });
      } else {
        return checkEmailPassword(nom, prenom, password, email, res);
      }
    });
  } else {
    return res
      .status(401)
      .json({ loggedIn: false, message: 'Formulaire incomplet' });
  }
};

async function checkEmailPassword(nom, prenom, password, email, res) {
  const hashPassword = await bcrypt.hash(password, 10);
  const sql = `INSERT INTO user (nom, prenom, email, password) VALUES ('${nom}', 
  '${prenom}', '${email}', '${hashPassword}')`;
  try {
    db.query(sql, (error) => {
      if (error) {
        return res.status(401).json({ message: 'Une erreur est survenue' });
      }
      return res.status(201).json({ message: 'Enregistrement confirmé' });
    });
  } catch (err) {
    return res.status(500).json({ loggedIn: false, message: 'Erreur' });
  }
}

// Connexion
exports.login = (req, res) => {
  const { email, password } = req.body;
  const sql = `SELECT * FROM user WHERE email = '${email}'`;
  try {
    db.query(sql, (error, result) => {
      if (error) {
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
            admin: result[0].admin,
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
exports.deleteUser = (req, res) => {
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

// Ajouter photo de profil
exports.updateUser = (req, res) => {
  const picture = getImageUrl(req);
  const query = `UPDATE user SET photo = '${picture}' WHERE userId = ${req.body.userId}`;
  db.query(query, (error, result) => {
    if (error) {
      return res.status(400).json({
        error,
      });
    }
    return res.status(200).json({ message: 'Profil modifié' });
  });
};

// Get User par id
exports.getUserById = (req, res) => {
  const query = `SELECT * from user WHERE userId ='${req.params.id}'`;
  db.query(query, (error, result) => {
    if (error) {
      return res.status(400).json({
        error,
      });
    }
    return res.status(200).json(result);
  });
};
