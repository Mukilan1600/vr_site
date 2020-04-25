var mongoose = require('mongoose');

var user = mongoose.Schema({
    name:{
        type: String
    },
    gender:{
        type: String
    },
    age:{
        type: Number
    },
    affectionRate: {
        type: Number
    }
});

var User = module.exports = mongoose.model('survey',user);

module.exports.log_response = function(newUser,callback){
    newUser.save(callback);
}