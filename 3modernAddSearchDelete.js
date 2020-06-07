// alert("hello")
document.addEventListener("DOMContentLoaded",displayNoteFromLS );




var addNoteForm=document.querySelector("#addNoteForm")
addNoteForm.addEventListener("submit",addNote)




function addNote(e){
    e.preventDefault()
    let notes=localStorage.getItem("NOTES")
    if (notes == null){
        notesCollection=[]
       
    }else{
        
        notesCollection=JSON.parse(notes)
    }
    let UserNoteTitle=e.target[0].value
    let UserNoteContent=e.target[1].value
    notesCollection.unshift({title:UserNoteTitle,notebody:UserNoteContent})
    document.querySelector("#mytitle").value=""
    document.querySelector("#mytextarea").value=""
    localStorage.setItem("NOTES",JSON.stringify(notesCollection))
    displayNoteFromLS()
}


function displayNoteFromLS(){
    let NOTES=JSON.parse(localStorage.getItem("NOTES"))
    
    // for(let i =0 ; i<=NOTES.length-1;i++){
       
    // // }
    let html=""
    NOTES.forEach((note,index)=>{
        
        html +=`
            <div class="note_card col-lg-4 col-md-6 m-2">
            <h3 id="cardtitle">${note.title}</h3>
            <div class="card">
                <div class="card-body">
                    <h5  class="card-title">${note.notebody}</h4>
                    <button id="${index-1}" onClick="deleteItem(this.id)" type="submit" class="btn btn-primary">delete note</button>
                </div>
            </div>
            
            </div>
        `
        
    })
    displayNotesDiv.innerHTML=html
    
}

function deleteItem(index){
    let notes=localStorage.getItem("NOTES")
    if (notes == null){
        notesCollection=[]
       
    }else{
        
        notesCollection=JSON.parse(notes)
    }
    notesCollection.splice(index,1)
    localStorage.setItem("NOTES",JSON.stringify(notesCollection))
    displayNoteFromLS()
}


let searchbox=document.querySelector("#searchbox")
searchbox.addEventListener("input",searchNote)

function searchNote(e){
    let searchingCommand=e.target.value.toLowerCase()
    let note_card=document.querySelectorAll(".note_card")
    if (note_card != null){
        Array.from(note_card).forEach((element)=>{
            let cardtitle=element.querySelector("#cardtitle").innerText
            if(cardtitle.includes(searchingCommand)){
                element.style.display="block"
            }else{
                element.style.display="none"
            }
            
        })
        
    }else{
        console.log("element")
    }
    
}