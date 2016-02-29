var mrspiderCheerio = require('..');
var chai = require('chai');
var should = chai.should();
var sinon = require('sinon');
describe('mrspider-cheerio', function() {

    it('should call next', function() {
        var html = '<h1>Hi there</h1>';
        var page = {
            content: html
        };
        var spy = sinon.spy();
        mrspiderCheerio._transform(page, 'utf8', spy);
        spy.calledOnce.should.equal(true);
    });

    it('should add $ property to page', function() {
        var html = '<h1>Hi there</h1>';
        var page = {
            content: html
        };
        var spy = sinon.spy();
        mrspiderCheerio._transform(page, 'utf8', spy);
        should.exist(page.$);
    });

    it('should add $ property to page given no content', function() {
        var html = '<h1>Hi there</h1>';
        var page = {
            content: null
        };
        var spy = sinon.spy();
        mrspiderCheerio._transform(page, 'utf8', spy);
        should.exist(page.$);
    });


    it('should add $ property giving a jquery like interface to the dom.', function() {
        var html = '<h1>Hi there</h1>';
        var page = {
            content: html
        };
        var spy = sinon.spy();
        mrspiderCheerio._transform(page, 'utf8', spy);
        page.$('h1').text().should.equal('Hi there');
    });
});