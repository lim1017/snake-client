const net = require('net');
const connect = require('./client');
const {MOVE_UP_KEY, MOVE_DOWN_KEY, MOVE_LEFT_KEY, MOVE_RIGHT_KEY, Spam_Msg} = require('./constants');


let connection;


const setupInput = function(conn) {
  

  const stdin = process.stdin;
  connection=conn
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();

  stdin.on('data', (data) =>{
    // console.log(data, ' data')
    handleUserInput(data)
  })


  return stdin;
}

const handleUserInput = function(move) {

  if (move === '\u0003') {
    console.log("Thanks for using me, ciao!")
    process.exit();
  }
  if (move === MOVE_UP_KEY) {
    connection.write("Move: up")
  }
  if (move === MOVE_LEFT_KEY) {
    connection.write("Move: left")
  }
  if (move === MOVE_DOWN_KEY) {
    connection.write("Move: down")
  }
  if (move === MOVE_RIGHT_KEY) {
    connection.write("Move: right")
  }

  if (move === Spam_Msg) {                       // special key for msg
    connection.write("Say: SUPER")
  }

return move
}

module.exports={
  setupInput
}
