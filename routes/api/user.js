const express = require('express');
const router = express.Router();

const customer = require('../../models/db.connec');

router.get('/', (req, res) => {
    customer.query('select * from users', (err, result) => {
        if (err) throw err;
        // else return res.status(200).json(result)
        res.status(201).send(result);
    })
});

router.get('/handle/:id', (req, res) => {
    customer.query('select * from users where id = ?', req.params.id, (err, result) => {
        if (err) throw err;
        res.status(200).json(result);
    });
});

router.delete('/delete/:id', (req, res) => {
    
})

module.exports = router;