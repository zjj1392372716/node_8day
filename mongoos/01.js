const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

// 创建一个猫的模型
// 每一个猫都有一个名字，string类型

const Cat = mongoose.model('Cat', { name: String });

// 实例化一只猫
const kitty = new Cat({ name: 'Zildjian' });
// 调用方法，存到数据库里
kitty.save().then(() => console.log('meow'));