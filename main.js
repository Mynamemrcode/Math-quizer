function adduser() {
    playername1 = document.getElementById("playerinput1").value;
    playername2 = document.getElementById("playerinput2").value;
    localStorage.setItem("playernew1", playername1);
    localStorage.setItem("playernew2", playername2);
    window.location="gamer.html";
}

