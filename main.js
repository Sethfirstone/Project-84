var last_position_of_x, last_position_of_y;
var color = "black";
var width_of_line = 2;
canvas = document.getElementById("myCanvas");

ctx = canvas.getContext("2d");

var mouseEvent = "empty"

mouseEvent == "mousedown"

canvas.addEventListener("mouseup", my_mouseup)
function my_mouseup(e) {
    mouseEvent == "mouseup"

}
canvas.addEventListener("mouseleave", my_mouseleave)
function my_mouseleave(e) {
    mouseEvent == "mouseleave"

}
canvas.addEventListener("mousemove", my_mousemove)
function my_mousemove(e) {
    mouseEvent == "mousemove"
    current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
    current_position_of_mouse_y = e.clientY - canvas.offsetTop;

    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width_of_line;
    ctx.moveTo(last_position_of_x, last_position_of_y);
    ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
    ctx.stroke();

}

canvas.addEventListener("touchmove", my_touchmove);
function my_touchmove(e) {
    
    current_position_of_touch_x = e.touches[0].clientX - canvas.offsetLeft;
    current_position_of_touch_y = e.touches[0].clientY - canvas.offsetTop;

    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width_of_line;
    ctx.lineTo(current_position_of_touch_x, current_position_of_touch_y);
    ctx.stroke();
    last_position_of_x = current_position_of_touch_x;
    last_position_of_y = current_position_of_touch_y;
}

function clearArea() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}

function clearArea() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}