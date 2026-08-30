//Checking the temperature and suggesting clothes accordingly

let temp= 19;
if (temp>=35){
    console.log("Wear light clothes and stay hydrated");
}
else if (temp>=20 && temp<35){
    console.log("Wear normal clothes");
}
else if (temp>=10 && temp<=19){
    console.log("Wear warm clothes");
}
else{
    console.log("Wear heavy clothes and stay warm");
}