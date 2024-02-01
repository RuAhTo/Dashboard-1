const url = `https://api.dictionaryapi.dev/api/v2/entries/en/`;
const submit = document.querySelector('#submit-3');
const results = document.querySelector('#results-3');

const getData = async () => {
    const input = document.querySelector('#input-3').value;
    const response = await fetch(`${url}${input}`);
    const data = await response.json();
    console.log(data);
    return data;
}

async function getResult() {
    const data = await getData();
    results.innerHTML = 
        `<h2>Word: ${data[0].word}</h2>
        <p><b>Definition:</b> ${data[0].meanings[0].definitions[0].definition}</p>
        <p><b>Example:</b> ${data[0].meanings[0].definitions[0].example}</p>`;
};

export {getResult, submit};