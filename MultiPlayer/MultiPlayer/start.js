const themeToggle = document.getElementById('themeToggle');
const body = document.body;

themeToggle.addEventListener('change', () => {
  body.classList.toggle('dark-mode', themeToggle.checked);
});

function showOptions() {
    const options = document.getElementById('options');
    options.style.display = 'block';
  }
  
  function singlePlayer() {
    window.location.href = 'index1.html'; // Redirect to the single player webpage
  }
  
  function multiPlayer() {
    window.location.href = './index.html'; // Redirect to the single player webpage
  }
  