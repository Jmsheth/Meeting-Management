
//get
    res.send(meeting);
  });
});

//get by id
});

//insert
});

//update
      res.send(meeting);
    });
  });
});

//delete
  });
});

//push new topics
router.put('/meetings/topics/:id',function(req,res,next){
 Meeting.findOne({_id:req.params.id}, function(error, meeting){
    if(error){
        res.json(error);
    }
    else if(meeting == null){
        res.json('no such meeting!')
    }
    else{
      console.log(req.body);
        meeting.topics.push( req.body);
        meeting.save( function(error, data){
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

//delete topics
router.delete('/meetings/topics/:id',function(req,res,next){  console.log(req.body);
  Meeting.findOneAndUpdate(

         { _id: req.params.id },
         { $pull: { topics: req.body}},
         // !!!! note the { 'new': true } option
         { 'new': true },
         function(error, data) {
           if(error){
               res.json(error);
           }
           else{
               res.json(data);
           }
         });
});

