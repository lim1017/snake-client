const net = require('net');
const connect = require('./client');

let connection;


const setupInput = function(conn) {
  

  const stdin = process.stdin;
  connection=conn
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();

  stdin.on('data', (data) =>{
    console.log(data, ' data')
    handleUserInput(data)
  })


  return stdin;
}

const handleUserInput = function(move) {

  if (move === '\u0003') {
    console.log("Thanks for using me, ciao!")
    process.exit();
  }
  if (move === 'w') {
    connection.write("Move: up")
  }
  if (move === 'a') {
    connection.write("Move: left")
  }
  if (move === 's') {
    connection.write("Move: down")
  }
  if (move === 'd') {
    connection.write("Move: right")
  }

return move
}

module.exports={
  setupInput
}
