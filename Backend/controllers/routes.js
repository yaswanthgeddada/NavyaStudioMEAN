var express = require('express');
var router = express.Router();
var users = require('../models/user');
var photos = require('../models/photo');
var videos = require('../models/video');



router.get('/users', (req, res) => {
    users.find({}).exec((err, result) => {
        if (err) throw err
        else {
            res.json(result);
        }
    })
})


router.post('/users', (req, res) => {
    users.create(req.body, function (err, result) {
        if (err) throw err
        else res.send(result);
    })
})



router.get('/photos', (req, res) => {
    photos.find({}).exec((err, result) => {
        if (err) throw err
        else {
            res.json(result);
        }
    })
})

router.post('/insertPhoto', (req, res) => {
    photos.create(req.body, function (err, result) {
        if (err) throw err
        else res.send(result);
    })
})

router.delete('/deletePhoto', (req, res) => {
    photos.deleteOne({ _id: req.query._id }, (err, result) => {
        if (err) throw err
        else res.send(result);
    })
})


router.get('/videos', (req, res) => {
    videos.find({}).exec((err, result) => {
        if(err) throw err
        else res.send(result);
    })
})

router.post('/video', (req, res) => {
    videos.create(req.body, function (err, result) {
        if (err) throw err
        else res.send(result);
    })
})

router.delete('/deleteVideo',(req, res) => {
    videos.deleteOne({_id:req.query._id},(err,result) => {
        if (err) throw err
        else res.send(result);
    })
})

module.exports = router;
