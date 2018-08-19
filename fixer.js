var config = require('./config.json');
var https = require('https');

exports.recent = function (base) {
    return new Promise(resolve => {
        var reqGet = https.request(`https://data.fixer.io/api/latest?access_key=${config.FixerKey}&base=${base}`, function (res) {
            var buffer = [];
            res.on('data', function (d) {
                buffer.push(d);
            }).on('end', function () {
                var tmp = JSON.parse(Buffer.concat(buffer).toString());
            });
        });
        reqGet.end();
        reqGet.on('error', function (e) {
            console.error(e);
        });
    });
}

exports.convert = function (from, to, amount) {
    return new Promise(resolve => {
        var reqGet = https.request(`https://data.fixer.io/api/convert?access_key=${config.FixerKey}&from=${from}&to=${to}&amount=${amount}`, function (res) {
            var buffer = [];
            res.on('data', function (d) {
                buffer.push(d);
            }).on('end', function () {
                var tmp = JSON.parse(Buffer.concat(buffer).toString());
                resolve(tmp);
            });
        });
        reqGet.end();
        reqGet.on('error', function (e) {
            console.error(e);
        });
    });
}