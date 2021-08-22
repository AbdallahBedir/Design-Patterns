/**
 * Visitor is a behavioral design pattern that lets you separate algorithms from the objects on which they operate.
 * The visitor design pattern is a way of separating an algorithm from an object structure on which it operates.
 * A practical result of this separation is the ability to add new operations to existing object structures
 * without modifying the structures. It is one way to follow the open/closed principle.
 */
function Employee(name, salary)
{
  this.name = name
  this.salary = salary
}

Employee.prototype = {
  getSalary: function()
  {
    return this.salary
  },
  setSalary: function(sal)
  {
    this.salary = sal
  },
  accept: function(visitorFunction)
  {
    visitorFunction(this)
  }
}
/////////////////////////////////////////////

const devsage = new Employee("DevSage", 10000)
console.log(devsage.getSalary())

function ExtraSalary(emp)
{
  emp.setSalary(emp.getSalary() * 2)
}

devsage.accept(ExtraSalary)
console.log(devsage.getSalary())