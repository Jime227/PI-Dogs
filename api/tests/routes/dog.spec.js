/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require("chai");
const session = require("supertest-session");
const app = require("../../src/app.js");
const { Dog, conn } = require("../../src/db.js");

const agent = session(app);
const dog = {
  name: "Pug",
  height: "12",
  weight: "15",
  life_span: "15",
};

describe("Dogs routes", () => {
  before(() =>
    conn.authenticate().catch((err) => {
      console.error("Unable to connect to the database:", err);
    })
  );
  beforeEach(() => Dog.sync({ force: true }).then(() => Dog.create(dog)));
  describe("GET /dogs", () => {
    it("it responds with 200", () => {
      agent.get("/dogs").expect(function (res) {
        expect(res.status).equal(200);
      });
    });
  });
  describe("GET /dogs?name=", () => {
    it("it responds with 200 if a dog with that name is found", () => {
      agent.get("/dogs?name=Pug").expect(function (res) {
        expect(res.status).equal(200);
      });
    });
  });
});
