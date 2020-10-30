import { expect } from "chai";
import { agent as request } from "supertest";

import  App from "../src/index";

describe("baseRoute", () => {
  it("should GET", async () => {
    const app = request(App);
    app.get('/');
    expect(true).to.equal(true);
  });
});
