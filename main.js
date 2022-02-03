var mouseEvent = "";

var last_postion_mouse_x , last_position_mouse_y;

canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

color = "black";
line_width = 2 ;

canvas.addEventListener("mousedown",my_mousedown);

function my_mousedown(e){
    mouseEvent = "mousedown";
    color = document.getElementById("color").value;
    line_width = document.getElementById("line_width").value;
}

canvas.addEventListener("mouseup",my_mouseup);

function my_mouseup(e){
    mouseEvent = "mouseup";
}

canvas.addEventListener("mouseleave",my_mouseleave);

function my_mouseleave(e){
    mouseEvent = "mouseleave";
}

canvas.addEventListener("mousemove",my_mousemove);

function my_mousemove(e){
    current_position_mouse_x = e.clientX - canvas.offsetLeft;
    current_position_mouse_y = e.clientY - canvas.offsetTop;
    
    if (mouseEvent == "mousedown"){
        ctx.beginPath();
        ctx.lineWidth = line_width;
        ctx.strokeStyle = color;
        ctx.moveTo(last_position_mouse_x,last_position_mouse_y);
        console.log("Last Position of X =" + last_position_mouse_x );
        console.log("Last Position of Y =" + last_position_mouse_y );

        ctx.lineTo(current_position_mouse_x,current_position_mouse_y);
        console.log("Current Position of X =" + current_position_mouse_x );
        console.log("Current Position of Y =" + current_position_mouse_y );

        ctx.stroke();
    }
    last_position_mouse_x = current_position_mouse_x;
    last_position_mouse_y = current_position_mouse_y;
}




canvas.addEventListener("touchstart", my_touchstart);

function my_touchstart(e){
    last_position_touch_x = e.touches[0].clientX - canvas.offsetLeft;
    last_position_touch_y = e.touches[0].clientY - canvas.offsetTop;
    color = document.getElementById("color").value;
    line_width = document.getElementById("line_width").value;
}

canvas.addEventListener("touchmove", my_touchmove);

function my_touchmove(e){

    current_position_touch_x = e.touches[0].clientX - canvas.offsetLeft;
    current_position_touch_y = e.touches[0].clientY - canvas.offsetTop;

    ctx.beginPath();
    ctx.lineWidth = line_width;
    ctx.strokeStyle = color;
    ctx.moveTo(last_position_touch_x,last_position_touch_y);
    ctx.lineTo(current_position_touch_x, current_position_touch_y);
    ctx.stroke();

    last_position_touch_x = current_position_touch_x;
    last_position_touch_y = current_position_touch_y;
}

function cleararea(){
    ctx.clearRect(0,0, 800, 600);
}