var express = require('express');
var router = express.Router();
var user = require('../dbbase/user.js')
/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Express'
  });
});


router.route('/login').get(function (req, res) {
  // 当通过get方式访问的时候就渲染登录界面
  res.render("login", {
    title: 'user Login'
  });
}).post(function () {
  // 当通过post来访问该路径的时候
  console.log(req.body);
  console.log(1);
})


// 注册

router.route("/register").get(function (req, res) {
  res.render("register", {
    title: 'User register'
  });
}).post(function (req, res) {
  var form = new formidable.IncomingForm();

  form.parse(req, function (err, fields, files) {
    var uname = fields.username;
    var upwd = fields.password;
    console.log(uname);
    // 查找
    user.findByName(uname, function (err, result) {
      if (err) {
        res.send(500);
        console.log(err);
      } else if (!result) {
        // 如果未找到
        user.create({
          username: uname,
          password: upwd
        }, function (err) {
          if (err) {
            res.send(500);
            console.log(err)
          } else {
            res.json({
              status: 1,
              msg: '注册成功'
            });
          }
        })
        res.send(404);
      } else {
        // req.session.error = '用户名已存在！';
        res.send(500);
      }
    })
  });




})

router.route('/home').get(function (req, res) {
  res.render('home', {
    title: "Home"
  });
})


module.exports = router;