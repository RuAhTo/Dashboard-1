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
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],       // Ordered and unordered lists
    ]
  }
});

function updateClock() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const timeString = `${hours}:${minutes}`;
  const options = { month: 'short', day: 'numeric' };
  const dateString = now.toLocaleDateString('en-EN', options);
  time.innerText = `${timeString}`;
  date.innerText = `${dateString}`;
}

// Update the clock immediately
updateClock();

// Update the clock every second
setInterval(updateClock, 1000);

function loadNotes() {
  const savedText = localStorage.getItem('text');
  if (savedText) {
    editor.root.innerHTML = savedText;
  }
}

// Call the loadNotes function to retrieve and display the saved notes
loadNotes();

function saveNotes() {
  const text = editor.root.innerHTML;
  localStorage.setItem('text', text);
}

editor.on('text-change', function() {
  saveNotes();
});


// Welcome page
window.addEventListener('load', function() {
  const loadingScreen = document.getElementById('welcome-page');
  const pageContent = document.getElementById('main-page');

  setTimeout(function() {
    loadingScreen.style.display = 'none';
    // pageContent.style.display = 'block';
  }, 3000);
});
