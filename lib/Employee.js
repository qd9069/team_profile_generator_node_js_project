// created the parent object - Employee
class Employee {
    constructor(name, id, email) {
        // if (!name.trim()) {
        //     throw new Error("Invalid name parameter.");
        // }
        // if (typeof id !== "number") {
        //     throw new Error("Invalid id parameter.");
        // }
        // if (!email.trim()) {
        //     throw new Error("Invalid email parameter.");
        // }
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
        return `${this.name}`;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return `${this.email}`;
    }

    getRole() {
        return `${this}`;
    }

}

module.exports = Employee;
