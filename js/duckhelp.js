
function schedule(){
    var show = document.getElementsByClassName("sched");

    for(var i=0; i<show.length; i++){
        show[i].style.display = "block";
    }
}

function submit(){
    var d = document.getElementById("date");
    var t = document.getElementById("time");
    window.alert("You have successfully scheduled an appointment for " + d.value + " at " + t.value + ".");

    d.value=""
    t.value=""
}
