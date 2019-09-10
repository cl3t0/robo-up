let controller = [0, 0, 0, 0];
let mouse_down = false;

let inside = (a, b, l, h, x, y) => {
    if (x >= a && x <= a+l && y >= b && y <= b+h) return true;
    return false;
};

let send_command = (vector) => {
    console.log(vector);
    let string = ""
    .concat(vector[0]).concat(",")
    .concat(vector[1]).concat(",")
    .concat(vector[2]).concat(",")
    .concat(vector[3]);
    $.ajax({
        type: "GET",
        url: "http://localhost:2002/commands?v=".concat(string),
        crossDomain: true,
        success: function (res) {
            console.log("vetor enviado");
        }
    });
}

let choose_direction = (e) => {
    if (inside(100, 150, 100, 100, e.pageX, e.pageY)) {
        // up
        controller = [1, 0, 0, 0];
        send_command(controller);
    } else if (inside(100, 350, 100, 100, e.pageX, e.pageY)) {
        // down
        controller = [0, 0, 1, 0];
        send_command(controller);
    } else if (inside(0, 250, 100, 100, e.pageX, e.pageY)) {
        // left
        controller = [0, 1, 0, 0];
        send_command(controller);
    } else if (inside(200, 250, 100, 100, e.pageX, e.pageY)) {
        // right
        controller = [0, 0, 0, 1];
        send_command(controller);
    } else {
        controller = [0, 0, 0, 0];
        send_command(controller);
    }
}

$(document).ready(function () {
    $("#enviar").click(function () {
        let rosto = $("#dropdown").val();
        $.ajax({
            type: "GET",
            url: "command?command=".concat(rosto),
            success: function (res) {
                console.log(res);
            }
        });
    });
    $(document).mousedown(function(e) {
        mouse_down = true;
        choose_direction(e);
    }).mouseup(function() {
        mouse_down = false;
        controller = [0, 0, 0, 0];
        send_command(controller);

    });
    $("#controllers").mousemove(function (e) {
        if (mouse_down) {
            //console.log(e.pageX, e.pageY);
            choose_direction(e);
        }
    });
    $("#controllers").mouseout(function () {
        controller = [0, 0, 0, 0];
        send_command(controller);
    });
});



// controllers

var c = document.getElementById("controllers");
var ctx = c.getContext("2d");
// up button
var up = document.getElementById("up-arrow");
up.onload = () => ctx.drawImage(up, 100, 0, 100, 100);
// down button
var down = document.getElementById("down-arrow");
down.onload = () => ctx.drawImage(down, 100, 200, 100, 100);
// left button
var left = document.getElementById("left-arrow");
left.onload = () => ctx.drawImage(left, 0, 100, 100, 100);
// right button
var right = document.getElementById("right-arrow");
right.onload = () => ctx.drawImage(right, 200, 100, 100, 100);