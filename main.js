harry_potter = "";
peter_pan = "";
function setup () {
    canvas = createCanvas(600, 500);
    canvas.position(450, 200);
    video = createCapture(VIDEO);
    video.hide();
}
function draw () {
    image(video, 0, 0, 600, 500);
}
function preload () {
    harry_potter = loadSound("music.mp3");
    peter_pan = loadSound("music2.mp3")
}
