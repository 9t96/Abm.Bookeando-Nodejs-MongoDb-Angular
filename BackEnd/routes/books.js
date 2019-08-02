var express = require('express');
var router = express.Router();
const BooksModel = require('../src/models/book');
require('dotenv').config();
const jwtMW = require('../middleware/authorizationMW');


/* GET users listing. */
router.post('/newbook',jwtMW, function(req, res, next) {
  let book = new BooksModel({
    title: req.body.title,
    author: req.body.author
  })
  book.save()
   .then(doc => {
     console.log(doc);
     res.status(200).send(doc);
   })
   .catch(err => {
    res.status(404).send({message:err});
   })
   
  
});

router.get('/getall',jwtMW, function(req, res, next) {
    BooksModel.find()
     .then(records => {
       res.status(200).send(records);
     })
     .catch(err => {
       res.status(404).send({message: err});
     }) 
});

router.get('/getone/:title',jwtMW, function(req, res, next) {
  BooksModel.find({title: req.params.title})
     .then(records => {
       res.status(200).send(records);
     })
     .catch(err => {
      res.sendStatus(400);
     })  
});

router.post('/updateone',jwtMW, function(req, res, next) {

  console.log(req.body);
  BooksModel.findOneAndUpdate({title:req.body.title},{$set:{title:req.body.Utitle,author:req.body.Uauthor}})
   .then(doc => { 
     res.status().send(doc);
   })
   .catch(err => {
     res.sendStatus(400);
   })
});

router.post('/deleteone',jwtMW, function(req, res, next) {
  console.log(req.body);
  BooksModel.deleteOne({title: req.body.title})
   .then(doc => {
     res.status(200).send(doc);
   })
   .catch(err => {
     res.sendStatus(400);
   })
});


module.exports = router;