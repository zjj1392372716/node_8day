var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// 登录
router.route('/login').get(function(req,res){
  // 当通过get方式访问的时候就渲染登录界面
  res.render("login",{title: 'user Login'});
}).post(function(){
  // 当通过post来访问该路径的时候
  console.log(req.body);
  console.log(1);
})


// 注册

router.route("/register").get(function(req,res){   
	res.render("register",{title:'User register'});
}).post(function(req,res) {
  
})

router.route('/home').get(function(req,res){
  res.render('home',{title: "Home"});
})


module.exports = router;
