
const jokes = async () => {
    try {
        const config = { headers: { Accept: 'application/json' } };
        const fetchJokes = await axios.get("https://icanhazdadjoke.com", config);
        return fetchJokes.data.joke;
    }
    catch (e) {
        return 'Sorry, No jokes Available. Try Again!';
    }

}

const button = document.querySelector('button');
const jokesArea = document.querySelector('.jokesArea');
const para = document.createElement('para');

button.addEventListener('click', async function () {
    const joke = await jokes();
    para.innerText = joke;
    jokesArea.append(para);
})



