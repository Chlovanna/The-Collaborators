const Employee = require("../lib/Engineer");

describe("Employee", () => {
  describe("Initialization", () => {
    it("should return employee name, id, email, and office number ", () => {
      const worker = new Employee("Zoey", "0911", "ashdmt39@gmail.com", "11B");

      expect(worker.name).toEqual("Zoey");
      expect(worker.id).toEqual("0911");
      expect(worker.email).toEqual("ashdmt39@gmail.com");
      expect(worker.school).toEqual("UNC");
    });
  });

  describe("employeeInfo", () => {
    it("should return employee name", () => {
      const worker = new Employee("Zoey", "0911", "ashdmt39@gmail.com", "UNC");
      const name = worker.getName();
      expect(name).toEqual("Zoey")
    });

    it("should return employee ID", () => {
        const worker = new Employee("Zoey", "0911", "ashdmt39@gmail.com", "UNC");
        const id = worker.getId();
        expect(id).toEqual("0911")
      });
      it("should return employee email", () => {
        const worker = new Employee("Zoey", "0911", "ashdmt39@gmail.com", "UNC");
        const email = worker.getEmail();
        expect(email).toEqual("ashdmt39@gmail.com")
      });
      it("should return employee role", () => {
        const worker = new Employee("Zoey", "0911", "ashdmt39@gmail.com", "UNC");
        const role = worker.getRole();
        expect(role).toEqual("Employee")
      });
      it("should return school name", () => {
        const worker = new Employee("Zoey", "0911", "ashdmt39@gmail.com", "UNC");
        const school = worker.getSchool();
        expect(school).toEqual("UNC")
      });
    });
  });
