const myString = "hello world";
const myString2= new String ("NAUMAN")
const myString3= `${myString2} ${myString}` 
console.log(myString)
document.write(myString)
document.write(myString3)
const myString4=myString.substring(-1)
console.log(myString4)
const myString5="HELLO"
const size= myString5.length
console.log (myString5)

const myString6=myString5.indexOf("Hello")
console.log(myString6)
const myString7=myString5.toLowerCase()
console.log(myString7)
const myString8=myString5.indexOf("Amir")
console.log(myString8)

const text="hello world"
const myString9=text.indexOf("Amir")
if (myString9>=-1) {
    document.write(myString8)
}
else{
    document.write("text not found")
}
console.log(myString9)
let x="5"
let z=4
if(!isNaN(x))
{

}
if (typeof (x)==="number" && typeof z==="number" && x>z){
console.log(`${x} is greater than z`)
}
else if( typeof (x)==="number" && typeof z==="number" && z>x){
console.log(`{z} is greater than x`)
}
else{
    if(typeof (x)!== "number")
    {x=parseInt(x)}
    if(typeof (z)!== "number")
    {z=parseInt(z)}
    if(x>z){
        console.log("x>z")
    }
    else{
        console.log("z>x")
    }
}

let
