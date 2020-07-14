var mic;

window.onload = function() {
    window.AudioContext = new AudioContext();
    window.AudioContext.resume();
}

function init() {
    createCanvas(400, 400);
    document.getElementById("button").style.display = "none";
    mic = new p5.AudioIn();
    mic.start();
    setInterval(draw, 100);
}

function draw() {
    background(0);
    var vol = mic.getLevel();
    console.log(vol);
    ellipse(100, 100, vol * 200, vol * 200);
}