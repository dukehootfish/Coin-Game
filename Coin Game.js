// JavaScript source code
var cvs = document.getElementById("cvs");
var ctx = cvs.getContext("2d");
ctx.strokeStyle = "white";
ctx.font = "11px serif";
ctx.beginPath();

function init() {
    ctx.clearRect(0, 0, cvs.width, cvs.height);
    ctx.fillStyle = "white";

    for (var i = 0; i < 150; i++) {
        ctx.globalAlpha = 0.5;

        ctx.moveTo(i * 15 + 0.5, 0);
        ctx.lineTo(i * 15 + 0.5, 1010);
        ctx.moveTo(0, i * 10 + 0.5);
        ctx.lineTo(1515, i * 10 + 0.5);
    }
    ctx.stroke();
    for (var i = 1; i <= 100; i++) {
        ctx.fillText("" + (i), i * 15, cvs.height);
        ctx.fillText("" + (i), 0, cvs.height - i * 10);
    }
}
function coinGame() {
    init();
    var p = 0;
    var r = document.getElementById("r").value;
    var q1 = document.getElementById("q1").value;
    if (q1 > 100 || q1 < 0) {
        alert("q1 must be between 1 than 100");
        return;
    }
    var q2 = document.getElementById("q2").value;
    if (q2 > 100 || q2 < 0) {
        alert("q2 must be between 1 than 100");
        return;
    }
    var heads = true;
    for (var i = 1; i <= 100; i++) {
        var pwins = 0;
        p = i;
        for (var j = 0; j < r; j++) {
            heads = true;
            if (Math.floor((Math.random() * 100)) + 1 <= q1) {
                heads = !heads;
            }
            if (Math.floor((Math.random() * 100)) + 1 <= p) {
                heads = !heads;
            }
            if (Math.floor((Math.random() * 100)) + 1 <= q2) {
                heads = !heads;
            }
            if (!heads) {
                pwins++;
            }
        }
        ctx.fillStyle = "red";
        ctx.fillRect(i * 15-5, cvs.height - pwins*(1000/r)-5, 10, 10);
    }
}


init();