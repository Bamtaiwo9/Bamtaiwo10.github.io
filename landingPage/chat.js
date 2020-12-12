var pc = document.getElementById('#private');
const sche= document.getElementById("sche");
const sett = document.getElementById("sett");
const comm = document.getElementById("comm");
const private = document.getElementById("private");
const doctor = document.getElementById("doctor");
const long = document.getElementById("long");
const second = document.getElementById("second");
const Chatpg = document.getElementById("chatss");
const Docspg = document.getElementById("docs");
const width = screen.width


comm.onclick = function () {
    this.style.backgroundColor = "white";
    long.style.color="white"
    private.style.color="white"; sche.style.color="white"; doctor.style.color="white"
    this.style.color="black"
    sett.style.backgroundColor = "#249ae9";
    private.style.backgroundColor = "#249ae9";
    doctor.style.backgroundColor = "#249ae9";
    sche.style.backgroundColor = "#249ae9";
    Docspg.style.display="none"
    Chatpg.style.display="none" 
 
    console.log(screen.width);
    if (screen.width < 401) {
        second.style.display="block";
        long.style.display="none";
    }
    
}
doctor.onclick = function () {
    this.style.backgroundColor = "white";
    long.style.color="white"
    private.style.color="white"; sche.style.color="white"; comm.style.color="white"
    this.style.color="black"
    sett.style.backgroundColor = "#249ae9";
    private.style.backgroundColor = "#249ae9";
    comm.style.backgroundColor = "#249ae9";
    sche.style.backgroundColor = "#249ae9";
    comm.style.borderTopRightRadius="10px";

    Docspg.style.display="block"
    Chatpg.style.display="none"  

    if (screen.width < 401) {
        second.style.display="block";
        long.style.display="none";
    }
}
private.onclick = function () {
    this.style.backgroundColor = "white";
    long.style.color="white"
    comm.style.color="white"; sche.style.color="white"; doctor.style.color="white"
    this.style.color="black"
    sett.style.backgroundColor = "#249ae9";
    comm.style.backgroundColor = "#249ae9";
    doctor.style.backgroundColor = "#249ae9";
    sche.style.backgroundColor = "#249ae9";
    Docspg.style.display="none"
    Chatpg.style.display=''  

    if (screen.width < 401) {
        second.style.display="block";
        long.style.display="none";
    }
}


  /*$(".private").click(function(){
    $(".private").removeClass("active");
    $(this).addClass("active");
  });

  var button = document.querySelector('.private');

button.onclick = function () {
    this.style.backgroundColor = "red"
}*/



    $("#comm").click(function() {
        $("#comm").toggleClass( "selected" );
      });