// console.log('The House always Wins!')

const idInput = document.getElementById('idInput')
const colorInput = document.getElementById('colorInput')

// console.log(idInput);
// console.log(colorInput);

function setcard(){
  const card = document.getElementById(idInput.value);
  // console.log(card);
  card.style.color = (colorInput.value);
}
// function logReset(event){
  
// }

// const form = document.getElementById('idInput');
// const log = document.getElementById('colorInput');
// form.addEventListener('reset', logReset);