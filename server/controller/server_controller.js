var mongoose = require('mongoose');
var User = mongoose.model('User');
var Question = mongoose.model('Question');
var Answer = mongoose.model('Answer');

module.exports = {
  register: function(req,res){
    var user = new User(req.body);
    user.save(function(err,data){
      if(err){
        res.status(400).send("User did not save")
      }else{
        req.session.user = data;
        res.sendStatus(200);
      }
    })
  },
  login: function(req,res){
    User.findOne({email:req.body.email}, function(err,data){
      if(data == null){
        res.status(400).send("User not found");
      }else{
        req.session.user = data;
        res.sendStatus(200);
      }
    })
  },
  current: function(req,res){
    if(req.session.user){
      res.json(req.session.user);
    }else{
      res.status(401).send('not user in session');
    }
  },
  logout: function(req,res){
    req.session.destroy();
    res.redirect('/')
  },
    addQuestion: function(req, res) {
    var question = new Question(req.body);
    question.user = req.session.user._id;
    console.log(question)
    question.save(function(err,data){
      if(err){
         console.log(err)
        res.status(400).send("problem saving question");
      }else{
        res.sendStatus(200);
      }
    })
  },
  getQuestions: function(req, res) {
    Question.find({}).populate('answers').exec(function(err,questions){
      if(err){
        res.status(400).send('Topics not found');
      }else{
        res.json(questions)
      }
    })
  },
  showQuestion: function(req, res) {
    Question.findOne({_id: req.params.id}).populate('user').populate({path:'answers', populate:{path:"user"}}).exec(function(err,question){
      if(question == null){
        res.status(400).send('Question not found');
      }else{
        res.json(question)
      }
    })
  },
  addAnswer: function(req, res) {
    Question.findOne({_id: req.params.question_id}, function(err, question){
      if(err){
           console.log(err);
        res.status(400).send(err);
      }else{
        var answer = new Answer(req.body);
        answer.user = req.session.user._id;
        answer.likes = 0;
        answer.question = question._id;
        answer.save(function(err,new_answer){
          if(err){
            res.status(400).send(err);
          }else{
            question.answers.push(new_answer);
            question.save(function(err,update_topic){
              if(err){
                res.status(400).send(err);
              }else{
                res.sendStatus(200);
              }
            })
          }
        })
      }
    })
  },
  addLike: function(req,res){
    console.log({_id:req.params.answer_id})
    Answer.findOne({_id:req.params.answer_id}, function(err,answer){
      console.log(err)
      if(answer == undefined){
          res.status(400).send("Answer not found.");
        }
        else{
          answer.likes+=1;
          answer.save(function(err, answer){
            if(err){
                console.log("Like not saved.");
            }
            else{
                res.sendStatus(200);
            }
        })
      }
    })
  }
}



