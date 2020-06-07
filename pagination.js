window.onload=()=>{
    // makeList()
    numberOfPages = getNumberOfPages();
    loadList()
}

// global JavaScript variables
var list = [
	{
		color: "red",
		value: "#f00"
	},
	{
		color: "green",
		value: "#0f0"
	},
	{
		color: "blue",
		value: "#00f"
	},
	{
		color: "cyan",
		value: "#0ff"
	},
	{
		color: "magenta",
		value: "#f0f"
	},
	{
		color: "yellow",
		value: "#ff0"
	},
	{
		color: "black",
		value: "#000"
	},
	{
		color: "yellow",
		value: "#ff0"
	},
	{
		color: "black",
		value: "#000"
	},
	{
		color: "yellow",
		value: "#ff0"
	},
	{
		color: "black",
		value: "#000"
	},
	{
		color: "yellow",
		value: "#ff0"
	},
	{
		color: "black",
		value: "#000"
	}
]
var pageList = []
var currentPage = 1;
var numberPerPage = 5;
var numberOfPages = 1;   // calculates the total number of pages

// function makeList() {
//     for (x = 0; x < 200; x++)
//         list.push(x);
// }


function getNumberOfPages() {
    return Math.ceil(list.length / numberPerPage);
}


function loadList() {
    var begin = ((currentPage - 1) * numberPerPage);
    var end = begin + numberPerPage;

    pageList = list.slice(begin, end);
    console.log(pageList)
    // drawList();    // draws out our data
    // check();         // determines the states of the pagination buttons
}

function drawList() {
    document.getElementById("list").innerHTML = "";
    
    for (r = 0; r < pageList.length; r++) {
        document.getElementById("list").innerHTML += pageList[r] + "  ";
    }
}
// function check() {
//     document.getElementById("next").disabled = currentPage == numberOfPages ? true : false;
//     document.getElementById("previous").disabled = currentPage == 1 ? true : false;
//     document.getElementById("first").disabled = currentPage == 1 ? true : false;
//     document.getElementById("last").disabled = currentPage == numberOfPages ? true : false;
// }

// function nextPage() {
//     currentPage += 1;
//     loadList();
// }

// function previousPage() {
//     currentPage -= 1;
//     loadList();
// }

// console.log(getNumberOfPages())



