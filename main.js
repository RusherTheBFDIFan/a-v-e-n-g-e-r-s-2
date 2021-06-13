var canvas = new fabric.canvas("myCanvas")

var heightblock = 30;
var widthblock = 30;

var playerx = 10;
var playery = 10;

var playerobject = "";
var blockobject = "";

function playerupdate(){
    fabric.Image.fromURL("player.png",function(Img){
        playerobject = Img;

        playerobject.scaleToWidth(150);
        playerobject.scaleToHeight(140);
        playerobject.set({
            top: playery,
            left: playerx
        })
    })
}

function newimage(get_image){
    fabric.Image.fromURL(get_image,function(Img){
        blockobject = Img;

        blockobject.scaleToWidth(150);
        blockobject.scaleToHeight(140);
        blockobject.set({
            top: playery,
            left: playerx
        })
    })
}

window.addEventListener("keydown",my_keydown);

function my_keydown(e) {
    keyPressed = e.keyCode;
    console.log("keyPressed");
    if (e.shiftKey == true && keyPressed == "80"){
        console.log("p and shift pressed together");
        heightblock = heightblock + 10;
        widthblock = widthblock + 10;
        document.getElementById("current_width").innerHTML = widthblock;
        document.getElementById("current_height").innerHTML = heightblock;
    }

    if (e.shiftKey == true && keyPressed == "77"){
        console.log("m and shift pressed together");
        heightblock = heightblock - 10;
        widthblock = widthblock - 10;
        document.getElementById("current_width").innerHTML = widthblock;
        document.getElementById("current_height").innerHTML = heightblock;
    }

    if (keyPressed == "70"){
        new_image("ironman_face.png");
        console.log("f");
    }

    if (keyPressed == "66"){
        new_image("spiderman_body.png");
        console.log("b");
    }

    if (keyPressed == "76"){
        new_image("hulk_legs.png");
        console.log("l");
    }

    if (keyPressed == "82"){
        new_image("thor_right_hand.png");
        console.log("r");
    }

    if (keyPressed == "72"){
        new_image("captain_america_left_hand.png");
        console.log("h");
    }

    if (keyPressed == "40"){
        down();
        console.log("down");
    }

    if (keyPressed == "38"){
        up();
        console.log("up");
    }

    if (keyPressed == "37"){
        left();
        console.log("left");
    }

    if (keyPressed == "39"){
        left();
        console.log("left");
    }
}