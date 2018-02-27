var db = require("./model/db.js");
var student = require('./model/Student.js');

// 方法一：
// var xiaoming = new student({name:'小明',sex:'男',age: 10});
// xiaoming.save(function(){
//     console.log('储存成功');
// })


// 方法二：
// student.create({name: '小红',age: 10,sex: '女'},function(err){
//     console.log('储存成功');
// });

// student.findByName('小明',function(err,result){
//     console.log(result);
// })

student.M_update({"name": "小明"},{$set: {"age": 40}},{},function(){
    console.log('更新成功');
})