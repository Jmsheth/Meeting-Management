const express = require("express");
const router = express.Router();
const Meeting = require("../models/meeting");
const Task = require("../models/Task");

//....................................meetings............................................................

//get
router.get("/meetings", function(req, res, next) {
  Meeting.find({}).then(function(meeting) {
    res.send(meeting);
  });
});

//get by id
router.get("/meetings/:id", function(req, res, next) {
  Meeting.findOne({ _id: req.params.id }, req.body).then(function(meeting) {
    res.send(meeting);
  });
});

//insert
router.post("/meetings", function(req, res, next) {
  Meeting.create(req.body)
    .then(function(meeting) {
      res.send(meeting);
    })
    .catch(next);
});

//update
router.put("/meetings/:id", function(req, res, next) {
  Meeting.findByIdAndUpdate({ _id: req.params.id }, req.body).then(function() {
    Meeting.findOne({ _id: req.params.id }, req.body).then(function(meeting) {
      res.send(meeting);
    });
  });
});

//delete
router.delete("/meetings/:id", function(req, res, next) {
  Meeting.findByIdAndRemove({ _id: req.params.id }).then(function(meeting) {
    res.send(meeting);
  });
});

//.................................topics---------------------------------------------------
//push new topics



//delete topics


//_______________________________________Task__________________________________

router.get("/tasks", function(req, res, next) {
  Task.find({}).then(function(err, task) {
    if (err) {
      res.send(err);
    }
    res.send(task);
  });
});

router.post("/tasks", function(req, res, next) {
  Task.create(req.body)
    .then(function(task) {
      res.send(task);
    })
    .catch(next);
});



//update
router.put("/tasks/:id", function(req, res, next) {
  Task.findByIdAndUpdate({ _id: req.params.id }, req.body).then(function() {
    Task.findOne({ _id: req.params.id }, req.body).then(function(task) {
      res.send(task);
    });
  });
});

//delete
router.delete("/tasks/:id", function(req, res, next) {
  Task.findByIdAndRemove({ _id: req.params.id }).then(function(task) {
    res.send(task);
  });
});

module.exports = router;
