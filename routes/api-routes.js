const db = require("../models");

module.exports = function(app) {
//display last workout on home page
  app.get("/api/workouts", function(req, res) {
    db.Workout.find({}).then(function(dbWorkouts) {
      res.json(dbWorkouts);
    });
  });
//add a new workout exercise
  app.post("/api/workouts", function({ body }, res) {
    db.Workout.create(body).then(function(dbWorkouts) {
      res.json(dbWorkouts);
    });
  });
//update of workout exercise
  app.put("/api/workouts/:id", function(req, res) {
    db.Workout.findOneAndUpdate({_id:req.params.id}, {$set:  {exercises: req.body}}, { new: true } ).then(function(dbWorkouts) {
      res.json(dbWorkouts);
    });
  });
//display stats graph of all performed wourkout exercises
  app.get("/api/workouts/range", function(req, res) {
    db.Workout.find({}).populate("workouts").then(function(dbWorkouts) {
      res.json(dbWorkouts);
    });
  });
};