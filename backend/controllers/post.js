const db = require('../db_connection');

//Affichage des posts
exports.getAllPosts = (req, res) => {
  const sql = 'SELECT * FROM post';
  db.query(sql, (error, result) => {
    if (error) {
      console.log(error);
    }
    res.send({ status: 200, message: 'Successful request !', result });
  });
};

// Affichage d'un post
exports.getOnePost = (req, res, next) => {
  db.query(
    `SELECT * FROM posts WHERE posts.id = ${req.params.id}`,
    (error, result, field) => {
      if (error) {
        return res.status(400).json({
          error,
        });
      }
      return res.status(200).json(result);
    }
  );
};

// Création d'un post
exports.createPost = (req, res, next) => {
  db.query(
    `INSERT INTO posts VALUES (NULL, '${req.body.userId}', '${req.body.message}',
     NOW(), '${req.body.picture}', '${req.body.video}')`,
    (error, result, field) => {
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

// Modification d'un post
exports.updateOnePost = (req, res, next) => {
  db.query(
    `UPDATE posts SET message = '${req.body.message}', content = '${req.body.message}' WHERE posts.id = ${req.params.id}`,
    (error, result, field) => {
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
exports.deleteOnePost = (req, res, next) => {
  db.query(
    `DELETE FROM posts WHERE posts.id = ${req.params.id}`,
    (error, result, field) => {
      if (error) {
        return res.status(400).json({
          error,
        });
      }
      return res.status(200).json(result);
    }
  );
};

// Voir tous les commentaires par date
exports.getAllComments = (req, res, next) => {
  db.query(
    `SELECT users.id, users.nom, users.prenom, comments.id,comments.message,
     comments.userId, comments.date FROM users INNER JOIN 
     comments ON users.id = comments.userId WHERE comments.postId = ${req.params.id} 
     ORDER BY comments.date DESC`,
    (error, result, field) => {
      if (error) {
        return res.status(400).json({
          error,
        });
      }
      return res.status(200).json(result);
    }
  );
};

// Nouveau commentaire
exports.getNewComment = (req, res, next) => {
  db.query(
    `INSERT INTO comments VALUES (NULL, ${req.body.userId}, 
        ${req.params.id}, NOW(), '${req.body.content}')`,
    (error, result, field) => {
      if (error) {
        return res.status(400).json({
          error,
        });
      }
      return res.status(200).json(result);
    }
  );
};

//Supprimer un commentaire
exports.deleteComment = (req, res, next) => {
  db.query(
    `DELETE FROM comments WHERE comments.id = ${req.params.id}`,
    (error, result, field) => {
      if (error) {
        return res.status(400).json({
          error,
        });
      }
      return res.status(200).json(result);
    }
  );
};

// Likes
