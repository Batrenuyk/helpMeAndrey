var clickElem = document.getElementById('click');
var onclickElem = clickElem.querySelector('.onclick');

var click2Elem = document.getElementById('click2');
var onclick2Elem = click2Elem.querySelector('.onclick');

var click3Elem = document.getElementById('click3');
var onclick3Elem = click3Elem.querySelector('.onclick');

onclickElem.onclick = function() {
  clickElem.classList.add('open');
  
  click2Elem.classList.remove('open');
  click3Elem.classList.remove('open');
};

onclick2Elem.onclick = function() {
  click2Elem.classList.add('open');
  
  clickElem.classList.remove('open');
  click3Elem.classList.remove('open');
};

onclick3Elem.onclick = function() {
  click3Elem.classList.add('open');
  
  clickElem.classList.remove('open');
  click2Elem.classList.remove('open');
};

clickElem.classList.add('open');
