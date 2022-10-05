function preload() {}

function setup() {
    canvas = createCanvas(640, 480)
    canvas.position(110, 175)
    video = createCapture(VIDEO)
    video.hide()
    
}

function draw() {
    image(video, 100, 90, 450, 300)
    fill("red")
stroke("red")
circle(60, 60, 90)
circle(580 , 60, 90)
circle(60, 420, 90)
circle(580 , 420, 90)
fill("orange")
stroke("orange")
rect(50, 105, 20, 270)
rect(570, 105, 20, 270)
rect(105, 50, 430, 20)
rect(105, 415, 430, 20)
}

function take_snapshot() {
    save("Yugveer Project.jpg")
}