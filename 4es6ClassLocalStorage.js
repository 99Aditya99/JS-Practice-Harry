// alert("connected")
document.addEventListener("DOMContentLoaded",main );

function main(){
        // get books from local storage 
        let BOOKS=JSON.parse(localStorage.getItem("BOOKS"))

        // display the existing books 
        let display= new Display()
        display.displayBooksFromLS(BOOKS)

    
}

var form = document.querySelector("#addbookform")
form.addEventListener("submit" , addBookHandler)

function addBookHandler(e){
    e.preventDefault()
    // get the value from dom into local variable
    let bookname=document.getElementById("bookname").value
    let authorname=document.getElementById("authorname").value
    let genres=""
    let sciencefiction=document.getElementById("sciencefiction")
    let technology=document.getElementById("technology")
    let etc=document.getElementById("etc")

    // populating the genres using if-else 
    if (sciencefiction.checked){
        genres=sciencefiction.value
       
    }else if (technology.checked) {
        genres=technology.value
    }else {
        genres=etc.value
    }

    // instansiating the class object 
    let book = new Book(bookname,authorname,genres)
    let display= new Display()

    // validate user given value using a function defined into Book class which return T/F
    if (book.validateUserInput(book)){
        let myUpdatedLS=display.addBookToLS(book)
        display.displayBooksFromLS(myUpdatedLS)

    }else{
        console.log("given data is not valid")
    }

    
    
}

class Book{
    constructor(name,author,genre){
        this.name=name
        this.author=author
        this.genre=genre
    }
    validateUserInput(book){
        if (book.name.length<3 || book.author.length<3){
            return false
        }else{
            return true
        }
    }
}

class Display{
    

    displayBooksFromLS(BOOKS){
        let displaybooksinDOM=document.getElementById("displaybooksinDOM")

        let html=""
        BOOKS.forEach((bookk,index) => {
             html += `<tr>
                        <th scope="row">${index+1}</th>
                        <td>${bookk.name}</td>
                        <td>${bookk.author}</td>
                        <td>${bookk.genre}</td>
                    </tr>
                    `
                    
        });
        displaybooksinDOM.innerHTML =html
    }


    addBookToLS(book){
        let oldItems = JSON.parse(localStorage.getItem('BOOKS')) || [];

        let newItem = 
        {
         'name': book.name,
         'author': book.author,
         'genre': book.genre
        };
        
         oldItems.push(newItem);
        
         localStorage.setItem('BOOKS', JSON.stringify(oldItems));

         return JSON.parse(localStorage.getItem("BOOKS"))
    }


}


