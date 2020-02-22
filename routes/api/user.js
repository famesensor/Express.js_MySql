const express = require('express');
const router = express.Router();

const customer = require('../../models/db.connec');

router.get('/', (req, res) => {
    customer.query('select * from customer', (err, result) => {
        if (err) throw err;
        else return res.status(200).json(result)
    })
});

module.exports = router;