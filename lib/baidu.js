'use strict';

var request = require('request');

module.exports = function(url, cb) {
    request.post('http://dwz.cn/create.php', {
        form: {
            url: url
        }
    }, function(err, res, body) {
        if (err) {
            cb(err);
            return;
        }
        if (cb) {
            body = JSON.parse(body)
            if (body.status === 0) {
                cb(null, body.tinyurl);
            } else {
                cb(body.err_msg);
            }
        }
    });
};
