const db = require('../db_connection');

// Créer un commentaire
exports.addNewComment = (req, res, next) => {
  const { content, userId, postId } = req.body;
  db.query(
    `INSERT INTO comment (content, userId, postId) VALUES ('${content}', 
      '${userId}', '${postId}')`,
    (error, result) => {
      if (error) {
        res.status(400).json({
          error,
        });
      }
      res.status(200).json(result);
    }
  );
};

exports.getAllComments = (req, res) => {
  const sql = `SELECT user.nom, user.prenom, comment.content, comment.date FROM user,
   comment INNER JOIN post ON post.postId = comment.postId WHERE 
   user.userId = post.userId AND post.postId = '${req.headers.postid}' ORDER BY comment.date DESC`;
  db.query(sql, (err, result) => {
    if (err) {
      res.status(404).json({ err });
      throw err;
    }
    res.status(200).json(result);
  });
};

//Supprimer un commentaire
exports.deleteComment = (req, res, next) => {
  const sql = `DELETE FROM comment WHERE commentId = '${req.params.id}' AND userId = '${req.headers.userid}'`;
  db.query(sql, (error, result) => {
    if (error) {
      return res.status(400).json({
        error,
      });
    } else if (result.affectedRows) return res.status(200).json(result);
    res.status(401).json({ message: "Vous n'êtes pas autorisé" });
  });
};
