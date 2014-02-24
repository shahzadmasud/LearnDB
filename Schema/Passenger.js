var mongo = require('mongoose');

timestamps = require("mongoose-times"),
    Schema = mongoose.Schema;
var Passenger = new Schema({

        Name : String,
        CNIC:  {type:String, unique:true},
        Phone : {type:Number, unique:true},
        Password : String,
        Geolocation: [	{
            Longitude : {type: Number, default: 0},
            Latitude :  {type: Number, default: 0}
        }   ]

});
Passenger.plugin(timestamps);
module.exports = mongo.model('Passenger', Passenger);
