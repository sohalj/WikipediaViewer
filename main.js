


function display(r){

$("#div1").empty();
  
  for(i = 0; i < 10; i++){

    var d = document.createElement("div");
    d.setAttribute("class", "col-xs-12 textbox");
    var h = document.createElement("h1");
    var tittle = document.createTextNode(r.query.pages[i].title);
    h.appendChild(tittle);
    var p = document.createElement("p");
    var s = document.createTextNode(r.query.pages[i].extract);
    p.appendChild(s);
    d.appendChild(h);
    d.appendChild(p);
    var box = document.getElementById("div1");
    box.appendChild(d);
  }
    
}




function search(){

  var q = document.getElementById("query").value  
  if(q != ""){
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function (){
      if(this.readyState == 4 && this.status == 200){
        var r = JSON.parse(this.responseText);
        console.log(r);
        //console.log(r.query.search[0].snippet);
        display(r);
      }
    };
    var q = document.getElementById("query").value    
    xhr.open("GET", "https://en.wikipedia.org/w/api.php?action=query&origin=*&format=json&formatversion=2&prop=info|extracts&generator=search&exsentences=1&exintro=1&explaintext=1&gsrsearch=" + q + "&gsrnamespace=0&gsrlimit=10&exlimit=10" , true);
    xhr.send();
  } 

}



$(document).ready(function(){

});

