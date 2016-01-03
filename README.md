# mrspider-cheerio

Middleware for [mrspider](https://github.com/vermiculite/mrspider) typically used after [mrspider-request](https://github.com/vermiculite/mrspider-request) and adds a jquery like property to `page.$` that can be used bs css based extractors such as [css-data-extractor](https://github.com/vermiculite/mrspider-css-data-extractor), [image-extraction](https://github.com/vermiculite/mrspider-css-image-extraction) and [link extractor](https://github.com/vermiculite/mrspider-css-links)

## Install

`npm i -S mrspider-cheerio`

## Usage
```js
var mrspider = require('mrspider');
var mrspiderCheerio = require('mrspider-cheerio');

var spider = mrspider();
spider.use(mrspiderCheerio);
```
