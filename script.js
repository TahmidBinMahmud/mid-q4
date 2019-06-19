/* Add your script here */

function move() {
    var tempInitial = document.getElementById("num1").value;
    var tempFinal = document.getElementById("num2").value;
    document.getElementById("temp1").innerText= tempInitial + '° C';
    document.getElementById("temp2").innerText= tempFinal + '° C';
    var elem = document.getElementById("myBar");
    var inter = document.getElementById("num3").value;
    var width = 0;
    var id = setInterval(frame, inter);
    elem.style.width = width + '%'; 
    document.getElementById("demo").innerHTML = width * 1  + '%';
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        document.getElementsByClassName("button button4")[0].style.backgroundColor = "gray";
        document.getElementById("btn").innerText="Start Cooker";
      } else {
        //document.getElementById('myBar').className = "w3-container w3-blue";
        width += 20;
        if (width == 40){
          document.getElementById('myBar').className = "w3-container w3-green";
        }
        if (width == 60){
          document.getElementById('myBar').className = "w3-container w3-yellow";
        }
        if (width == 80){
          document.getElementById('myBar').className = "w3-container w3-orange";
        }
        if (width == 100){
          document.getElementById('myBar').className = "w3-container w3-red";
        }
        elem.style.width = width + '%'; 
        document.getElementById("demo").innerHTML = width * 1  + '%';
      }
    }
  }

  function submitButtonStyle(_this) {
    _this.style.backgroundColor = "black";
    document.getElementById("btn").innerText="Cooking";
  }