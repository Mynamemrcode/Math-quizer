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