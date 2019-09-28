import '../style.css';
import Bubble from './bubble.js';

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

// dichiariamo una bolla
var bubble = new Bubble(redcolor, base02color,
    '25px Verdana', 50, canvas.width, canvas.height);

// funzione chiamata periodicamente
setInterval(function() {

    // ripuliamo il canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.rect(0,0,canvas.width,canvas.height, base3color);
    ctx.fillStyle = base3color;
    ctx.fill();
    ctx.stroke();

    // ridisegniamo la bolla facendola scendere di un passo
    bubble.moveDownAndDraw(ctx);

}, 10);
