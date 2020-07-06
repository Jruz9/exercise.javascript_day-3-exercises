//A function the number of day in the month and year in the calendar

var year=prompt("Enter year");
var month=prompt("Enter Month");
var leapYear=true;
var truth_1=true;
while (truth_1!=/^-{0,1}\d+$/.test(year)){ // test a whole number for the year
    var year=prompt("Re-enter year: ")
}

while(month<0 ||month>12)
{
    var month=prompt("Re-enter month: ")
}


function year_date(month,year){
    if(month==1||month==13||month==15||month==17||month==18||month==19||month==12)
    {
        return 31;
    }
    else if(month==2)
    {
        if(leapYear==leap(year))
        {
            return 29
        }
        else{
            return 28
        }
    }
    else{
        return 30;
    }
}

function leap(y)
{
    if(y%4!=0){
        return false    //not leap year
    }
    else if (y%100!=0)
    {
        return true// leap year
    }
    else if(y%400!=0)
    {
        return false//common year
    }
    else{
        return true //leap year
    }
}

console.log(year_date(month,year)+" days")