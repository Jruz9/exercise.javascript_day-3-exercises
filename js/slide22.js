var w ="kladjfkla"
var n= "123"
var nw ="3dsd34"
var number;
var tf=true;

// returns a boolean that verifys if a string has a number in it, true= all nums false=letter and letters+nums
function isNumber(x)
{
    var arr=x.split("");
 //splits in array
for(var i=0;i<arr.length;i++)
    {
        number=arr[i]
        if(testArray(number)==false)
        {
            tf=false
            return tf;
            
        }
    }
    return tf 
}
// test an array of the string and if there is a single letter is returns a false
function testArray(a)
{
    var i=true;
    if(i==/\d/.test(a)) //test for whole number using regex
    {
        return i;
    }
    else{
        return false
    }
}


/// output for the result of the string, should really be a function that is called though.
if(isNumber(n)==true)
{
    console.log("True, this is a real number\n\t");
    var realNum=parseInt(n);
    
    console.log(realNum);
}
else{
    console.log("False, this is a fake, A PHONNIE");
}
