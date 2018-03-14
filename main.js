

/*
Pre: Takes in the API(r) from the search function.
Post:Creates a button which is the textbox where the search information is displays.
     Creates a header(title) elemnt as well as a paragrapg(p) appends these to the textbox.
     Textbox appended to div1 in html file.
*/
function display(r){
  $("#results").empty();
    for(i = 0; i < 10; i++){
      var d = document.createElement("button");
      d.setAttribute("class", "col-xs-12 textbox");
      d.setAttribute("onClick", "window.open('https://en.wikipedia.org/wiki/" + r.query.pages[i].title + "')");
      var h = document.createElement("h2");
      var tittle = document.createTextNode(r.query.pages[i].title);
      h.appendChild(tittle);
      var p = document.createElement("p");
      var s = document.createTextNode(r.query.pages[i].extract);
      p.appendChild(s);
      d.appendChild(h);
      d.appendChild(p);
      var box = document.getElementById("results");
      box.appendChild(d);
    }
}



/*
Pre: Nothing
Post: Runs a API get call which returns the API values from wikipedia.
      Passes the API information  to the display function.
*/
function search(){
  var q = document.getElementById("query").value;  
  if(q != ""){
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function (){
      if(this.readyState == 4 && this.status == 200){
        var r = JSON.parse(this.responseText);
        console.log(r);
        display(r);
      }
      else{
        console.log("Error", xmlhttp.statusText)  
      }
    };   
    xhr.open("GET", "https://en.wikipedia.org/w/api.php?action=query&origin=*&format=json&formatversion=2&prop=info|extracts&generator=search&exsentences=1&exintro=1&explaintext=1&gsrsearch=" + q + "&gsrnamespace=0&gsrlimit=10&exlimit=10" , true);
    xhr.send();
  }
  else{
    alert("please enter a search value");
  } 
}

