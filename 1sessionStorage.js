// alert("connected")
"use strict"

document.addEventListener("DOMContentLoaded", function() {
    displaySessionValue()
  });

 
var form= document.querySelector("form")
form.addEventListener("submit",addFruit)

function addFruit(e){
    e.preventDefault()
    let fruitName=e.target[0].value
    var fruit=document.querySelector("#fruit")
    var li=document.createElement("li")
    li.innerText=fruitName
    fruit.appendChild(li)

    addToSession(fruitName)
    
    
    
}



function addToSession(name){
    let key=sessionKeyy()
    sessionStorage.setItem(key,name)
    // console.log("addToSession invoked")
}

const sessionKeyy = function () {
    // Math.random should be unique because of its seeding algorithm.
    // Convert it to base 36 (numbers + letters), and grab the first 9 characters
    // after the decimal.
    return '_' + Math.random().toString(36).substr(2, 9);
  };


  function displaySessionValue(){
    let valuee= Object.keys(sessionStorage).map((KEYY)=>{
        return sessionStorage.getItem(KEYY)
    })
    
    for(let i=1;i<=valuee.length-1; i++){
        // console.log(valuee[i])
        let fruit=document.querySelector("#fruit")
        let li=document.createElement("li")
        li.innerText=valuee[i]
        fruit.appendChild(li)
    }
    
}


// var arr=[5,8,"name",56]
// window.sessionStorage.setItem("myarr",JSON.stringify(arr))
// let data=sessionStorage.getItem(Object.keys(sessionStorage)[1])

// console.log(typeof(data))
// let data2=JSON.parse(data)
// console.log(data2)
// console.log(typeof(data2))




