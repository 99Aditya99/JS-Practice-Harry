// let reg=/Aditya/
// reg=/Aditya/g    //global
// reg=/Aditya/i   //case insensetive

// // console.log(typeof(reg))

// // exec() -- this function wil return array for match and null for no match 
// let sentence="this is Aditya , best guy all Aditya over the world"
// let result=reg.exec(sentence)
// console.log(result)

// //test() --it will return true/false
// let result2=reg.test(sentence)
// console.log(result2)

// //match() --it will return array if match else return null
// // let result3=reg.match(sentence) //syntax error
// let result3 = sentence.match(reg) 
// console.log(result3)

// //search() --it will return index of first match else -1 
// let result4 = sentence.search(reg) 
// console.log(result4)

// //replace() --it will replace the matching regex with given string for 1st match ans return the string
// //if global flag is not set
// let result5 = sentence.replace(reg,"Rahaman") 
// console.log(result5)


//--------------------------------------------------------------------
// lets drive into some metacharacter symbols -------------------------------------------
//-------------------------------------------------------

// // let sentence="this is adi5ya8, the best g*uy"
// let sentence="this is aditya , the best g*uy"
// let regex=/aditya/ 
// regex=/^aditya/  //^ means is the string starts with  [false]
// regex=/^thi/  //^ means is the string starts with     [true]
// regex=/aditya$/  //$ means is the string ends with    [false]
// regex=/uy$/  //$ means is the string ends with        [true]
// regex=/a.itya/  //. means only one charecter(any) in the entire sentence   [true]
// regex=/a.tya/  //. means only one charecter(any) in the entire sentence   [false]
// regex=/a*itya/  //* means 0 or more charecters in the entire sentence   [true]
// regex=/a+itya/  //+ means 1 or more charecters in the entire sentence   [true]
// regex=/am?itya/  //? after a charecter means its optional [false]
// regex=/am?ditya/  //? after a charecter means its optional [true]
// regex=/g\*uy/     // \ means it will match the exact char after backslash [true]

// regex=/a[a-z]itya/  //[] means charecter set , if any "one" char is present will return true [true]
// regex=/a[dmc]itya/  //[dmc] means  if any "one" char is present will return true [true]
// regex=/a[mbn]itya/  //[mbn] means , if any "one" char is present will return true [true]
// regex=/a[^ghs]itya/  //[^ghs] means "not g,h,s", if any "one" char is present except "ghs" will return true [true]
// regex=/a[a-zA-Z]i[t0-9]ya[0-9]/

// // Quantifiers
// regex=/adi{2}tya/  // {2} means character "i" need to be present exactly 2 times  
// regex=/adi{0,2}tya/  // {0,2} means character "i" can be present 0 to 2 times

// //grouping
// regex=/ad(img){1}tya/  // (img){1} means "img" need to be present as a hole for exactly 1 time 
// regex=/ad(img){1}ty([0-9]a){2}/  // (img){1} means "img" need to be present as a hole for exactly 1 time 
//                                 //and ([0-9]a){2} means "0-9 with 'a'" for 2 times or more because its the "END" of the searching str.


// regex=/a\witya/  // \w - means a single word charecter _ or alphabet or number
// regex=/a\w+itya/  // \w - means one or more word charecters _ or alphabet or number
// regex=/a\Witya/  // \W - means a single non-word charecter _ or alphabet or number

// regex=/a\ditya/  // \d - means a single digit
// regex=/a\Ditya/  // \D - means a single non-digit

// regex=/a\sitya/  // \s - means a single whitespace
// regex=/a\Sitya/  // \s - means a single non-whitespace

// regex=/aditya\b/  // \b - means a word boundary

// // assertions 
// regex=/a(?=d)/  // (?=d) - means if "d" comes after "a" , return true else false (we want "d" after "a")
// regex=/a(?!d)/  // (?!d) - means if "d" comes after "a" , return false else true(we dont want "d" after "a")


// // let result=regex.exec(sentence)
// // console.log(result)

// if (regex.test(sentence)){
//     console.log(`the searching expression ${regex.source} present in the sentence: ${sentence}`)
// }else{
//     console.log(`string dosnt match with the regex- ${regex.source}`)
// }




// project -----------------------------------------------------------------



// js to display range value into input box. 
var mySlider = document.getElementById("mySlider");
var displayRange = document.getElementById("displayRange");

mySlider.addEventListener("input",handleRange)
function handleRange(){
    displayRange.innerHTML=`${mySlider.value}%`
    console.log()
}

// name---- 
// only be alphabate and not morethan 3 space

// password----
// Passwords must be at least 6 characters not morethan 12
// shouldnot starts with special charecter and no.
// and it should be atleast the combination of two digits with one special char

// email -----

//text area------ 
// text area cant carry a phone no 


// validate user input 
var myname = document.getElementById("myname")
var mypwd = document.getElementById("mypwd")
var myemail = document.getElementById("myemail")
var mycontact = document.getElementById("mycontact")
var textarea1 = document.getElementById("textarea1")
var flag=undefined

myname.addEventListener("blur",()=>{
    let regex=/^([A-Z]{1}([a-z]{1,15})?\s{1}([A-Z]{1}([a-z]{1,15})?\s){0,2})/
    let str =myname.value
    if(regex.test(str)){
        console.log(myname.value)
        myname.classList.remove("is-invalid")
        flag = true
    }else{
        console.log("wrong!!")
        myname.classList.add("is-invalid")
        flag = false
    }
    
})

mypwd.addEventListener("blur",()=>{
    let regex=/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?!.+[\s]).{8,20}$/
    let str = mypwd.value
    if(regex.test(str)){
        console.log(mypwd.value)
        mypwd.classList.remove("is-invalid")
        flag = true
    }else{
        console.log("wrong!!")
        mypwd.classList.add("is-invalid")
        flag = false
    }
})


myemail.addEventListener("blur",()=>{
    let regex=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    let str =myemail.value
    if(regex.test(str)){
        console.log(myemail.value)
        myemail.classList.remove("is-invalid")
        flag = true
    }else{
        console.log("wrong!!")
        myemail.classList.add("is-invalid")
        flag = false
    }
})


mycontact.addEventListener("blur",()=>{
    let regex=/^(?!0)\d{10}$/
    let str =mycontact.value
    if(regex.test(str)){
        console.log(mycontact.value)
        mycontact.classList.remove("is-invalid")
        flag = true
    }else{
        console.log("wrong!!")
        mycontact.classList.add("is-invalid")
        flag = false

    }
})

textarea1.addEventListener("blur",()=>{
    let regex=/^[a-zA-Z\s]+$/
    let str =textarea1.value
    if(regex.test(str)){
        console.log(textarea1.value)
        textarea1.classList.remove("is-invalid")
        flag = true
    }else{
        console.log("wrong!!")
        textarea1.classList.add("is-invalid")
        flag = false
    }
})


// form submition --------- 

let form =document.querySelector("form")
form.addEventListener("submit",handleformSubmit)

function handleformSubmit(e){
    e.preventDefault()
    let alertMsg=document.getElementById("alertMsg")
    if (flag){
        alertMsg.classList.remove(`alert-danger`,`show`)
        alertMsg.classList.add(`alert-success`,`show`)

      
    }else{
        alertMsg.classList.remove(`alert-success`,`show`)
        alertMsg.classList.add(`alert-danger`,`show`)
    }
}