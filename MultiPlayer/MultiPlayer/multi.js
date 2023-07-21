const hostButton = document.querySelector('.host');
  const joinButton = document.querySelector('.join');

  hostButton.addEventListener('click', () => {
    const username = prompt('Enter your username:');
    if (username !== null && username.trim() !== '') {
      // Redirect to the waiting page after entering host details
      window.location.href = `waiting.html?code=HOST`;
    } else {
      alert('Invalid username. Please try again.');
    }
  });

  joinButton.addEventListener('click', () => {
    const joinCode = prompt('Enter the join code:');
    if (joinCode !== null && joinCode.trim() !== '') {
      // Redirect to the waiting page after entering join code
      window.location.href = `waiting_join.html?code=${joinCode}`;
    } else {
      alert('Invalid join code. Please try again.');
    }
  });

  const themeToggle = document.getElementById('themeToggle');
const body = document.body;

themeToggle.addEventListener('change', () => {
  body.classList.toggle('dark-mode', themeToggle.checked);
});