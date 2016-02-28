'use strict';

let through2 = require('through2');
var cheerio = require('cheerio');
module.exports = through2.obj(function(page, next) {
    page.$ = cheerio.load(page.content || '');
    next();
});
