const time = document.querySelector('#time');
const date = document.querySelector('#date');

function updateClock() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const timeString = `${hours}:${minutes}`;
  const options = {month: 'short', day: 'numeric' };
  const dateString = now.toLocaleDateString('en-EN', options);
  time.innerText = `${timeString}`;
  date.innerText = `${dateString}`;
}

// Uppdatera klockan direkt
updateClock();

// Uppdatera klockan varje sekund
setInterval(updateClock, 1000);