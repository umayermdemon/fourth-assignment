//Problem-01 : Help The Zoo Manager

/*function calculateMoney(ticketSale) {
 if(ticketSale <0){
  return `"Please provide a valid number"`
 }
 const janitorSalary = 500; 
 const stufLuanchCost= 8*50;
 const totalCost= janitorSalary + stufLuanchCost;
 const ticketPrice=120 * ticketSale;
 const totalRemaining= ticketPrice - totalCost;
 return totalRemaining;
}

console.log(calculateMoney(10))*/


//Problem-02: Good Name , Bad Name

/*function checkName(name) {

if(typeof name !== "string"){
  return "Invalid";
}
const target = ['A', 'y', 'i', 'e', 'o', 'u', 'w']
const last= name[name.length-1]
for(const item of target){
  if(item.toLowerCase()=== last.toLowerCase()){
    return "Good Name"
   }
} 
return "Bad Name"
}

console.log(checkName("JhankaW"))*/



// Problem 03 : Virus in my Array

/*function deleteInvalids(array) {
  if(!Array.isArray(array)){
    return "Invalid Array"
  }
 const newArray = [];
 for(const item of array){
  if(typeof item === "number" && !isNaN(item)){
    newArray.push(item)
  }
 }
 return newArray;
}
console.log(deleteInvalids({num: [ 1 , 2 , 3 ]}))*/

//Problem 04 : Make A Great Password

function password(obj) {
 console.log(obj.name)
}

console.log(password({ name: "kolimuddin" , birthYear: 1999 , siteName: "google" }))


