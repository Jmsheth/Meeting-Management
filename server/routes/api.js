const express =require('express');
const router =express.Router();
const Meeting=require('../models/meeting');

//get
router.get('/meetings',function(req,res,next){
  Meeting.find({}).then(function(meeting){
    res.send(meeting);

  });
});

//get by id
router.get('/meetings/:id',function(req,res,next){

    Meeting.findOne({_id:req.params.id},req.body).then(function(meeting){
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

//push new topics
router.post('/meetings/topics/:id',function(req,res,next){
  Meeting.findOne({_id:req.params.id}, function(error, meeting){
    if(error){
        res.json(error);
    }
    else if(meeting == null){
        res.json('no such meeting!')
    }
    else{
      console.log(req.params.topics);
        Meeting.topics.push({ t_name: "trupal" });
        Meeting.save( function(error, data){
            if(error){
                res.json(error);
            }
            else{
                res.json(data);
            }
        });
    }
});
});


module.exports=router;
