const net = require('net');

/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn =net.createConnection({ 
    host: '172.46.2.204', 
    port: 50541
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