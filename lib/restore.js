'use stric';

var request = require('request');

module.exports = function (url, cb) {
    request.get(url,{
        followRedirect: false //不自动重定向
    }, function (err, res, body) {
        if(cb){
            if(err){
                cb(err);
                return;
            }
            cb(null, res.headers.location)
        }

    })
};
