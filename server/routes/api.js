const express =require('express');
const router =express.Router();
const Meeting=require('../models/meeting');

//get
router.get('/meetings',function(req,res,next){
  Meeting.find({}).then(function(meeting){
    res.send(meeting);

  });
});

//insert
router.post('/meetings',function(req,res,next){
  Meeting.create(req.body).then(function(meeting){

    res.send(meeting);
}).catch(next);
});


//update
router.put('/meetings/:id',function(req,res,next){
  Meeting.findByIdAndUpdate({_id:req.params.id},req.body).then(function(){
    Meeting.findOne({_id:req.params.id},req.body).then(function(meeting){
      res.send(meeting);
    });
  });
});

//delete
router.delete('/meetings/:id',function(req,res,next){
  Meeting.findByIdAndRemove({_id:req.params.id}).then(function(meeting){
      res.send(meeting);
  });
});

module.exports=router;
