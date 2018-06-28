function fib() {
    let curr = 1;
    let next = 1;
    function nacci() {
        let temp = next;
        next += curr;
        console.log(curr);
        curr = temp;        
    }
    return nacci
  }
  var fibCounter = fib();
  fibCounter() // should console.log "1"
  fibCounter() // should console.log "1"
  fibCounter() // should console.log "2"
  fibCounter() // should console.log "3"
  fibCounter() // should console.log "5"
  fibCounter() // should console.log "8"