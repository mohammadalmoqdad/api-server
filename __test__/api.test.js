const { server } = require('../lib/server');

const supergoose = require('@code-fellows/supergoose');
const mockRequest = supergoose(server);


describe('products APIs', () => {



    it('can post a product item', async () => {
        const productObj = {
            name: "phone",
            display_name: "samsung phone",
            description: "this is my phone"
        }
        const data = await mockRequest.post('/products').send(productObj);
        const record = data.body;
        Object.keys(productObj).forEach(key => {
            expect(record[key]).toEqual(productObj[key]);
        });
    });




    it('can get() a product item', async () => {
        const productObj = {
            name: "tablet",
            display_name: "samsung tablet",
            description: "this is my tablet"
        };
        const data = await mockRequest.post('/products').send(productObj);
        const record = data.body;
        const PorductResponse = await mockRequest.get(`/products/${record._id}`);
        const productItem = PorductResponse.body[0];
        Object.keys(productObj).forEach(key => {
            expect(productItem[key]).toEqual(productObj[key]);
        });

    })





    it('can delete() a product item', async () => {
        const productObj = {
            name: "tablet",
            display_name: "samsung tablet",
            description: "this is my tablet"
        };
        const data = await mockRequest.post('/products').send(productObj);
        const record = data.body;
        const PorductResponse = await mockRequest.delete(`/products/${record._id}`);
        const productItem = PorductResponse.body;
        Object.keys(productObj).forEach(key => {
            expect(productItem[key]).toEqual(productObj[key]);
        });
    })





    it('can put() a product item', async () => {
        const productObj = {
            name: "tablet",
            display_name: "samsung tablet",
            description: "this is my tablet"
        };
        const UpdatedProductObj = {
            name: "computer",
            display_name: "samsung computer",
            description: "this is my computer"
        };
        const data = await mockRequest.post('/products').send(productObj);
        const record = data.body;

        const PorductResponse = await mockRequest.put(`/products/${record._id}`).send(UpdatedProductObj);
        const productItem = PorductResponse.body;
        Object.keys(productObj).forEach(key => {
            expect(productItem[key]).toEqual(productObj[key]);
        });

    });


})






describe('catigories APIs', () => {


    it('can post a catigory item', async () => {
        const categoryObj = {
            name: "mama's phone",
            display_name: "our phone",
            description: "mama's phone for all of us"
        };
        const data = await mockRequest.post('/categories').send(categoryObj);
        const record = data.body;
        Object.keys(categoryObj).forEach(key => {
            expect(record[key]).toEqual(categoryObj[key]);
        });
    });




    it('can get() a catigory item', async () => {
        const categoryObj = {
            name: "mama's phone",
            display_name: "our phone",
            description: "mama's phone for all of us"
        };
        const data = await mockRequest.post('/categories').send(categoryObj);
        const record = data.body;
        const PorductResponse = await mockRequest.get(`/categories/${record._id}`);
        const productItem = PorductResponse.body[0];
        Object.keys(categoryObj).forEach(key => {
            expect(productItem[key]).toEqual(categoryObj[key]);
        });

    })





    it('can delete() a catigory item', async () => {
        const categoryObj = {
            name: "mama's phone",
            display_name: "our phone",
            description: "mama's phone for all of us"
        };
        const data = await mockRequest.post('/categories').send(categoryObj);
        const record = data.body;
        const PorductResponse = await mockRequest.delete(`/categories/${record._id}`);
        const productItem = PorductResponse.body;

        Object.keys(categoryObj).forEach(key => {
            expect(productItem[key]).toEqual(categoryObj[key]);
        });
    })





    it('can put() a categories item', async () => {
        const categoryObj = {
            name: "mama's phone",
            display_name: "our phone",
            description: "mama's phone for all of us"
        };
        const updatedCategoryObj = {
            name: "computer",
            display_name: "samsung computer",
            description: "this is my computer"
        };
        const data = await mockRequest.post('/categories').send(categoryObj);
        const record = data.body;
        const PorductResponse = await mockRequest.put(`/categories/${record._id}`).send(updatedCategoryObj);
        const catigoryItem = PorductResponse.body;
        Object.keys(categoryObj).forEach(key => {
            expect(catigoryItem[key]).toEqual(categoryObj[key]);
        });

    });









})