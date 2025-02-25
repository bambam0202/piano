document.addEventListener('keydown', (event) => {
  if (event.keyCode === 65) {
    new Audio('65.mp3').play(); // A key
  } else if (event.keyCode === 87) {
    new Audio('87.mp3').play(); // W key
  } else if (event.keyCode === 83) {
    new Audio('83.mp3').play(); // S key
  } else if (event.keyCode === 70) {  
    new Audio('70.mp3').play(); // F key
  } else if (event.keyCode === 68) {  
    new Audio('68.mp3').play(); // D key plays sound 68.mp3
  } else if (event.keyCode === 71) {  
    new Audio('51.mp3').play(); // G key plays sound 51.mp3
  } else if (event.keyCode === 69) {  
    new Audio('69.mp3').play(); // E key plays sound 69.mp3 (fixed comment)
  } else if (event.keyCode === 72) {  
    new Audio('72.mp3').play(); // H key
  } else if (event.keyCode === 74) {  
    new Audio('74.mp3').play(); // J key (newly added)
  } else if (event.keyCode === 75) {  
    new Audio('52.mp3').play(); 
  } else if (event.keyCode === 76) {  
    new Audio('34.mp3').play(); // L key (newly added)
  } else if (event.keyCode === 84) {  
    new Audio('12.mp3').play(); 
  }
});
