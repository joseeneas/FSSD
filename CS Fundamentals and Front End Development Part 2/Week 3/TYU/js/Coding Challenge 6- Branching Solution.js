var price=30000,accountBalance=25000; 
 
if(price<=accountBalance) 
console.log("I can buy the phone"); 
else 
console.log("I can't buy the phone"); 
 
var creditLimit=3000; 
 
if(price<=creditLimit+accountBalance) 
console.log("I can buy the phone now"); 
else 
{ 
var leftAmount=price-accountBalance-creditLimit; 
console.log("The money required is: ",leftAmount); 
} 