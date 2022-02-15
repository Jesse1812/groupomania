const db = require('../db_connection');

//Affichage des posts
exports.getAllPosts = (req, res, next) => {
  const sql =
    'SELECT post.*, user.* FROM post INNER JOIN user WHERE user.userId = post.userId ORDER BY date DESC';
  db.query(sql, (error, result) => {
    if (error) {
    }
    res.send({ status: 200, message: 'Successful request !', result });
  });
};

// Création d'un post
exports.createPost = (req, res, next) => {
  db.query(
    `INSERT INTO post (message, picture, video, userId, date) VALUES ('${req.body.message}', 
    '${req.body.picture}', '${req.body.video}', '${req.body.userId}', NOW())`,
    (error, result) => {
      if (error) {
        return res.status(400).json({
          error,
        });
      }
      return res.status(201).json({
        message: 'Votre post à été publié !',
      });
    }
  );
};

// Affichage d'un post
exports.getOnePost = (req, res, next) => {
  db.query(
    `SELECT * FROM post WHERE postId = '${req.params.id}'`,
    (error, result) => {
      if (error) {
        return res.status(400).json({
          error,
        });
      }
      return res.status(200).json(result);
    }
  );
};

// Modification d'un post
exports.updateOnePost = (req, res, next) => {
  db.query(
    `UPDATE post SET message = '${req.body.message}' WHERE postId = '${req.params.id}'`,
    (error, result) => {
      if (error) {
        return res.status(400).json({
          error,
        });
      }
      return res.status(200).json(result);
    }
  );
};

// Suppression d'un post
exports.deleteOnePost = (req, res) => {
  db.query(
    `DELETE FROM post WHERE postId = '${req.params.id}' AND userId = '${req.headers.userid}'`,
    (error, result) => {
      if (error) {
        res.status(400).json({
          error,
        });
      } else if (result.affectedRows) return res.status(200).json(result);
      res.status(401).json({ message: "Vous n'êtes pas autorisé" });
    }
  );
};
