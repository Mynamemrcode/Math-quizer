playername1 = localStorage.getItem("playernew1");
playername2 = localStorage.getItem("playernew2");
player1score = 0;
player2score = 0;

document.getElementById("player@1name").innerHTML = playername1;
document.getElementById("player@2name").innerHTML = playername2;

document.getElementById("player@1score").innerHTML = player1score;
document.getElementById("player@2score").innerHTML = player2score;

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