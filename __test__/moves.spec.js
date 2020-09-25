const supertest = require('supertest');
const app = require('../app');

describe("Testing the moves API", () => {
    it("tests the get all endpoint", async() => {
        const response = await supertest(app).get('/moves/all');
        expect(response.status).toBe(200);
        expect(response.body).toEqual(expect.anything());
    });
    it("tests the get random endpoint", async() => {
        const response = await supertest(app).get('/moves/random');
        expect(response.status).toBe(200);
        expect(response.body).toEqual(expect.anything());
    });
    // it("tests the get id endpoint", async() => {
    //     const response = await supertest(app).get('/moves/699');
    //     expect(response.status).toBe(200);
    //     expect(response.body.id).toEqual(699);
    // });
    it("tests the get name endpoint", async() => {
        const response = await supertest(app).get('/moves/aerialace');
        expect(response.status).toBe(200);
        expect(response.body.ename).toEqual('Aerial Ace');
    });
});