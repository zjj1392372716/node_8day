var mongoose = require('mongoose');
var db = require('./db.js')

// shema集合的配置
var studentShema = mongoose.Schema({
    name: {
        type: String
    },
    age: {
        type: Number
    },
    sex: {
        type: String
    }
});

// 创建方法
studentShema.statics.findByName = function(name , callback){
    return this.model('student').find({name: name},callback);
}

studentShema.statics.M_update = function(conditions , update, options, callback){
    return this.model('student').update(conditions , update, options, callback);
}
// 模型就是类名
var studentModel = db.model('student', studentShema); // 第一个参数是类名
module.exports = studentModel;