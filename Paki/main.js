// console.log("Hola Mundo! desde la colsola");
var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('ROBOT ART')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Turning voice into art with accessible technology')
    .pauseFor(2500)
    .deleteChars(21)
    .typeString('<strong>PAKI !</strong>')
    .pauseFor(2500)
    .start();