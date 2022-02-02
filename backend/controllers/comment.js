const db = require('../db_connection');

// Création d'un commentaire
exports.addNewComment = (req, res, next) => {
  console.log('hey', req.body);
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
