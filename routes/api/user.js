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

router.post('/adduser', (req, res) => {
    if (!req.body.name) {
        return res.status(400).json({ name: "Name field is required"});
    }
    
    if (!req.body.email) {
        return res.status(400).json({ email: "Email field is required"});
    }

    customer.query('insert into users (name, email) value (?, ?)', [req.body.name, req.body.email], (err, result) => {
        if (err) throw err;
        res.status(200).json(result);
    });
});

router.delete('/delete/:id', (req, res) => {
    customer.query('delete from users where id = ?', req.params.id, (err, result) => {
        if (err) throw err;
        res.status(200).json({ sucees: true});
    });
})

module.exports = router;