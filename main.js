canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
// ctx.beginPath();
ctx.strokeStyle="Black";
ctx.lineWidth=5;
lastx=0
lasty=0
new_width=screen.width-70;
new_height=screen.height-300;
if (screen.width<992) {
document.getElementById("myCanvas").width=new_width;
document.getElementById("myCanvas").height=new_height;
document.body.style.overflow="hidden";
}
// ctx.moveTo(0,300);
// ctx.lineTo(800,300);
// ctx.stroke();
mouseEvent=""
canvas.addEventListener("mousemove",myMouseMove);
function myMouseMove(e) {
    currentx=e.clientX-canvas.offsetLeft;
currenty=e.clientY-canvas.offsetTop;
if (mouseEvent=="mouseDown") {
    ctx.beginPath();
    ctx.moveTo(lastx,lasty);
    ctx.lineTo(currentx,currenty);
    ctx.stroke();
}
lastx=currentx;
lasty=currenty;
}
canvas.addEventListener("mousedown",myMouseDown);
function myMouseDown(e) {
    mouseEvent="mouseDown";
    ctx.strokeStyle=document.getElementById("color").value;
    ctx.lineWidth=document.getElementById("width").value;
}
canvas.addEventListener("mouseleave",myMouseleave);
function myMouseleave(e) {
    mouseEvent="mouseleave";
}
canvas.addEventListener("mouseup",myMouseUp);
function myMouseUp(e) {
    mouseEvent="mouseUp";
}
canvas.addEventListener("touchstart",Mytouchstart);
function Mytouchstart(e) {
    ctx.strokeStyle=document.getElementById("color").value;
    ctx.lineWidth=document.getElementById("width").value;
    lastx=e.touches[0].clientX-canvas.offsetLeft;
    lasty=e.touches[0].clientY-canvas.offsetTop;
}
canvas.addEventListener("touchmove",Mytouchmove);
function Mytouchmove(e) {
    current_touchx=e.touches[0].clientX-canvas.offsetLeft;
    current_touchy=e.touches[0].clientY-canvas.offsetTop;
    ctx.beginPath();
    ctx.moveTo(lastx,lasty);
    ctx.lineTo(current_touchx,current_touchy);
    ctx.stroke();
    lastx=current_touchx;
    lasty=current_touchy;
}
function clearArea() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
}