document.addEventListener('keydown', (event) => {
    const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);
    if (!key) return; // If no matching key, exit

    const sound = new Audio(key.getAttribute("data-sound"));
    sound.play();

    key.classList.add("active"); // Add animation effect
    setTimeout(() => key.classList.remove("active"), 200); // Remove effect after 200ms
});

