let x=100;
console.log(" number is :" +x);

//String Type
let fname ="Sumi"
let lname ='Lok'
const info =`I am learning new skills.
I am learning automation testing.`;
console.log("My name is" +fname);
console.log("My full name is" ,fname, lname)
console.log("My info", info);
console.log(typeof info); 

/* null */

let policyMaturityDate=null;
console.log(policyMaturityDate);
console.log (typeof policyMaturityDate );

//Undefined
let  dateofBirth;
console.log(dateofBirth);
console.log(typeof dateofBirth);

//Boolean type
let Citizen=true;
console.log(Citizen);
console.log(typeof Citizen);

//BigInit
console.log("Max number is" +Number.MAX_VALUE);
let bigInt= 1.7976931348623157e+308;
console.log(bigInt);
console.log(typeof bigInt);

let bigInts = 7976931348623157n;
console.log(bigInts);
console.log(typeof bigInts);

//Object

let user={ 
      id:1001,
      name:"Sumi",
};
console.log(user);
console.log(typeof user);

//ways to retrieve the value
console.log(user.id);



// expnad the proprty for user object
user.company ="FRM";
console.log(user);
console.log(user.company);

//Symbol - it is used to store unique properties of object. Even though Profile1 value and profile 2 value is equal, since it is symbol type, it is not equal

let profile1=Symbol("QA");
let profile2=Symbol("QA");
console.log(profile1);
console.log(profile2);
console.log(profile1===profile2);
console.log(typeof profile1);
console.log(typeof profile2);


//now add symbol for object
let Product={
    name:"iPhone",
    price:80000
}
console.log(Product);
console.log(typeof Product);

let id=Symbol("pid");

//Now add more property to Product using symbol type
Product[id]=1234;
console.log(Product);







