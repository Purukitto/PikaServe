const supertest = require('supertest');
const app = require('../app');

describe("Testing the types API", () => {
    it("tests the get all endpoint", async() => {
        const response = await supertest(app).get('/types/all');
        expect(response.status).toBe(200);
        expect(response.body).toEqual(expect.anything());
    });
    it("tests the get random endpoint", async() => {
        const response = await supertest(app).get('/types/random');
        expect(response.status).toBe(200);
        expect(response.body).toEqual(expect.anything());
    });
    it("tests the get id endpoint", async() => {
        const response = await supertest(app).get('/types/18');
        expect(response.status).toBe(200);
        expect(response.body.english).toEqual('Fairy');
    });
    it("tests the get name endpoint", async() => {
        const response = await supertest(app).get('/types/fairy');
        expect(response.status).toBe(200);
        expect(response.body.english).toEqual('Fairy');
    });
});