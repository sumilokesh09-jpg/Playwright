var a=10;
console.log("Gloabal declration" +a);

function test1(){
 var a=20;
 console.log("Local declration" +a);

 if(true){
    var a=30;
    console.log("block declration" +a);
 }

 console.log("outside block" +a);
}
 test1();