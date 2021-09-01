var mouseEvent = "empty";
var touchEvent = "empty";
var last_position_of_mouse_x, last_position_of_mouse_y;
var last_position_of_touch_x, last_position_of_touch_y;


    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");
    
    color = "red";
    widthofline = 2;

var width=screen.width;
var height=screen.height;
newwidth=screen.width-70;
newheight=screen.height-300;

if(width<992)
{
    document.getElementById("mycanvas").width=newwidth;
    document.getElementById("mycanvas").height=newheight;
    document.body.style.overflow="hidden";
}

canvas.addEventListener("touchstart",mytouchstart)
function mytouchstart(e)
{
    console.log("mytouchstart");

    last_position_of_mouse_x=e.touches[0].clientX-canvas.offsetLeft;
    last_position_of_mouse_y=e.touches[0].clientY-canvas.offsetTop;
}

canvas.addEventListener("touchmove", my_touchmove);
function my_touchmove(e)
{
    current_position_of_touch_x = e.touches[0].clientX - canvas.offsetLeft;
    current_position_of_touch_y = e.touches[0].clientY - canas.offsetTop;

    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = widthofline;
    ctx.moveTo(last_position_of_touch_x, last_position_of_touch_y);
    ctx.lineTo(current_position_of_touch_x, current_position_of_touch_y);
    ctx.stroke();
    
    console.log("Last position of x and y coordinates = ");
    console.log("x = " + last_position_of_x + "y = " + last_position_of_y);

    console.log("Current position of x and y coordinates = ");
    console.log("x  = " + current_position_of_touch_x + "y = " + current_position_of_touch_y);

    last_position_of_x = current_position_of_touch_x;
    last_position_of_y = current_position_of_touch_y;
}

canvas.addEventListener("touchstart",mymousedown)
function mymousedown(e)
{
    console.log("mymousedown");

    last_position_of_x=e.clientX-canvas.offsetLeft;
    last_position_of_y=e.clientY-canvas.offsetTop;
}

canvas.addEventListener("mousemove" , mymousemove);
function mymousemove(e)
{
    current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
    current_position_of_mouse_y = e.clientY - canas.offsetTop;
   
    if(mouseEvent == "mouseDown") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = widthofline;
        ctx.moveTo(last_position_of_mouse_x , last_position_of_mouse_y);
        ctx.lineTo(current_position_of_mouse_x , current_position_of_mouse_y)
    }

    last_position_of_mouse_x = current_position_of_mouse_x;
    last_position_of_mouse_y = current_position_of_mouse_y;

}