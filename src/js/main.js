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

ctx.beginPath();
ctx.strokeStyle = circlecolor;
ctx.fillStyle = circlecolor;
ctx.arc(150, 100, 50, 0, 2 * Math.PI, false)
ctx.fill();
ctx.stroke();

ctx.fillStyle = textcolor;
var op = '4 + 5';
var txtwidth = ctx.measureText(op).width
ctx.fillText(op, 150, 100);

var ndx = 0;
setInterval(function() {
    console.log(`setInterval(): iterazione numero ${ndx}`);
    ndx += 1;

}, 1000);
