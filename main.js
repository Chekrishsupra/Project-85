canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
car_width = 120;
car_height = 70;
car1_image = "car1.png";
car1_x = 10;
car1_y = 10;

car2_image = "car2.png";
car2_x = 10;
car2_y = 100;
background_image = "Race.png";

function add() {
Background_imgTag = new Image();
Background_imgTag.onload = uploadbackground;
Background_imgTag.src = background_image;

car1_imgTag = new Image();
car1_imgTag.onload = uploadcar1;
car1_imgTag.src = car1_image;

car2_imgTag = new Image();
car2_imgTag.onload = uploadcar2;
car2_imgTag.src = car2_image;
}

function uploadbackground() {
    ctx.drawImage(Background_imgTag , 0 , 0 , canvas.width , canvas.height);
}
function uploadcar1() {
    ctx.drawImage(car1_imgTag , car1_x , car1_y , car_width , car_height)
}
function uploadcar2() {
    ctx.drawImage(car2_imgTag , car2_x , car2_y , car_width , car_height)
}
window.addEventListener("keydown" , my_keydown)
function my_keydown(e) {
keyPressed = e.keyCode;
console.log (keypressed);
if(keyPressed == "38") {
    up_1();
    console.log("up arrow key")
}

if(keyPressed == "40") {
    down_1();
    console.log("down arrow key")
}

if(keyPressed == "37") {
    left_1();
    console.log("left arrow key")
}

if(keyPressed == "39") {
    right_1();
    console.log("right arrow key")
}

if(keyPressed == "87") {
    up_2();
    console.log("w key")
}

if(keyPressed == "65") {
    left_2();
    console.log("a key")
}

if(keyPressed == "83") {
    down_2();
    console.log("s key")
}

if(keyPressed == "68") {
    right_2();
    console.log("d key")
}
}

function up_1() {
    if(car1_y >= 0) {
        car1_y = car1_y - 10;
        console.log("When up arrow is pressed, x=" + car1_x + "y=" + car1_y);
        uploadbackground();
        uploadcar1();
        uploadcar2();
    }
}

function down_1() {
    if(car1_x <= 500) {
        car1_x = car1_x + 10;
        console.log("When down is pressed, x=" + car1_x + "y=" + car1_y);
        uploadbackground();
        uploadcar1();
        uploadcar2();
    }
}

function left_1() {
    if(car1_x >= 0) {
        car1_x = car1_x - 10;
        console.log("When left arrow is pressed, x=" + car1_x + "y=" + car1_y);
        uploadbackground();
        uploadcar1();
        uploadcar2();
    }
}

function right_1() {
    if(rover_x <= 700) {
        rover_x = rover_x + 10;
        console.log("When right arrow is pressed, x=" + rover_x + "y=" + rover_y);
        uploadbackground();
        uploadcar1();
        uploadcar2();
    }
}

function down_2() {
    if(car2_x <= 500) {
        car2_x = car2_x + 10;
        console.log("When s key is pressed, x=" + car2_x + "y=" + car2_y);
        uploadbackground();
        uploadcar1();
        uploadcar2();
    }
}

function left_2() {
    if(car2_x >= 0) {
        car2_x = car2_x - 10;
        console.log("When a key is pressed, x=" + car2_x + "y=" + car2_y);
        uploadbackground();
        uploadcar1();
        uploadcar2();
    }
}

function up_2() {
    if(car2_y >= 0) {
        car2_y = car2_y - 10;
        console.log("When w key is pressed, x=" + car2_x + "y=" + car2_y);
        uploadbackground();
        uploadcar1();
        uploadcar2();
    }
}

function right_2() {
    if(car2_y >= 0) {
        car2_y = car2_y - 10;
        console.log("When w key is pressed, x=" + car2_x + "y=" + car2_y);
        uploadbackground();
        uploadcar1();
        uploadcar2();
    }
}