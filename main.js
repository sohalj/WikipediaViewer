


function search(){
  var q = document.getElementById("query").value  
  if(q != ""){
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function (){
      if(this.readyState == 4 && this.status == 200){
        r = JSON.parse(this.responseText);
        console.log(r);
      }
    };
    var q = document.getElementById("query").value    
    xhr.open("GET", "https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&origin=*&srwhat=text&srlimit=6&srsearch=" + q, true);
    xhr.send();
  }    
}




$(document).ready(function(){

});

