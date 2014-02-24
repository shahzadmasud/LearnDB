var mongo = require('mongoose');

timestamps = require("mongoose-times"),
Schema = mongo.Schema;
var Driver = new Schema({

        Name : String,
        CNIC:  {type:String, unique:true},
        Phone : {type:String, unique:true},
        Vehicle : {type:String, unique:true},
        Password : String,

        Geolocation: [	{
            Longitude : {type: Number, default: 0},
            Latitude :  {type: Number, default: 0}
        }   ]

});
Driver.plugin(timestamps);
module.exports = mongo.model('Driver', Driver);




