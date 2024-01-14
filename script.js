const dateTime = document.querySelector('#dateTime');

options = {
    hour: 'numeric', minute: 'numeric',
    year: 'numeric', month: 'long', day: 'numeric',
  };
  const clock = () => dateTime.innerText=new Intl.DateTimeFormat('en-EN', options).format(new Date())
  clock()
  setInterval(clock, 1000);