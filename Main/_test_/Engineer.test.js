const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
  describe("Initialization", () => {
    it("should return Engineer name, id, email, and Github ", () => {
      const worker = new Engineer(
        "Zoey",
        "0911",
        "ashdmt39@gmail.com",
        "Chlovanna"
      );

      expect(worker.name).toEqual("Zoey");
      expect(worker.id).toEqual("0911");
      expect(worker.email).toEqual("ashdmt39@gmail.com");
      expect(worker.github).toEqual("Chlovanna");
    });
  });

  describe("EngineerInfo", () => {
    it("should return Engineer name", () => {
      const worker = new Engineer(
        "Zoey",
        "0911",
        "ashdmt39@gmail.com",
        "Github"
      );
      const name = worker.getName();
      expect(name).toEqual("Zoey");
    });

    it("should return Engineer ID", () => {
      const worker = new Engineer(
        "Zoey",
        "0911",
        "ashdmt39@gmail.com",
        "Github"
      );
      const id = worker.getId();
      expect(id).toEqual("0911");
    });
    it("should return Engineer email", () => {
      const worker = new Engineer(
        "Zoey",
        "0911",
        "ashdmt39@gmail.com",
        "Github"
      );
      const email = worker.getEmail();
      expect(email).toEqual("ashdmt39@gmail.com");
    });
    it("should return Engineer role", () => {
      const worker = new Engineer(
        "Zoey",
        "0911",
        "ashdmt39@gmail.com",
        "Github"
      );
      const role = worker.getRole();
      expect(role).toEqual("Engineer");
    });
    it("should return Github username", () => {
      const worker = new Engineer(
        "Zoey",
        "0911",
        "ashdmt39@gmail.com",
        "Github"
      );
      const github = worker.getGithub();
      expect(github).toEqual("Chlovanna");
    });
  });
});
