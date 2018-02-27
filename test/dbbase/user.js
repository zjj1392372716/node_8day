var mongoose = require('mongoose');
var db = require('./db.js')

// shema集合的配置
var userShema = mongoose.Schema({
    username: {
        type: String
    },
    password: {
        type: String
    }
});

// 创建方法
userShema.statics.findByName = function(uname , callback){
    return this.model('user').find({username: uname},callback);
}


// 模型就是类名
var userModel = db.model('user', userShema); // 第一个参数是类名
module.exports = userModel;