const Manager = require("../lib/Manager");

describe("Manager", () => {
  describe("Initialization", () => {
    it("should return Manager name, id, email, and office number ", () => {
      const worker = new Manager("Zoey", "0911", "ashdmt39@gmail.com", "11B");

      expect(worker.name).toEqual("Zoey");
      expect(worker.id).toEqual("0911");
      expect(worker.email).toEqual("ashdmt39@gmail.com");
      expect(worker.officeNumber).toEqual("11B");
    });
  });

  describe("ManagerInfo", () => {
    it("should return Manager name", () => {
      const worker = new Manager("Zoey", "0911", "ashdmt39@gmail.com", "11B");
      const name = worker.getName();
      expect(name).toEqual("Zoey");
    });

    it("should return Manager ID", () => {
      const worker = new Manager("Zoey", "0911", "ashdmt39@gmail.com", "11B");
      const id = worker.getId();
      expect(id).toEqual("0911");
    });
    it("should return Manager email", () => {
      const worker = new Manager("Zoey", "0911", "ashdmt39@gmail.com", "11B");
      const email = worker.getEmail();
      expect(email).toEqual("ashdmt39@gmail.com");
    });
    it("should return Manager role", () => {
      const worker = new Manager("Zoey", "0911", "ashdmt39@gmail.com", "11B");
      const role = worker.getRole();
      expect(role).toEqual("Manager");
    });
    it("should return office number", () => {
      const worker = new Manager("Zoey", "0911", "ashdmt39@gmail.com", "11B");
      const officeNumber = worker.getOfficeNumber();
      expect(officeNumber).toEqual("11B");
    });
  });
});
