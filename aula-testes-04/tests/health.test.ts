import supertest from "supertest";
import app from "./../src/index";

describe("/health", () => {
    it("should to return the correct status", async () => {
        const result = await supertest(app).get("/health");
        const status = result.status;

        expect(status).toBe(200);
    })
})