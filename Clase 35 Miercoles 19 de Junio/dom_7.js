//* ADD

let button = document.querySelector("button");
let list = document.querySelector(".list");

button.addEventListener("click")

function add_postre(text) {
    text= prompt('Que postre te gusta mas');

    let list_item = document.createElement("li");
    list_item.classList.add("list_item");
    list_item.innerHTML = text;
    list.appendChild.list_item;
}

//* REPLACE 

let list_items = document.querySelectorAll("list_item");
list_items = Array.from(list_item);
let item;

list.addEventListener("click" , replace_dessert);

//* VARIABLES

let button = document.querySelector("button");
let input = document.querySelector("input_text")

//* LISTENERS

function erase_desert (e) {
    let list_items = document.querySelector
}