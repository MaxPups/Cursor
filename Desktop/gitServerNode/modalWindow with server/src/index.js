document.querySelector("#hello").style.color="#006363";


function modal_open (){
console.log("open");
document.querySelector(".layout").style = "display: flex";
document.body.style = "overflow: hidden";

}

function modal_close(){
console.log("close");
document.querySelector(".layout").style = "display: none";
document.body.style ="background: #33CCCC";
document.body.style = "overflow: auto";
}

// скрипт по раскрытию и закрытию списка ul>li
var isListOpen = true;

function open_list() {
    if(isListOpen){
document.querySelector("#list").style = "display: block";
isListOpen = !isListOpen;   
console.log(isListOpen);
}
else{
    document.querySelector("#list").style = "display: none";
isListOpen = !isListOpen;  
console.log(isListOpen);

}
};    