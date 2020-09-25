const supertest = require('supertest');
const app = require('../app');

describe("Testing the pokemon API", () => {
    it("tests the get all endpoint", async() => {
        const response = await supertest(app).get('/pokemon/all');
        expect(response.status).toBe(200);
        expect(response.body).toEqual(expect.anything());
    });
    it("tests the get random endpoint", async() => {
        const response = await supertest(app).get('/pokemon/random');
        expect(response.status).toBe(200);
        expect(response.body).toEqual(expect.anything());
    });
    it("tests the get id endpoint", async() => {
        const response = await supertest(app).get('/pokemon/699');
        expect(response.status).toBe(200);
        expect(response.body.id).toEqual(699);
    });
    it("tests the get name endpoint", async() => {
        const response = await supertest(app).get('/pokemon/infernape');
        expect(response.status).toBe(200);
        expect(response.body.name.english).toEqual('Infernape');
    });
});