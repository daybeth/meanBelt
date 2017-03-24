var mongoose = require('mongoose');
var User = mongoose.model('User');
var Topic = mongoose.model('Topic');
var Answer = mongoose.model('Answer');
var Comment = mongoose.model('Comment');

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
  showUser: function(req, res) {
    User.findOne({_id: req.params.id}, function(err,user){
      if(user == null){
        res.status(400).send('Topic not found');
      }else{
        res.json(user)
      }
    })
  },
  getTopics: function(req, res) {
    Topic.find({}).populate('user').exec(function(err,topics){
      if(err){
        res.status(400).send('Topics not found');
      }else{
        res.json(topics)
      }
    })
  },
  showTopic: function(req, res) {
    Topic.findOne({_id: req.params.id}).populate('user').populate({path:'answers', populate:[{path:"user"}, {path:"comments",populate:{path:'user'}}]}).exec(function(err,topic){
      if(topic == null){

        res.status(400).send('Topic not found');
      }else{

        res.json(topic)
      }
    })
  },
  // Topic.findOne({_id: req.params.id}).populate('user').populate({path:'answers', populate:{path:"user"}})
  addTopic: function(req, res) {
    var topic = new Topic(req.body);
    topic.user = req.session.user._id;
    console.log(topic)
    topic.save(function(err,data){
      if(err){
         console.log(err)
        res.status(400).send("problem saving topic");
      }else{
        res.sendStatus(200);
      }
    })
  },
  addAnswer: function(req, res) {
    Topic.findOne({_id: req.params.topic_id}, function(err, topic){
      if(err){
           console.log(err);
        res.status(400).send(err);
      }else{
        var answer = new Answer(req.body);
        answer.user = req.session.user._id;
        answer.upvotes = 0;
        answer.downvotes = 0;
        answer.topic = topic._id;
        answer.save(function(err,new_answer){
          if(err){
            res.status(400).send(err);
          }else{
            topic.answers.push(new_answer);
            topic.save(function(err,update_topic){
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
  addComment: function(req, res) {
    Answer.findOne({_id: req.params.answer_id}, function(err, answer){
      if(err){
           console.log(err);
        res.status(400).send(err);
      }else{
        var comment = new Comment(req.body);
        comment.user = req.session.user._id;
        comment.answer = answer._id;
        comment.save(function(err,new_comment){
          if(err){
            res.status(400).send(err);
          }else{
            answer.comments.push(new_comment);
            answer.save(function(err,update_answer){
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
  topicCount: function(req,res){
    Topic.find({user:req.params.id}).count(function(err,data){
      if(data == null){
          res.status(400).send("Can't access posts.");
      }
      else{
          res.json(data);
      }
    })
  },
    answerCount: function(req,res){
    Answer.find({user:req.params.id}).count(function(err,data){
      if(data == null){
          res.status(400).send("Can't access posts.");
      }
      else{
          res.json(data);
      }
    })
  },
    commentCount: function(req,res){
    Comment.find({user:req.params.id}).count(function(err,data){
      if(data == null){
          res.status(400).send("Can't access posts.");
      }
      else{
          res.json(data);
      }
    })
  }
}




