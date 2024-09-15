import supertest from "supertest"
import { web } from "../src/application/web"
import { logger } from "../src/application/logging"
import { UserTest } from "./test-util"

describe('POST /api/users', () => {
  afterEach(async () => {
    await UserTest.delete()
  })

  it('should reject register new user is request is invalid', async () => {
    const response = await supertest(web)
    .post("/api/users")
    .send({
      username: "",
      name: "",
      password: ""
    })

    logger.debug(response.body)
    expect(response.statusCode).toBe(400)
    expect(response.body).toBeDefined()
  })

  it("should register new user", async () => {
    const response = await supertest(web).post("/api/users").send({
      username: "test",
      password: "test",
      name: "test",
    });

    logger.debug(response.body);
    expect(response.statusCode).toBe(200);
    expect(response.body.data.name).toBe("test");
    expect(response.body.data.username).toBe("test");
  });
})