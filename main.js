(function() {

    var section = document.getElementById("section");
    var DivClock = document.createElement('div');
    DivClock.id = "clock";
    section.appendChild(DivClock);

    var Numbers = ["12", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"];
    var str = "";

    for (var i = 0; i < Numbers.length; i++) {
        str += `<div class="circle"><span>${Numbers[i]}</span></div>`;
    }

    str += `<div id="red-circle"></div><span class="hour"></span><span class="minute"></span><span class="second"></span>`;
    DivClock.innerHTML = str;

    var num = 0;
    var greenCircles = document.getElementsByClassName("circle");

    for (i = 0; i < greenCircles.length; i++) {
        var greenCircle = greenCircles[i];
        var red = document.getElementById("red-circle");
        var radius = 200;

        var angle = num / 180 * Math.PI;
        var redCenterX = red.offsetLeft + red.offsetWidth / 2;
        var redCenterY = red.offsetTop + red.offsetHeight / 2;
        var greenCenterX = redCenterX + radius * Math.sin(angle);
        var greenCenterY = redCenterY - radius * Math.cos(angle);

        greenCircle.style.left = Math.round(greenCenterX - greenCircle.offsetWidth / 2) + "px";
        greenCircle.style.top = Math.round(greenCenterY - greenCircle.offsetHeight / 2) + "px";

        num += 30;
    }

    function clock() {
        const date = new Date();
        const hours = 30 * ((date.getHours() + 11) % 12 + 1);
        const minutes = 6 * date.getMinutes();
        const seconds = 6 * date.getSeconds();

        document.querySelector('.hour').style.transform = `rotate(${hours}deg)`;
        document.querySelector('.minute').style.transform = `rotate(${minutes}deg)`;
        document.querySelector('.second').style.transform = `rotate(${seconds}deg)`;
    }
    setInterval(clock, 1000);

}())