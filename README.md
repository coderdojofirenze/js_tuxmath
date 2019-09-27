# TuxMath - Un semplice gioco per imparare la matematica divertendosi

Con questo tutorial utilizzeremo HTML, CSS e Javascript per costruire un gioco simile a [TuxMath] in cui dovremo risolvere delle semplici operazioni matematiche contenute in bolle che cascano dall'alto prima che queste stesse bolle raggiungano il fondo del campo di gioco.

## Setup dell'ambiente 1: NodeJS, npm e yarn

Il prerequisito necessario per tutti è installare i programmi NodeJS, `npm` e `yarn`. Questi tool per il momento installiamoli senza farci troppe domande, vedremo più avanti a cosa servono. Per installare i tool è necessaria la connessione a internet. Occorre scaricare per prima cosa NodeJS per l'appunto dal [sito di NodeJs][NodeJS] (https://nodejs.org/en/).

Una volta fatto, verificare che l'installazione sia andata a buon fine dando i seguenti comandi dalla command line:

```
node -v
npm version
npx -v
```

Devono apparire delle stringhe con informazioni di versione.

A questo punto, utilizzando `npm`, occorre installare l'utility [`yarn`][Yarn] a livello globale. Per fare questo dare il seguente comando:

```
npm install --global yarn
```

(può darsi che sia richiesta una password di sistema o di usare il comando `sudo` se siete dei pro e avete un PC Linux).

Infine, per scrivere il codice in modo efficiente occorre avere un buon editor di codice. Anche se il mio preferito è [Vim][Vim], per il momento vi consiglio qualcosa di meno ostico, per esempio [Visual Studio Code][VSCode]. Ma se ne avete già uno che vi soddisfa continuate a lavorare con quello!

## Setup dell'ambiente 2: scarichiamo il codice di base

Come detto, questo programma utilizza NodeJS per sviluppo e deploy del software. Il setup di un progetto NodeJS è complicato e in questo momento ci interessa poco. Per questo partiamo da un pacchetto preconfezionato (boilerplate) che contiene già tutto il setup di base. Il codice di partenza è disponibile come repository su Github o, o se siete a una sessione del Coderdojo, lo potete ottenere dai mentor presenti alla sessione.

Se non avete accesso a internet o non volete usare git, fatevi dare dai mentor lo zip con la versione iniziale dei file. Potete a questo punto saltare al capitolo [Prima esecuzione](#prima-esecuzione)

### Clone del repo di partenza da GitHub

Se invece siete dei pro, avete connessione + git + command line date i seguenti comandi:

```
git clone https://github.com/coderdojofirenze/js_tuxmath_starter.git js_tuxmath
cd js_tuxmath
```

**NOTA:** Se siete dei pro di Github, prima di dare questi comandi, potete fare un fork del repository sul vostro account Github. In questo modo potrete poi pubblicare il software che realizzerete e fare push delle modifiche sul vostro repo.

A questo punto possiamo inizializzare l'ambiente scaricando tutte le librerie e le utility che servono dando il seguente comando:

```
yarn install
```

## Prima esecuzione

Qualunque di questi metodi abbiate utilizzato (unzip o git clone), dopo queste operazioni, troverete che la vostra directory di lavoro contiene già diversi file. Non attardiamoci nello scoprire a cosa servono, lo vedremo casomai più avanti. Per i più curiosi (ma che conoscono l'inglese e non si lasciano intimorire da un po' di jargon tecnico) [c'è una pagina][jsmodernsetup] che spiega come è stato costruito quest'ambiente di base, che poi in termini tecnici si chiama _boilerplate_: un codice di base che può essere utilizzato come punto di partenza per nuovi progetti.

Adesso possiamo verificare che tutto funzioni dando il comando:

```
npm run start
```

Se non ci sono problemi, nel nostro browser preferito si aprirà magicamente un tab con la nostra applicazione in esecuzione. Per il momento si tratta semplicemente di una pagina scura con un titolo "Ciao Mondo!" di colore rosso su sfondo bianco.

In più se si aprono i "Developer tools" del browser, premendo il tasto **F11**, si può vedere che sulla console è apparso un magico messaggio che ha a che fare con il numero 42.

## Come è strutturato il nostro programma

Adesso che abbiamo visto il programma in esecuzione, facciamo un rapido escursus su come è organizzato il nostro ambiente di lavoro.
Un progetto HTML/Javascript è divisibile in tre aree:

- Il 'codice' HTML che insieme al foglio di stile (CSS), rappresenta gli elementi grafici del nostro programma e come verranno rappresentati nel browser.

- Il codice Javascript, che invece realizza il "motore" che farà avvenire gli avvenimenti all'interno della nostra pagine.

Tutto il codice è contenuto all'interno della directory `src`, che è l'unica che ci interesserà d'ora in poi: qui dentro troverete:

- La pagina HTML: `index.html`
- Il foglio di stile: `style.css`
- Il codice javascript: `js/main.js`

Aprite questi file con l'editor: potete vedere il contenuto della pagina HTML che appare sul browser, le informazioni di stile che portano la pagina ad essere visualizzata con le caratteristiche grafiche che vediamo e il codice javascript che per il momento si limita a stampare una riga di log sulla console.

Provate a modificare uno qualunque di questi file e vedete cosa succede nel browser quando salvate il file. Per esempio cambiate il titolo della pagina da "Ciao Mondo!" a "TuxMath in Javascript":

```html
    <h1 class="header">
      Tux Math in Javascript
    </h1>
```


Come potete osservare, grazie al nostro potente setup, la pagina viene ricaricata automaticamente nel browser quando salviamo qualunque modifica! Questo si rivelerà molto utile durante lo sviluppo e aumenterà di molto la nostra produttività.

## TuxMath 1: il canvas

Per prima cosa aggiungiamo alla nostra pagina html un canvas che useremo per disegnare i nostri oggetti contenenti le operazioni matematiche da risolvere.

Niente di più semplice. Aggiungiamo le seguenti righe nel file `index.html` subito dopo la sezione `<h1>`:

```html
    <div id="canvasdiv">
      <canvas id="tuxmathcanvas"></canvas>
    </div>
```

E le seguenti righe alla fine del file `style.css`:

```css
#tuxmathcanvas {
	width: 400px;
	height: 600px;
	border-width: 7px;
	border-style: solid;
	border-color: var(--solar-base3-color);
	background-color: var(--solar-violet-color);
}
```

Salviamo i file e vediamo come cambia la pagina HTML. Se non ci sono errori il canvas rettangolare apparirà a schermo.


## TO BE COMPLETED





[TuxMath]: https://en.wikipedia.org/wiki/Tux,_of_Math_Command
[Vim]: https://www.vim.org/
[VSCode]: https://code.visualstudio.com/
[Yarn]: https://yarnpkg.com/lang/en/
[NodeJS]: https://nodejs.org/en/
[jsmodernsetup]: https://fpiantini.github.io/javascript/nodejs/programming/webpack/web/2019/04/01/nodejs-project-modern-setup.html