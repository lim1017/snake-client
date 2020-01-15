const net = require('net');
const { IP, PORT } = require('./constants');


/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn =net.createConnection({ 
    host: IP, 
    port: PORT
  });

  conn.on('connect', () =>{
    console.log('Connected! FINALLY ');
    conn.write("Name: BOB");  //sends to server
    // conn.write("Move: up");  //sends to server
  });

  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });
  

  // interpret incoming data as text
  conn.setEncoding('utf8'); 

  return conn;
}

console.log('Connecting ...');


module.exports={
  connect
}