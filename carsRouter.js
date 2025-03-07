const express = require('express');
const knex = require('knex');
const knexConfig = require('./knexfile');

const db=knex(knexConfig.development);

const router = express.Router();

router.get('/', (req, res)=>{
    db('cars')
    .then(cars =>{
        res.json(cars);
    })
    .catch (err=>{
        res.status(500).json({message: 'Failed to retrieve data.'})
    })
})
router.post('/', (req, res) => {
    const carData = req.body;
    db('cars').insert(carData)
    .then(ids => {
      db('cars').where({ id: ids[0] })
      .then(newCarEntry => {
        res.status(201).json(newCarEntry);
      });
    })
    .catch (err => {
      console.log('POST error', err);
      res.status(500).json({ message: "Failed to store data" });
    });
  });

module.exports = router;