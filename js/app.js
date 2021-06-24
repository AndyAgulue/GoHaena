
var numbers = document.getElementById('box');
for(i=0; i<100; i++){
  var span = document.createElement('span');
  span.textContent = i;
  numbers.appendChild(span);
}

var num = numbers.getElementsByTagName('span');
var index = 0;

function nextNum(){
  num[index].style.display= 'none';
  index = (index + 1) % num.length;
  num[index].style.display = 'initial';
}

function prevNum(){
  num[index].style.display= 'none';
  index = (index - 1 + num.length) % num.length;
  num[index].style.display = 'initial';
}

let spinner = new ISpin(document.getElementById('number-input'), {

  // wrapper class
  wrapperClass: 'ispin-wrapper',

  // button class
  buttonsClass: string,

  // step size
  step: 1,

  // page step
  pageStep: 20,

  // repeat interval
  repeatInterval: 200,

  // enable overflow
  wrapOverflow: false,

  // parse
  parse: string => number,

  // format
  format: number => string,

  // disable the input spinner
  disabled: false,

  // min/max values
  max: 100,
  min: 0,

  // onChange callback
  onChange: null

});
