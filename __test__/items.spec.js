const supertest = require('supertest');
const app = require('../app');

describe("Testing the items API", () => {
    it("tests the get all endpoint", async() => {
        const response = await supertest(app).get('/items/all');
        expect(response.status).toBe(200);
        expect(response.body).toEqual(expect.anything());
    });
    it("tests the get random endpoint", async() => {
        const response = await supertest(app).get('/items/random');
        expect(response.status).toBe(200);
        expect(response.body).toEqual(expect.anything());
    });
    // it("tests the get id endpoint", async() => {
    //     const response = await supertest(app).get('/items/119');
    //     expect(response.status).toBe(200);
    //     expect(response.body.id).toEqual(119);
    // });
    it("tests the get name endpoint", async() => {
        const response = await supertest(app).get('/items/masterball');
        expect(response.status).toBe(200);
        expect(response.body.name.english).toEqual('Master Ball');
    });
});