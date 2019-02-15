let nicklas = document.getElementById("nicklasIMG");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      nicklas.style.transition = "all 1s";
      //Left
      nicklas.style.left = "10px";
      nicklas.style.marginLeft = "0px";
      //Top
      nicklas.style.top = "10px";
      //Size
      nicklas.style.width = "100px";
      nicklas.style.height = "100px";
    } 
    else {
        nicklas.style.transition = "all 1s";
        //Left
        nicklas.style.left = "50%";
        nicklas.style.marginLeft = "-150px";
        //Top
        nicklas.style.top = "30%";
        //Size
        nicklas.style.width = "300px";
        nicklas.style.height = "300px";
    }
  }