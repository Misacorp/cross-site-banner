var url = 'https://misacorp.github.io/cross-site-banner/content.html';
var content = ajax(url, 'get',  function(obj) { updatePage(obj.responseText) });

updatePage(content);

function updatePage(data) {
    document.body.innerHTML = data + document.body.innerHTML;
}

function ajax(url, method, callback, params = null) {
     var obj;
     try {   
      obj = new XMLHttpRequest();  
     } catch(e){   
       try {     
         obj = new ActiveXObject("Msxml2.XMLHTTP");     
       } catch(e) {     
         try { 
           obj = new ActiveXObject("Microsoft.XMLHTTP");       
         } catch(e) {       
           alert("Your browser does not support Ajax.");       
           return false;       
         }     
       }   
     }
     obj.onreadystatechange = function() {
      if(obj.readyState == 4) {
         callback(obj);
      } 
     }
     obj.open(method, url, true);
     obj.send(params);
     return obj;
 }