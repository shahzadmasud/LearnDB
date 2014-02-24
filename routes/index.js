
/*
 * GET home page.
 */

var Driver = require('../Schema/Driver');
var Passenger = require('../Schema/Passenger');

module.exports = function(){
    var functions = {};
 /*   functions.queryDB = function(req, res) {
        var  pikl = {Name: "Awais ", email: "awaiskhurshed@gmail.com", Phone: +0888};
        var record = new Drver(pikl);
        record.save(function (err){
            if(err){
                console.log(err);
                res.status(500).json({status:'failure'})
            }
            else
            {
                res.json({status:'success'})
            }
        });
    }
*/
    functions.roleselect = function(req,res){
        res.render('roleselect');
    };
    functions.login = function(req,res){
        res.render('login', {title: 'Log in Driver'});
    };
    functions.loginPassenger = function(req,res){
        res.render('loginPassenger', {title: 'Log in Passenger'});
    };

    functions.user = function(req, res){
        if (req.session.passport.user === undefined){
            res.redirect('/loginPassenger');

        }else {
            res.render('user', { title: 'Welcome Passenger',user: req.user })

        }
    };
    functions.userDriver = function(req, res){
        if (req.session.passport.user === undefined){
            res.redirect('/login');

        }else {
            res.render('userDriver', { title: 'Welcome Driver',user: req.user })

        }
    };
    return functions;



};

