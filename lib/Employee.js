const inquirer = require("inquirer");

class Employee {
    constructor (name, id, email) {
        this.name = name;
        this.id =id;
        this.email = email;
    }
    getName(name) {
       return this.name;
    }
    getId(id) {
       return this.id;
    }
    getEmail(email) {
      return this.email;
    }
    getRole(Employee) {
        return "Employee";
    }
    setName(name){
        this.name = name;
    }
    setId(id) {
        this.id = id;
    }
    setEmail(email) {
        this.email = email;
    }
}

module.exports = Employee;