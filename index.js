const information = require('./information');
const cowsay = require('cowsay');

const message = `Hello, je m'appelle ${information.nom} et je suis à la ${information.campus}!`;
const cowMessage = cowsay.say({ text: message })

console.log(cowMessage);
