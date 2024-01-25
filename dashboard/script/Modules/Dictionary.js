//Free api, no key needed
const url = `https://api.dictionaryapi.dev/api/v2/entries/en/`;
const submit = document.querySelector('#submit-3');
// const results = document.querySelector('#results-3');

//Fetch dictionary based on user input
async function getData(input) {
    try {
      const response = await axios.get(`${url}${input}`);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }

 async function dictionarySubmit() {
    const results = document.querySelector('#results-3');
    const input = document.querySelector('#input-3').value;
    const data = await getData(input);
    results.innerHTML = 
        `<h2>Word: ${data[0].word}</h2>
        <p><b>Definition:</b> ${data[0].meanings[0].definitions[0].definition}</p>
        <p><b>Example:</b> ${data[0].meanings[0].definitions[0].example}</p>`;
}

export {submit, dictionarySubmit};

//IDEA: Show the word of the day as a default and change if user submits something else