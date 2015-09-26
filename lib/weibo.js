'use strict';

var request = require('request');

module.exports = function(longurl, cb) {
    request.get('https://api.weibo.com/2/short_url/shorten.json', {
        qs: {
            source : '2849184197', //新浪iPad客户端App Key
            url_long: longurl
        }
    }, function(err, res, body) {
        if (err) {
            cb(err);
            return;
        }
        if (cb) {
            body = JSON.parse(body);
            if (body.error_code) {
                cb(body.error);
            } else {
                cb(null, body.urls[0].url_short);
            }
        }
    });
};
