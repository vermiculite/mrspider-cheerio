var cheerio = require('cheerio');
module.exports = function(page, spider, next) {
    page.$ = cheerio.load(page.content || '');
    next();
};
