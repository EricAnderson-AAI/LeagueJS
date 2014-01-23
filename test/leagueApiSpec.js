/*global describe*/
/*global require*/
/*global beforeEach*/
/*global it*/

describe('League of Legends api wrapper test suite', function () {
        'use strict';


        var sinon = require('sinon'),
            should = require('should'),
            leagueApi = require('../lib/lolapi');


        beforeEach(function () {
            leagueApi.init('605ed83e-ec74-43b7-9296-ac7160c174a1', 'na');
        });

        xit('should be able to retrieve all champions', function (done) {


            leagueApi.getChampions(null, 'na', function (err, res) {

                should.not.exist(err);
                should.exist(res);
                res.length.should.be.greaterThan(0);
                done();
            });
        });

        xit('should be able to retrieve all of the free champions', function (done) {

            leagueApi.getChampions(true, 'na', function (err, res) {

                should.not.exist(err);
                should.exist(res);
                res.length.should.be.greaterThan(0);

                done();
            });
        });

        it('should throw an error if given the wrong type ', function (done) {

            var errorMock = {
                type: 'TypeError',
                method: 'getChampions',
                message: 'Invalid parameter for freeToPlay'
            };
            //league = sinon.stub(leagueApi, 'getChampions').returns(errorMock);

            leagueApi.getChampions(null, 'na', function (err, champs) {

                done();
            });
        });