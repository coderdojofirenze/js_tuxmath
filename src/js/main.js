import '../style.css';

const base03color  = '#002b36';
const base02color  = '#073642';
const base01color  = '#586e75';
const base00color  = '#657b83';
const base0color   = '#839496';
const base1color   = '#93a1a1';
const base2color   = '#eee8d5';
const base3color   = '#fdf6e3';
const yellowcolor  = '#b58900';
const orangecolor  = '#cb4b16';
const redcolor     = '#dc322f';
const magentacolor = '#d33682';
const violetcolor  = '#6c71c4';
const bluecolor    = '#268bd2';
const cyancolor    = '#2aa198';
const greencolor   = '#859900';

var canvas = document.getElementById('tuxmathcanvas');
var ctx = canvas.getContext('2d');
var circlecolor = redcolor;
var textcolor = base02color;
ctx.font = '25px Verdana';
ctx.textAlign = 'center';
ctx.textBaseline = 'middle';

var center_x = 150;
var center_y = -50;
var op = '4 + 5';
var txtwidth = ctx.measureText(op).width

ctx.beginPath();
ctx.strokeStyle = circlecolor;
ctx.fillStyle = circlecolor;
ctx.arc(center_x, center_y, 50, 0, 2 * Math.PI, false);
ctx.fill();
ctx.stroke();

ctx.fillStyle = textcolor;
ctx.fillText(op, center_x, center_y);

setInterval(function() {

    // ripuliamo il canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.rect(0,0,canvas.width,canvas.height, base3color);
    ctx.fillStyle = 'white';
    ctx.fill();
    ctx.stroke();

    // calcoliamo la nuova posizione
    center_y += 1;

    // ridisegniamo il tutto
    ctx.beginPath();
    ctx.strokeStyle = circlecolor;
    ctx.fillStyle = circlecolor;
    ctx.arc(center_x, center_y, 50, 0, 2 * Math.PI, false);
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle = textcolor;
    ctx.fillText(op, center_x, center_y);


}, 10);
