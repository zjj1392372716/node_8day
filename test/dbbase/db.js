var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/login');

var db = mongoose.connection;//连接到的数据库
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('数据库链接成功');
});

module.exports = db;