//console.log(document);

// console.log(document.doctype);
// console.log(document.URL);
// console.log(document.title);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[9]);

//  console.log(document.forms);
//  console.log(document.links);
//  console.log(document.images);

// let header_title = document.getElementById("header-title");
//  console.log(header_title);
// header_title.textContent = "<h2>Hello</h2>";
// header_title.innerText = "<h2>Hello</h2>";
// header_title.innerHTML = "<h2>Hello</h2>";


// let headerTitle = document.getElementById("header-title");
//  headerTitle.style.borderBottom= "solid 5px black";
// headerTitle.style.backgroundColor = "red";


// let items = document.getElementsByClassName("list-group-item");
// console.log(items);
// items[2].textContent = "ghjakl";
// items[3].style.backgroundColor = "blue";
// items[1].style.fontWeight = "bold";
// /
// for(let i = 0;i<items.length;i++)
// {
//     items[i].style.backgroundColor = "pink";
// }

// let items = document.getElementsByTagName("li");
// console.log(items);
// items[2].textContent = "ghjakl";
// items[3].style.backgroundColor = "blue";
// items[1].style.fontWeight = "bold";

// for(let i = 0;i<items.length;i++)
// {
//     items[i].style.backgroundColor = "pink";
// }


//QUERY SELECTOR 

// let header  = document.querySelector("input");
// header.style.borderBottom = "solid 4px gray";
// header.value = "Enter items";


// let submit  = document.querySelector('input[type = "submit"]');
// submit.value = "items entered";

// let item = document.querySelector(".list-group-item")
// item.style.color = "blue";

// let lastitem = document.querySelector(".list-group-item:last-child")
// lastitem.style.color = "green";

// let nthitem = document.querySelector(".list-group-item:nth-child(2)")
// nthitem.style.color = "red";


// let titles = document.querySelectorAll(".title");
// console.log(titles);
// titles[0].style.backgroundColor  ="purple";

// let even = document.querySelectorAll("li:nth-child(even)");
// console.log(even);

// for(let i = 0;i<even.length;i++)
//     even[i].style.backgroundColor = "gray"; 

//parentNode
// let itemlist = document.querySelector("#items");
// console.log(itemlist.parentNode);  

// itemlist.parentNode.style.backgroundColor = "green";
// console.log(itemlist.parentNode.parentNode.parentNode);

// //ParentElement
// let itemlist = document.querySelector("#items");
// console.log(itemlist.parentElement);  

// itemlist.parentNode.style.backgroundColor = "green";
// console.log(itemlist.parentElement.parentElement.parentElement);


// let itemlist = document.querySelector("#items");
// console.log(itemlist.childElementCount);

// itemlist.firstElementChild.style.backgroundColor = "green";
// itemlist.lastElementChild.style.backgroundColor = "green";

// let itemlist = document.querySelector("#items");
// console.log(itemlist.previousElementSibling);


// let newdiv = document.createElement("div"); //create a div
// newdiv.className = "Hello";     //adding class
// newdiv.id = "hello1";           //adding id 

// newdiv.setAttribute("name","Hello Div");   //add attribute
// let content = document.createTextNode("HELLO WORLD");

// newdiv.appendChild(content);  //add content to div


// let container1 = document.querySelector("header .col-md-6");  // konsi class me daalna hai item
// let h1 = document.querySelector("header h1");   // konse element/class ke pehle daalna hai element

// container1.insertBefore(newdiv, h1);    //inserting in container1 just before h1 of container


// console.log(newdiv);


//  var button = document.querySelector("#button");
//  button.addEventListener('click',clicked)

// function clicked(e){  //e  = event
    // console.log(e.target);   // tells about the button node
    // console.log(e.target.id); // tells node id
    // console.log(e.target.className);  // tells classws in node
    // console.log(e.target.classList);  // gives all classes in node

    // console.log(e.type);  // type in eventListener
    // // TLBR = top left bottom right
    // console.log(e.clientX); //position of mouse on x axis from TLBR
    // console.log(e.offsetY);//position of mouse on x axis from #button


    // console.log(e.altKey);
    // console.log(e.ctrlKey);   //if these keys are pressed or not 
    // console.log(e.shiftKey);
    
// } 

//let button = document.querySelector("button");
// button.addEventListener("click", runevent);

// box.addEventListener("mouseenter",runevent);
// box.addEventListener("mouseleave",runevent);
// box.addEventListener("mouseover",runevent);
// box.addEventListener("mouseout",runevent);

// let box = document.querySelector("#box");
// box.addEventListener("mousemove", runevent);
// function runevent(e){
//     console.log("EVENT TYPE: " + e.type);
//     document.body.style.backgroundColor = "rgb("+e.offsetX+", "+e.offsetX + e.offsetY+", "+e.offsetY+")";
// }

let iteminput = document.querySelector('input[type = "text"]');
let form = document.querySelector("form");
//iteminput.addEventListener("keydown", runevent);

// iteminput.addEventListener("focus", runevent);
// iteminput.addEventListener("blur", runevent);

iteminput.addEventListener("cut", runevent);
// iteminput.addEventListener("paste", runevent);

function runevent(e){
    console.log("EVENT TYPE: " + e.type);
    //document.body.style.display = "none";
    // console.log(e.target.value);
    // let output = document.querySelector(".output");
    // output.innerHTML = "<h2>"+e.target.value+"</h2>";

}