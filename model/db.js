//连接数据库
const mongoose = require('mongoose')
mongoose
    .connect('mongodb://localhost:27017/ReactNative')
    .then(() => {
        console.log('====================================');
        console.log('ok');
        console.log('====================================');
    })
    .catch((err) => {
        console.log('====================================');
        console.log(err);
        console.log('====================================');
    })

let loginstu = new mongoose.Schema({

})
const loginmodel = mongoose.model('login', loginstu, 'login')
module.exports = {
    loginmodel
}
