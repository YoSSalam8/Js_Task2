var header=document.querySelector(".Task h2");
var paragraph=document.querySelector(".Task p");
var button1=document.querySelector(".button1");
var button2=document.querySelector(".button2");




function biggerFont(){
    header.setAttribute("style","font-size:40px");
    paragraph.setAttribute("style","font-size:40px");
}


function smallerFont(){
    header.setAttribute("style","font-size:10px");
    paragraph.setAttribute("style","font-size:10px");

}

button1.onclick=biggerFont;
button2.onclick=smallerFont;