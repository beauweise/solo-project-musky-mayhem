const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');

/**
 * GET route template
 */
router.get('/',rejectUnauthenticated, (req, res) => {
  const queryText = `SELECT * FROM "wind"`;

  pool.query(queryText).then((result) => {
    res.send(result.rows);
  }).catch((error) => {
    res.sendStatus(500);
  });

});

module.exports = router;
