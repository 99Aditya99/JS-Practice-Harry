// normal for loop to iterate an array-------------------
// let peoples =["Ramesh","Himesh","Ratan","Prakash","Ali"]

// for(let i=0 ;i<peoples.length;i++){
//     console.log(peoples[i])
// }



// normal for loop to iterate an object-------------------
// const student={
//     name:"Rahim",
//     age:56,
//     city:"kolkata"
// }
// for(let index=0 ;index < Object.keys(student).length; index++){
//     let result = student[Object.keys(student)[index]]
//     console.log(result)
// }

// for-in loop to iterate an object-------------------
// const student={
//     name:"Rahim",
//     age:56,
//     city:"kolkata"
// }
// for (let key in student){
//     console.log(student[key])
// }


// for-in loop to iterate an array-------------------
// let peoples =["Ramesh","Himesh","Ratan","Prakash","Ali"]
// for(let index in peoples){
//     console.log(peoples[index])
// }

// for-of loop to iterate an array-------------------
// for(let element of peoples){
//     console.log(element)
// }


// for-of loop is not applicable on object because its not iterable-------------------
// const student={
//     name:"Rahim",
//     age:56,
//     city:"kolkata"
// }
// for(let item of student){
//     console.log(item)
// }

// o/p--- Uncaught TypeError: student is not iterable


// map--------------------------------------------------------
let mymap=new Map()

// defining the keys 
// key can be string , array,object ,function 
let key1="allah",key2=[5,6],key3=()=>{},key4={}

// setting the keys into map object with values
mymap.set(key1,"this is string key")
mymap.set(key2,"this is array key")
mymap.set(key3,"this is function key")
mymap.set(key4,"this is object key")

// // getting the value 
// console.log(mymap)

// // getting the size 
// console.log(mymap.size)

// // getting the value by keys
// console.log(mymap.get(key1)) 
// console.log(mymap.get(key2)) 
// console.log(mymap.get(key3)) 
// console.log(mymap.get(key4)) 

// // getting key and value using for-of loop     
// for(let [key,value] of mymap)
// {
//     console.log(`KEY: ${key} VALUE: ${value}`)
// }

// // getting only key using for-of loop 
// for(let key of mymap.keys())
// {
//     console.log(`KEY: ${key}`)
// }

// // getting only value using for-of loop 
// for(let value of mymap.values())
// {
//     console.log(`VALUE: ${value}`)
// }

// // getting value using forEach loop it returns value first , key second
// mymap.forEach((value,key)=>{
//     console.log(`KEY: ${key} VALUE: ${value}`)
// })

// // converting map to array and accessing key & value
// Array.from(mymap).forEach((key,value)=>{
//     console.log(`KEY: ${key} VALUE: ${value}`)
//     console.log(item)
// })


// destructuring   ---------------------------------------------------------- ----

let arr=[5,8,9,6,8,9,78]

// let [a,b,c]=arr
// console.log(a)

// // spread operator   
// let [a,b,...c]=arr
// console.log(c)

let obj={
    name:"ali",
    age:56,
    city:"bangalore",
    pin:758485
}

// object destructuring  
// let {name,age,city}=obj
// console.log(city)

let {name, ...remaining}=obj
console.log(remaining)


