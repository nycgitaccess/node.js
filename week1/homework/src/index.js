'use strict';

// TODO: Write the homework code in this file


let http = require('http');
const port = 3000;
let state = 10;
let server = http.createServer((req, response) =>{

  if(req.url == '/add'){
    state += 1;
    response.write(`add 1 to state now the state is after ${state}`)
  }else if(req.url == '/sub'){
    state -= 1;
    response.write(`add 1 to state now the state is after ${state}`)
  }else if(req.url == '/state'){

    response.write(`state:------- ${state}`)
  }else if(req.url == '/reset'){
    state = 10;
    response.write(`back to start state ${state}`)
  }else if(req.url == '/bad'){
    response.statusCode = 404;
    response.write(`Not Found`);
  }else{
    response.write(`i am only able to to do addition and subtruction so please
      write 'add' or 'sub' to change state number`);
  }

response.end();
});
server.listen(port, function(){
  console.log(`server on port ${port}`)
})
