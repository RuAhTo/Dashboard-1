const time = document.querySelector('#time');
const date = document.querySelector('#date');
const editor = new Quill('#editor', {
    theme: 'snow',
    placeholder: 'Skriv något...',
    bounds: '#editor-container',
    modules: {
      toolbar: [
        [{ 'header': [1, 2, false] }],                       // Headers
        ['bold', 'italic', 'underline', 'strike'],          // Text formatting options
        [{ 'list': 'ordered'}, { 'list': 'bullet' }],      // Ordered and unordered lists
      ]
    }
  });

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

import { createApi } from 'unsplash-js';

const serverApi = createApi({
  accessKey: 'WWaa0MhT1V_IfQ_E0T949JQW0L2-HvWjjXdEq0fUrFY',
});

const browserApi = createApi({
  apiUrl: 'http://127.0.0.1:5500/',
});