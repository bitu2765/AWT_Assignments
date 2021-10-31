const express = require('express');
const app = express()
const port = 3000;

app.set('view engine', 'ejs');

app.use(express.urlencoded({extended:false}));

app.get('/', (req, res) => {
    res.render('index');
})

app.post('/', (req, res) => {
    console.log(req.body);
    res.redirect('table');
})

app.post('/table', (req, res) => {
    res.render('table', {
        firstname: req.body.fname,
        lastname: req.body.lname,
        elecmail: req.body.email,
        num: req.body.number,
        birthday: req.body.bd,
        gend: req.body.gender,
        add: req.body.address,
        ins: req.body.institute,
        depart: req.body.dept
    })
})

app.listen(port, () => {
  console.log(`Server started on ${port}`);
})
