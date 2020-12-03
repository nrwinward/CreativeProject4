const express = require('express');
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/ships', {
    useNewUrlParser: true
});

const multer = require('multer')
const upload = multer({
    dest: '../front-end/public/images/',
    limits: {
        fileSize: 1000000000
    }
});

const shipSchema = new mongoose.Schema({
    title: String,
    description: String,
    comments: [{
        comment: String,
        user: String,
    }],
    path: String,
    addComment: Boolean  //get this working for a add comment button, then text box appears, iterate through comments object
});

const Ship = mongoose.model('Ship', shipSchema);

app.post('/api/ships', async (req, res) => {
    const ship = new Ship({
        title: req.body.title,
        description: req.body.description,
        path: req.body.path,
        addComment: false
    });
    try {
        await ship.save();
        res.send(ship);
    } catch (error) {
        //console.log(error);
        res.sendStatus(500);
    }
});

app.post('/api/photos', upload.single('photo'), async (req, res) => {
    // Just a safety check
    if (!req.file) {
        return res.sendStatus(400);
    }
    res.send({
        path: "/images/" + req.file.filename
    });
});

app.get('/api/ships', async (req, res) => {
    try {
        let ships = await Ship.find();
        res.send(ships);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});

app.delete('/api/ships/:id', async (req, res) => {
    try {
        await Ship.deleteOne({
            _id: req.params.id
        });
        res.sendStatus(200);
    } catch (error) {
        //console.log(error);
        res.sendStatus(500);
    }
});

app.put('/api/ships/:id', async (req, res) => {
    try {
        let ship = await Ship.findOne({
            _id: req.params.id
        });
        ship.title = req.body.title;
        ship.description = req.body.description;
        ship.save();
        //console.log(item);
        res.sendStatus(200);
    } catch (error) {
        //console.log(error);
        res.sendStatus(500);
    }
});

app.put('/api/comments/:id', async (req, res) => {
    try {
        let ship = await Ship.findOne({
            _id: req.params.id
        });
        ship.comments.push({comment:req.body.comment, user:req.body.user});
        ship.save();
        //console.log(item);
        res.sendStatus(200);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});

app.listen(3001, () => console.log('Server listening on port 3001!'));
