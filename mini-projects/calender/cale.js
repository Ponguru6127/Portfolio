function fun()
{
    let timezone=new Date()

let day=timezone.getDay()
//console.log(day)
switch(day)
{
    case 0:day='SUNDAY'
        break
    case 1:day='MONDAY'
           break
    case 2:day='TUESDAY'
        break
    case 3:day='WEDNESDAY'
        break
    case 4:day='THURSDAY'
        break
    case 5:day='FRIDAY'
        break
    case 6:day='SATURDAY'
    break
}
document.getElementById("b1").innerHTML=day


let date=timezone.getDate()
let month=timezone.getMonth()
switch(month)
{
    case 0:month='Jan'
        break
    case 1:month='Feb'
           break
    case 2:month='Mar'
        break
    case 3:month='Apr'
        break
    case 4:month='May'
        break
    case 5:month='June'
        break
    case 6:month='July'
    break
}
let year=timezone.getFullYear()

let x=date+"-"+month+"-"+year
document.getElementById("b2").innerHTML=x

let hours=timezone.getHours()
let minutes=timezone.getMinutes()
let seconds=timezone.getSeconds()
let ampm=""

if(hours>=12)
{
    ampm="PM"
}
else
{
    ampm="AM"
}


let z=hours+":"+minutes+":"+seconds+" "+ampm
document.getElementById("b3").innerHTML=z


setTimeout(function(){fun(),1000})


if(day=='SATURDAY')
{

}
else if(day=='SUNDAY')
{
}
}

