var x=prompt("Enter your first number");
var y=prompt("Enter your second number");
var z=prompt("Enter your third number");


function smaller(x,y)
{
if(x<y)
{
    return x;
}

else{
    return y;
}

}
function smaller3(x,y,z){
var n=smaller(x,y)

    if(n<z)
{
    return n;
}   
else{
    return z
}
}

console.log(smaller(x,y));
console.log(smaller3(x,y,z));