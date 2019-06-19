/* Add your script here */

function move() {
    var elem = document.getElementById("myBar");   
    var width = 20;
    var id = setInterval(frame, 400);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
      } else {
        width += 20; 
        elem.style.width = width + '%'; 
        document.getElementById("demo").innerHTML = width * 1  + '%';
      }
    }
  }