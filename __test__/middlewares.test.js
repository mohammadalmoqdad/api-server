'use strict';
const { server } = require('../lib/server');
const supertest = require('supertest');
const mockRequest = supertest(server);
const currentTime = require('../middleware/timestamp')
describe("middlewares model", () => {


    it("respond should be 404 not found", () => {
        return mockRequest.get('/any-Rong-Route').then(result => {
            expect(result.status).toBe(404);
        }).catch(console.error);
    })



    let consoleSpy;

    beforeEach(()=> {
        consoleSpy = jest.spyOn(console, 'log').mockImplementation();
    });

    afterEach(()=> {
        consoleSpy.mockRestore();
    });





    it('The timestamp properity should not be null', ()=>{
        let req = {};
        let res = {};
        let next = jest.fn();
        currentTime(req, res, next);
        expect(req.requestTime).not.toEqual(null);
      });


})