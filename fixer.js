var config = require('./config.json');
var https = require('https');
 
//Calls recent values endpoint
exports.recent = function (base) {
    return new Promise(resolve => {
        var reqGet = https.request(config.link + `latest?` + config.ApiKey + `&base=${base}`, function (res) {
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

//Calls convertion endpoint
exports.convert = function (from, to, amount) {
    return new Promise(resolve => {
        var reqGet = https.request(config.link + `convert?` + config.ApiKey + `&from=${from}&to=${to}&amount=${amount}`, function (res) {
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

//Calls history endpoint
exports.history = function(d, base, option){
    var link = config.link + `${d}?` + config.ApiKey + `&base=${base}&symbols=${option}`
    if(option = 0)
        link = config.link + `${d}?` + config.ApiKey + `&base=${base}`

    return new Promise(resolve => {
        var reqGet = https.request(link, function (res) {
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