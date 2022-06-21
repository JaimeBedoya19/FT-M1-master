'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  let nuevo=0;
  let i=0;
  while(num>0){
    nuevo = nuevo + (num%10)*(Math.pow(2,i));
    num = parseInt(num/10);
    i++ 
  }
  return nuevo;

}

function DecimalABinario(num) {
  // tu codigo aca
  return num.toString(2);

}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}