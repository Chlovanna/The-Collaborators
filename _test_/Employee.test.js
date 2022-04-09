const Employee = require("../lib/Employee");

describe("Employee", () => {
  describe("Initialization", () => {
    it("should return employee name, id, and email ", () => {
      const worker = new Employee("Zoey", "0911", "ashdmt39@gmail.com");

      expect(worker.name).toEqual("Zoey");
      expect(worker.id).toEqual("0911");
      expect(worker.email).toEqual("ashdmt39@gmail.com");
    });
  });

  describe("employeeInfo", () => {
    it("should return employee name", () => {
      const worker = new Employee("Zoey", "0911", "ashdmt39@gmail.com");
      const name = worker.getName();
      expect(name).toEqual("Zoey")
    });

    it("should return employee ID", () => {
        const worker = new Employee("Zoey", "0911", "ashdmt39@gmail.com");
        const id = worker.getId();
        expect(id).toEqual("0911")
      });
      it("should return employee email", () => {
        const worker = new Employee("Zoey", "0911", "ashdmt39@gmail.com");
        const email = worker.getEmail();
        expect(email).toEqual("ashdmt39@gmail.com")
      });
      it("should return employee role", () => {
        const worker = new Employee("Zoey", "0911", "ashdmt39@gmail.com");
        const role = worker.getRole();
        expect(id).toEqual("Employee")
      });
    });
  });

