'use strict';

const { server } = require('../lib/server');
const supergoose = require('@code-fellows/supergoose');
const mockRequest = supergoose(server);




describe("Products routes model", () => {
    let consoleSpy;

    beforeEach(() => {
        consoleSpy = jest.spyOn(console, 'log').mockImplementation();
    });

    afterEach(() => {
        consoleSpy.mockRestore();
    });






    it('test route products/ (GET All)', () => {
        return mockRequest.get('/products').then(result => {
            expect(result.status).toBe(200);
        });
    });




    it('test route products/:id (GET One)', () => {
        return mockRequest.get('/products/5ff526b3ae80135ba1e43e23').then(result => {
            expect(result.status).toBe(200);
        });
    });




    it('test route products/ (POST)', () => {
        return mockRequest.post('/products').then(result => {
            expect(result.status).toBe(201);
        });
    });




    it('test route products/:id (put)', () => {
        return mockRequest.put('/products/5ff526b3ae80135ba1e43e23').then(result => {
            expect(result.status).toBe(201);
        });
    });





    it('test route products/:id (delete)', () => {
        return mockRequest.delete('/products/5ff526b3ae80135ba1e43e23').then(result => {
            expect(result.status).toBe(201);
        });
    });

})









describe("catigories routes model", () => {
    let consoleSpy;

    beforeEach(() => {
        consoleSpy = jest.spyOn(console, 'log').mockImplementation();
    });

    afterEach(() => {
        consoleSpy.mockRestore();
    });





    it('test route categories/ (GET All)', () => {
        return mockRequest.get('/categories').then(result => {
            expect(result.status).toBe(200);
        });
    });




    it('test route categories/:id (GET One)', () => {
        return mockRequest.get('/categories/5ff52748ae80135ba1e43e27').then(result => {
            expect(result.status).toBe(200);
        });
    });





    it('test route categories/ (POST)', () => {
        return mockRequest.post('/categories').then(result => {
            expect(result.status).toBe(201);
        });
    });




    it('test route categories/:id (put)', () => {
        return mockRequest.put('/categories/5ff52748ae80135ba1e43e27').then(result => {
            expect(result.status).toBe(201);
        });
    });



    
    it('test route categories/:id (delete)', () => {
        return mockRequest.delete('/categories/5ff52748ae80135ba1e43e27').then(result => {
            expect(result.status).toBe(201);
        });
    });

})