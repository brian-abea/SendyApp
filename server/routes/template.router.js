const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
  const queryText = 'SELECT * FROM "user_info";';
  pool.query(queryText)
    .then(result => res.send(result.rows))
    .catch(err => {
      console.log('Error retrieving data', err);
      res.sendStatus(500);
    });
});

/**
 * POST route template
 */
router.post('/', (req, res) => {
  const dataToInsert = req.body;
  const queryText = `INSERT INTO "user_info" ("username", "firstname", "lastname", "email", "password", "confirmpassword")
  VALUES ($1, $2, $3, $4, $5, $6) RETURNING "id"
    `;
  pool.query(queryText, [dataToInsert.column1, dataToInsert.column2])
    .then(() => res.sendStatus(201))
    .catch(err => {
      console.log('Error inserting data', err);
      res.sendStatus(500);
    });
});

module.exports = router;
