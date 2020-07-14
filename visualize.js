var mic;

/*
 * Important note: It seems like it only works for Microsoft Edge
 */
function init() {
    createCanvas(window.innerWidth, window.innerHeight);
    document.getElementById("button").style.display = "none";
    mic = new p5.AudioIn();
    mic.start();
    setInterval(draw, 10);
}

function draw() {
    background(0);
    var vol = mic.getLevel();
    console.log(vol);
    ellipse(window.innerWidth/2, window.innerHeight/2,
        vol * window.innerWidth, vol * window.innerWidth);
}