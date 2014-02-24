
/**
 * Module dependencies.
 */
module.exports = function(){
    var express = require('express');
    var MongoStore = require('connect-mongo')(express);
    var routes = require('./routes')();
    var user = require('./routes/user');
    var http = require('http');
    var path = require('path');
    var db = require('./db');
    var app = express();
    var passport = require('./auth');


//    var mongoose = require('mongoose');
//    mongoose.connect('mongodb://'+conf.mongoDB.host+'/'+conf.mongoDB.db);

    // all environments
    app.set('port', process.env.PORT || 3000);
    app.set('views', path.join(__dirname, 'views'));
    app.set('view engine', 'jade');
    app.use(express.favicon());
    app.use(express.logger('dev'));
    app.use(express.cookieParser());
    app.use(express.session({
        secret: 'rand string',
        store: new MongoStore({
            mongoose_connection: db
        })
    }));
    app.use(passport.initialize());
    app.use(passport.session());
    app.use(express.bodyParser());
    app.use(express.json());
    app.use(express.urlencoded());



    app.use(express.methodOverride());
    app.use(app.router);
    app.use(express.static(path.join(__dirname, 'public')));




    // development only
    if ('development' == app.get('env')) {
      app.use(express.errorHandler());

    }
    app.get('/',routes.roleselect);
    //app.get('/omer', user.list);
//    app.get('/boy', user.shahan);
//    app.get('/login', routes.login);
//    app.get('/signup',signupController);

//     app.post('/signup', signupController);
    var signupController = require('./routes/signup')(app, passport);
    var loginController = require('./routes/login')(app, passport);
    var geoLocation = require('./routes/putlocation')(app);
    var geoLocationDriver = require('./routes/putlocationdriver')(app);
    var roleselect = require('./routes/roleselect')(app);
//     app.post('/login', passport.authenticate('local',{
//            failureRedirect: '/login', successRedirect: '/user'
//        }));

        app.get('/user', routes.user);
    app.get('/login', routes.login);
    app.get('/userDriver', routes.userDriver);
    app.get('/loginPassenger', routes.loginPassenger);


    return app;

}
