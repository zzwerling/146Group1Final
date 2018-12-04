




function hideDropdowns(){

    document.getElementById("mathselection").style.display = "none";
    document.getElementById("scienceselection").style.display = "none";
    document.getElementById("busselection").style.display = "none";
    document.getElementById("humselection").style.display = "none";
    document.getElementById("otherselection").style.display = "none";


}


function writeUserQuestion(){

    var question = sessionStorage.getItem("question");
    var name = sessionStorage.getItem("name");


    if (question !== null){

    var questionarea = document.getElementById("userquestion");
    questionarea.innerHTML = "<br>\n" +

        "<p class=\\\"questiontext\\\" id=\"questiontext\">" + name +
        " asks: " + question +
        "\n" +
        "<hr>\n" +
        "\n" +
        "<br>\n" +
        "<br>\n" +
        "<hr>";

    var getQuestionText = document.getElementById("questiontext");


        getQuestionText.style.color = "white";
        getQuestionText.style.fontFamily = "Alerta Stencil, sans-serif;";
        getQuestionText.style.paddingLeft = "30px";




    }

}


function postAQuestion() {

    selectedclass = "";

    event.preventDefault();



    if (nameEmpty()) {
        alert("Name or username empty!");
        return;
    }

    else if (classEmpty()) {
        alert("Class missing!");
        return;
    }
    else if (questionEmpty()) {
        alert("Question empty!");
        return;
    }


    selectedclass = findSelected();
    sessionStorage.setItem("question", document.getElementById("question").value);
    sessionStorage.setItem("name", document.getElementById("name").value);

    window.location.href = selectedclass + ".html";





}

    function findSelected(){

        if (document.getElementById("math").value !== "blank"){
            return document.getElementById("math").value;


        }

        if (document.getElementById("science").value !== "blank"){
            return document.getElementById("science").value;

        }

        if (document.getElementById("business").value !== "blank"){
            return document.getElementById("business").value;

        }

        if (document.getElementById("humanities").value !== "blank"){
            return document.getElementById("humanities").value;

        }

        if (document.getElementById("other").value !== "blank"){
            return document.getElementById("other").value;

        }




    }

    function nameEmpty() {

        var name = document.getElementById("name").value;
        var username = document.getElementById("username").value;

        if (name === "" || username === "") {
            return true;

        } else {

            return false;
        }

    }


    function classEmpty() {

        var dropdowns = [document.getElementById("math").value, document.getElementById("science").value
            , document.getElementById("business").value, document.getElementById("humanities").value,
            document.getElementById("other").value];


        for (var i in dropdowns) {

            if (dropdowns[i] !== "blank") {
                return false;
            }


        }
        return true;

    }

    function questionEmpty() {

        var questioncheck = document.getElementById("question").value;

        if (questioncheck === "") {
            return true;
        } else {
            return false;

        }

    }


    function showDropdown() {

        var dropdown = document.getElementById("subjects").value;


        if (dropdown == "math") {
            document.getElementById("scienceselection").style.display = "none";
            document.getElementById("busselection").style.display = "none";
            document.getElementById("humselection").style.display = "none";
            document.getElementById("otherselection").style.display = "none";


            document.getElementById("mathselection").style.display = "block";

        }
        else if (dropdown == "science") {

            document.getElementById("mathselection").style.display = "none";
            document.getElementById("busselection").style.display = "none";
            document.getElementById("humselection").style.display = "none";
            document.getElementById("otherselection").style.display = "none";


            document.getElementById("scienceselection").style.display = "block"

        }

        else if (dropdown == "business") {
            document.getElementById("mathselection").style.display = "none";
            document.getElementById("humselection").style.display = "none";
            document.getElementById("otherselection").style.display = "none";
            document.getElementById("scienceselection").style.display = "none";

            document.getElementById("busselection").style.display = "block";


        }

        else if (dropdown == "humanities") {

            document.getElementById("mathselection").style.display = "none";
            document.getElementById("otherselection").style.display = "none";
            document.getElementById("scienceselection").style.display = "none";
            document.getElementById("busselection").style.display = "none";

            document.getElementById("humselection").style.display = "block";


        }

        else if (dropdown == "other") {

            document.getElementById("mathselection").style.display = "none";
            document.getElementById("scienceselection").style.display = "none";
            document.getElementById("busselection").style.display = "none";
            document.getElementById("humselection").style.display = "none";

            document.getElementById("otherselection").style.display = "block";


        }


}