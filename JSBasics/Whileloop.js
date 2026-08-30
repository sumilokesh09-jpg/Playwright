// To print sum of first n natural numbers using while loop
let n=1234;
let sum=0;
let Rem;
while(n>0){
    Rem=n%10;
    n=Math.floor(n/10);
    sum=sum+Rem;
  //  console.log(sum);
}
console.log(sum);


//To reverse a number using while loop
let num1=12345;
let rev=0;
let rem1;
while(num1>0){
    rem1=num1%10;
    num1=Math.floor(num1/10);
    rev=rev*10+rem1;
    console.log(rev);
}
console.log("The reverse of the number is: " +rev);

 //To cehck if number is palindrome or not using while loop
    let num2=12324;
    let rev1=0;
    let rem2;
    let temp=num2;
         while(num2>0)
            {
            rem2=num2%10;
            num2=Math.floor(num2/10);
            rev1=rev1*10+rem2;
            console.log(rev1);
            }
            if(temp==rev1){
                console.log("The number is palindrome");
            }
            else{
                console.log("The number is not palindrome");
            }