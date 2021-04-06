const Employee = require('../lib/Employee')

describe('Employee', () => {
    
    //passes
    it("getName returns name", () => {
        expect(new Employee("Charles").getName()).toBe("Charles");
    });

    //fails
    it("getId returns id", () => {
        expect(new Employee("123").getId()).toBe("123");
    });

    //fails
    it("getEmail returns email address", () => {
        expect(new Employee("cdfishe1@mail.com").getEmail()).toBe("cdfishe1@mail.com");
    });

    //passes
    it("getRole returns role", () => {
        expect(new Employee("Employee").getRole()).toBe("Employee");
    });


})