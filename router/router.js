let express = require("express");
let Animal = require('../model/animal')
let router = express.Router();

router.get('/list/', function(req, res){
  Animals.find(function(err, animals){
    if(err) throw err;
    res.send(animals);
  });

})

router.post('/add/', function(req, res){
  Animal.create(req.body, function(err, animal){
    console.log("saved to db..." + animal);
    if(err) throw err;
    res.redirect('/');
  });

})

router.post('/delete/' , function(req, res){
  let id = req.body.id;
  console.log(id);
  Animal.findOneAndRemove({_id: id}, function(err){
    if(err) throw err;
    console.log('removed');
    res.redirect('/');
  });


});

router.get('/', (req, res) => {
  Animal.find(function(err, animals){
    if(err) throw err;
    //res.send(animals);
    res.render('../views/index.ejs', {animals:animals});
  });


});


module.exports = router;
