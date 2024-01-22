// Welcome page / On load functions
function welcomePage() {
  const loadingScreen = document.getElementById('welcome-page');
  setTimeout(function() {
    loadingScreen.style.display = 'none';
    console.log('loaded');
  }, 3000);
}
welcomePage();

//Date and Time
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

// Save the title to local storage
const editableTitle = document.querySelector('.user-title');

function saveTitle() {
  const title = editableTitle.innerText.trim() || 'Dashboard';
  localStorage.setItem('editableTitle', title);
}

function loadTitle() {
  const savedTitleValue = localStorage.getItem('editableTitle');
  editableTitle.innerText = savedTitleValue || 'Dashboard';
}

// Call loadTitle when the page loads
window.addEventListener('load', loadTitle);

// Save the title when the user stops editing (blur event)
editableTitle.addEventListener('blur', saveTitle);

// Save the title on every input change (input event)
editableTitle.addEventListener('input', saveTitle);