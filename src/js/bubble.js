export default class Bubble {

    constructor(bubbleColor, textColor, font, radius, sizeCanvas_x, sizeCanvas_y) {
        this.center_x = 0;
        this.center_y = 0;
        this.radius = radius;
        this.bubbleColor = bubbleColor;
        this.textColor = textColor;
        this.addends = [0, 0];
        this.opString = "";
        this.result = 0;
        this.textFont = font;
        this.sizeCanvas_x = 0;
        this.sizeCanvas_y = 0;
        this.speed = 0;

        // salva la dimensione del canvas (ci servira' in seguito)
        this.sizeCanvas_x = sizeCanvas_x;
        this.sizeCanvas_y = sizeCanvas_y;

        // inizializza la bolla
        this.init();
    }

    init() {

        // calcola una posizione casuale per la bolla
        // posizione x casuale tra [0 + radius] e [sizeCanvas_x - radius]
        // posizione y = -radius
        this.center_x = Math.floor(Math.random() * (this.sizeCanvas_x - 2 * this.radius)) + this.radius;
        this.center_y = -this.radius;

        // calcola due addendi casuali tra 1 e 9, salva il risultato dell'operazione
        // e prepara un stringa con l'operazione
        this.addends[0] = Math.ceil(Math.random() * 9);
        this.addends[1] = Math.ceil(Math.random() * 9);
        this.result = this.addends[0] + this.addends[1];
        this.opString = `${this.addends[0]} + ${this.addends[1]}`;

        // regola la velocita' casualmente tra 1 e 5
        this.speed = Math.ceil(Math.random() * 5);

        console.log(`Bolla generata. Centro = [${this.center_x},${this.center_y}], velocità = ${this.speed}. Risultato = ${this.result}`);

    }

    computeResult() {
        this.result = 0;
        for (i = 0; i < this.addends.number; i++) {
            this.result += addends[i];
        }
    }

    moveDownAndDraw(ctx) {

        this.center_y += this.speed;

        ctx.beginPath();
        ctx.strokeStyle = this.bubbleColor;
        ctx.fillStyle = this.bubbleColor;
        ctx.arc(this.center_x, this.center_y, this.radius, 0, 2 * Math.PI, false);
        ctx.fill();
        ctx.stroke();
        ctx.font = this.textFont;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillStyle = this.textColor;
        ctx.fillText(this.opString, this.center_x, this.center_y);

        // se la bolla ha raggiunto il fondo, ne reinizializziamo una nuova
        if (this.center_y > this.sizeCanvas_y)
            this.init(this.sizeCanvas_x, this.sizeCanvas_y);

    }

}
