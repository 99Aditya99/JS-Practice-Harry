// eg.1 of syncronus and asyncronus programing ------------------------------------------------------------

// sync-------------
// for(let i=0; i<=4000;i++){
//     console.log("value of i is : "+ i)
// }
// console.log("this line will always be printed after the termination of for loop (because its syncronus)")

// async-------------
// setTimeout(()=>{
//     for(let i=0; i<=4000;i++){
//         console.log("value of i is : "+ i)
//     }
// },300)
// console.log("this line will be printed erlier , while for loop is running in background (because its asyncronus)")

// eg.2 of AJAX (fetching data from API)-------------------------------------------------------------------------- 

// var getdata = document.getElementById("getdata")
// getdata.addEventListener("click",getDataHandler)

// function getDataHandler(){
//     console.log("getDataHandler clicked")

//     var xhr = new XMLHttpRequest()
//     // console.log(xhr)
//     xhr.open("POST","https://reqres.in/api/users",true)

//     xhr.getResponseHeader("Content-Type","application/json")
//     // xhr.setRequestHeader('Content-Type', 'application/json')

//     xhr.onload=()=>{
//         if (xhr.status==201){
//             console.log(xhr.responseText)
//         }
        
//     }
//     params=`{
//         "name": "morpheus",
//         "job": "leader"}
//         `
//     xhr.send(params)
// }


// callback function---------------------------------------------------------------------
// var students=[
//     {name:"Ramu",age:58},
//     {name:"Rahim",age:69}
// ]

// function enroleNewStudent(newstudent=0,callback){
//     setTimeout(() => {
//         console.log("i am from enroleNewStudent()")
//         students.push(newstudent)
//         callback()
//     }, 3000);
// }

// function getStudents(){
//     setTimeout(() => {
//         console.log("i am from getStudents()")
//         students.forEach((student)=>{
            
//             console.log(student.name)
//         })
            
//     }, 1000);
// }

// let newstudent={name:"Bharat",age:89}
// enroleNewStudent(newstudent,getStudents)


// promise ----------------------------------------------------------------------
// var students=[
//     {name:"Ramu",age:58},
//     {name:"Rahim",age:69}
// ]

// function enroleNewStudent(newstudent=0){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             students.push(newstudent)
//             error=false
//             if (!error){
//                 resolve()
//             }else{
//                 reject("I am from reject")
//             }
                
//         }, 3000);
//     })
// }

// function getStudents(){
//     setTimeout(() => {
//         console.log("i am from getStudents()")
//         students.forEach((student)=>{
            
//             console.log(student.name)
//         })
            
//     }, 1000);
// }


// let newstudent={name:"Bharat",age:89}
// enroleNewStudent(newstudent).then(
//     getStudents
// ).catch((rej)=>{
//     console.log(rej)
// })


// news api project (AJAX project)------------------------------------------------------------------
// 6368149cef8a4894adda80122a9a5d8d
// let accordion=document.getElementById("accordionExample")
// let xhr=new XMLHttpRequest()

// xhr.open("GET",`http://newsapi.org/v2/top-headlines?country=in&apiKey=6368149cef8a4894adda80122a9a5d8d`,true)

// xhr.onload= ()=>{
//     if(xhr.status==200){
//         let data = JSON.parse(xhr.responseText)
//         let html=""
//         Array.from(data.articles).forEach((news,index)=>{
//             html+=`
//                     <div class="card">
//                     <div class="card-header" id="headingThree">
//                         <h2 class="mb-0">
//                         <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse_${index+1}" aria-expanded="false" aria-controls="collapseThree">
//                             ${news.title}
//                         </button>
//                         </h2>
//                     </div>
//                     <div id="collapse_${index+1}" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
//                         <div class="card-body">
//                         ${news.description}
//                         </div>
//                     </div>
//                     </div>
//             `
//         })
//         accordion.innerHTML = html
//     }else{
//         console.log("sorry...res not available.")
//     }
// }

// xhr.send()


// fetch api (GET)-----------------------------------------------------------------------------------------
// let accordion=document.getElementById("accordionExample")

// window.onload = function() {
//     fetchApiEx();
//   };

// function fetchApiEx(){
//     key="6368149cef8a4894adda80122a9a5d8d"
//     url=`http://newsapi.org/v2/top-headlines?country=in&apiKey=${key}`

//     fetch(url)
//     .then((response)=>{
//         return response.json()
//     })
//     .then((data)=>{
//         let html=""
//         Array.from(data.articles).forEach((news,index)=>{
//             html+=`
//                                 <div class="card">
//                                 <div class="card-header" id="headingThree">
//                                     <h2 class="mb-0">
//                                     <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse_${index+1}" aria-expanded="false" aria-controls="collapseThree">
//                                         ${news.title}
//                                     </button>
//                                     </h2>
//                                 </div>
//                                 <div id="collapse_${index+1}" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
//                                     <div class="card-body">
//                                     ${news.description}
//                                     </div>
//                                 </div>
//                                 </div>
//                         `
//                     })
//                     accordion.innerHTML = html
//             })
        
// }


// fetch api (POST)-----------------------------------------------------------------------------------------

// function fetchApiPostEx(){
//     url="http://dummy.restapiexample.com/api/v1/create"
//     bodydata=`{"name":"test7841k","salary":"5400/-","age":"69"}`
//     params={
//         method:"post",
//         headers:{
//             "Content-Type":"application/json"
//         },
//         body:bodydata
//     }
//     fetch(url,params).then((response)=>{
//         return response.json()
//     }).then((data)=>{
//         console.log(data.data.name)
//         console.table(data.data)
//     })
// }

// fetchApiPostEx()


// async / await ---------------------------------------------------------------------------------------------------

// async function asyncAwait(){
//     console.log("inside function")
//     key="6368149cef8a4894adda80122a9a5d8d"
//     url=`http://newsapi.org/v2/top-headlines?country=in&apiKey=${key}`
//     const response = await fetch(url)
//     const data= await response.json()
//     console.log("inside function after ffetching all data")
//     return data
// }

// let a = asyncAwait()
// a.then((data)=>{
//     console.log(data)
// })

// console.log("it will be print while somthing is happening in background")
// // console.log(a)





// error handling  ----------------------------------------------------------------------

// var a = 10
// try{
//     if(a!=10){
//         console.log(a)
//     }else{
//         throw new Error("value of a cant be 10")
//     }
    
// }catch(error){
//     console.log(error.name)
//     console.log(error.message)
//     console.log(error)
// }finally{
//     console.log("it will be allways executed")
// }




// eg. Async JS Callbacks vs Promises vs Async Await---------------------------------------------------------------------------

