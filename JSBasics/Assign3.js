//Checking the response code

let responseCode=300;
if (responseCode>=100 && responseCode<=199){
    console.log("Informational");
}
else if (responseCode>=200 && responseCode<=299){
    console.log("Success");
}
else if (responseCode>=300 && responseCode<=399){
    console.log("Redirection");
}
else if (responseCode>=400 && responseCode<=499){
    console.log("Client Error");
}
else if (responseCode>=500 && responseCode<=599){
    console.log("Server Error");
}
else{
    console.log("Invalid Response Code");
}