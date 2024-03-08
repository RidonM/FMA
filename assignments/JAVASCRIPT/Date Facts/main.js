const factsContainer = document.getElementById('factsContainer');
let input = document.getElementById('date');
let list = document.getElementById('facts');

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '541609f8d9msh08e5f442c23daf0p1a6ec8jsn33478ad3710b',
        'X-RapidAPI-Host': 'numbersapi.p.rapidapi.com'
    }
};

document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    getFacts(new Date(input.value));
});

async function getFacts(date) {
    let facts = await Promise.all([getFact(date), getFact(date), getFact(date),])

    facts.forEach(fact => {
        let li = document.createElement('li');
        li.textContent = `${fact} !`;
        list.appendChild(li);
    })
    factsContainer.classList.add('facts-container')
}

async function getFact(date) {
    let url = `https://numbersapi.p.rapidapi.com/${date.getMonth() + 1}/${date.getDate()}/date?fragment=true&json=true`;

    let res = await fetch(url, options);
    let data = await res.json();
    return data.text;
}