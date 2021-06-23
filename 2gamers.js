playername1 = localStorage.getItem("playernew1");
playername2 = localStorage.getItem("playernew2");
player1score = 0;
player2score = 0;

document.getElementById("player1name").innerHTML = playername1;
document.getElementById("player2name").innerHTML = playername2;

document.getElementById("player1score").innerHTML = player1score;
document.getElementById("player2score").innerHTML = player2score;

document.getElementById("questionturn").innerHTML = "questionturn " + playername1;
document.getElementById("answerturn").innerHTML ="answerturn " + playername2;

function send() {
    num1 = document.getElementById("inputnumber1").value;
    num2 = document.getElementById("inputnumber2").value;

    realans = parseInt(num1) * parseInt(num2);
    console.log(realans);

    questionnum= "<h4>" + num1 + " x " + num2 +"</h4>";
    inputbx = "<br> Your Answer: <input type='text' id='inputcheckbx'>";
    chkbtn = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    all = questionnum + inputbx + chkbtn;

    document.getElementById("output").innerHTML = all;
}

questionturn = "player1";
answerturn = "player2";

function check() {
    getans = document.getElementById("inputcheckbx").value;
    if(getans == realans) {
        if(answerturn == "player1") {
        player1score = player1score + 1;
        document.getElementById("player1score").innerHTML = player1score;
        }
        else {
            player2score = player2score + 1;
            document.getElementById("player2score").innerHTML = player2score;
        }
    }
    if(questionturn == "player1") {
        questionturn = "player2";
        document.getElementById("questionturn").innerHTML = "Question Turn " + playername2;
    }
    else {
        questionturn = "player1";
        document.getElementById("questionturn").innerHTML = "Question Turn " + playername1;
    }

    if(answerturn == "player2") {
        answerturn = "player1";
        document.getElementById("answerturn").innerHTML = "Anwser Turn " + playername1;
    }
    else {
        answerturn = "player2";
        document.getElementById("answerturn").innerHTML = "Answer Turn " + playername2;
    }
    document.getElementById("output").innerHTML = "";
}