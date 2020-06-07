// alert("connected.....")

// let fruits=["apple", "banana" , "papaya","orange"]


// // iterator is a protocol
// // next()
// //     value 
// //     done      

// function arrIterator (arr){
    
//     let element=0
//     return {
//         next:function(){
//             if(element<arr.length){
//                 return {
//                     value:arr[element++],
//                     done:false
//                 }
//             }else{
//                 return{
//                     done:true
//                 }
//             }
//         }
//     }
// }

// let result=arrIterator(fruits)
// console.log(result)
// console.log(result.next().value)
// console.log(result.next())
// console.log(result.next())
// console.log(result.next())
// console.log(result.next())


// generator ------------------------------------------------------------------------------------------------

// its followes the iterator protocal internally 

// function* numGenerator(){
//     let i=0
//     while(true){
//         yield i++
//     }
// }
// let result = numGenerator()

// console.log(result.next().value)
// console.log(result.next().value)
// console.log(result.next().value)


