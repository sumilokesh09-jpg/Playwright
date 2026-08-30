//Employee Management System 
let employeesName =["Rahul", "Priya", "Amit"];
console.log("Newly added Employee Names are: " + employeesName.push("Sneha"));//adding new employee Name and priting the length of the array
console.log(employeesName);
let deletedEmployee = employeesName.pop();//removing the last employee name from the array
console.log("Deleted Employee Name is: " + deletedEmployee);
console.log(employeesName);
employeesName.unshift("Manager");//adding new employee name at the beginning of the array
console.log("New employee name added to the beginning :" + employeesName[0]);
console.log(employeesName);
let removedEmployee = employeesName.shift();//removing the first employee name from the array
console.log("Removed Employee Name is: " + removedEmployee);
console.log(employeesName);

// Shopping Cart Application 
let cart=["Mobile", "Laptop", "Mouse"]; 
cart.push("Keyboard"); 
cart.reverse();
console.log(cart);
let sentence =cart.join(" | ");
console.log(sentence);

//Browser Tabs Automation  
let tabs = ["Google", "YouTube", "ChatGPT"];
tabs.pop();
console.log( tabs);
tabs.unshift("GitHub");
console.log(tabs);
tabs.reverse();
console.log(tabs);

//Food Delivery Orders
let orders=["Pizza", "Burger", "Pasta"];
orders.push("Sandwich");
orders.shift();
let sent1=orders.join(" , ");
console.log(sent1);

//Student Attendance System
let students = [ "Ankit", "Riya", "Karan"]; 
students.unshift("Neha"); 
students.pop();
let copy=[...students];
console.log("The copy of original list " +copy);
console.log("The original student list "+ students);