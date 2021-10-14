function throwdices() {

    var userNum = Math.floor((Math.random() * 6) + 1);
    document.getElementById("mine").innerHTML = "Il tuo numero è: " + userNum;

    var pcNum = Math.floor((Math.random() * 6) + 1);
    document.getElementById("pc").innerHTML = "Il numero del computer è: " + pcNum;

    if (pcNum > userNum) {
        document.getElementById("result").innerHTML = 'Ha vinto il computer :(';
    } else if (userNum > pcNum) {
        document.getElementById("result").innerHTML = 'Complimenti hai vinto!';
    } else if (pcNum = userNum) {
        document.getElementById("result").innerHTML = 'Pareggio :/';
    }
}