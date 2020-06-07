// UI controll class 
class UI{
   static displayBooks(){
       const store_books=[
           {
               title:"Adventure book",
               books_name:"The king of khambat",
               author:"R. K Balakrishna"

           },
           {
               title:"Thrilar book",
               books_name:"The golf mystry",
               author:"J P Morgan"

           }
       ]
       const getbook = store_books
       
       getbook.forEach((book)=>{
            return UI.createTable(book)
       })

   } 
   static createTable(book){
       var tablebody= document.querySelector("#tablebody")
       var tr = document.createElement("tr")
        tr.innerHTML=`
            <td scope="row"><a href="#"><span class="badge badge-primary">X</span></a></td>
            <td>${book.title}</td>
            <td>${book.books_name}</td>
            <td>${book.author}</td>
        `;
        tablebody.appendChild(tr)
   }
}

document.addEventListener("DOMContentLoaded", UI.displayBooks)