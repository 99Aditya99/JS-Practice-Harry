var submitBtn = document.querySelector("form")
submitBtn.addEventListener("submit",handleSubmit)

// remove item 
var itemList=document.querySelector("ul")

// handling the delete 
itemList.addEventListener("click",handleDelete)


function handleSubmit(e){
    e.preventDefault()
    var newItem=document.querySelector("#newItem").value

    // creating a li 
    var newLi = document.createElement("li")
    newLi.className="list-group-item d-flex justify-content-between align-items-center"
    newLi.appendChild(document.createTextNode(newItem))

    // creating delete btn 
    var delBtn = document.createElement("button")
    delBtn.className="badge btn-bg-color badge-pill delete_btn"
    delBtn.appendChild(document.createTextNode("X"))

    // adding delete btn inside li 
    newLi.appendChild(delBtn)

    // displaying the li inside ul 
    
    itemList.appendChild(newLi)
    document.querySelector("form").reset()

    
}





function handleDelete(e){
    e.preventDefault()
    if (e.target.className.search("delete") !== -1){
        if(confirm("Are u sure?")){
            var li = e.target.parentElement
            itemList.removeChild(li)
        }

    }
}



// for searching
var searchbox=document.getElementById("searchbox")
searchbox.addEventListener("keyup", handleSearch)

function handleSearch(e){
    var searchingValue=e.target.value.toLowerCase()
    
    // get all li's
    var lists=itemList.getElementsByTagName("li")
    Array.from(lists).forEach((item)=>{
        var itemName= item.firstChild.textContent
        if (itemName.toLowerCase().indexOf(searchingValue) !=-1){
            item.classList.add("d-flex")
            item.style.display="block"
        }else{
            item.classList.remove("d-flex")
            item.style.display="none"
        }
    })
  
       
        
        
    }

    
