// Leap year calculator

var year=prompt("Enter year: ")
var truth=true;

while (truth!=/^-{0,1}\d+$/.test(year)){
    var year=prompt("Re-enter year: ")
}

if(year%4!=0){
    console.log("it is a common year")
}
else if (year%100!=0)
{
    console.log("it is a leap year")
}
else if(year%400!=0)
{
    console.log("it is a common year")
}
else{
    console.log("it is a leap year")
}