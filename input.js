const net = require('net');
const connect = require('./client');

const setupInput = function(callback) {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();

  stdin.on('data', callback)


  return stdin;
}

const handleUserInput = function(move) {

  if (move === '\u0003') {
    console.log("Thanks for using me, ciao!")
    process.exit();
  }


  console.log(move)

}

module.exports={
  setupInput
}
