document.addEventListener('keydown', (event) => {
  if (event.keyCode === 65) {
    new Audio('65.mp3').play(); // A key
  } else if (event.keyCode === 87) {
    new Audio('87.mp3').play(); // W key
  } else if (event.keyCode === 83) {
    new Audio('83.mp3').play(); // S key
  } else if (event.keyCode === 70) {  // For key "F"
    new Audio('70.mp3').play(); // F key
  } else if (event.keyCode === 68) {  // For key "D"
    new Audio('68.mp3').play(); // D key plays sound 71.mp3
  } else if (event.keyCode === 71) {  // For key "G"
    new Audio('51.mp3').play(); // G key
  }
});
