const GRAPQL_URL = 'http://localhost:9000/'

async function fetchGreeting() {
   const response = await fetch(GRAPQL_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            query: `
            query Query {
                greeting
              }
            `
        })
    })
    const {data} = await response.json();
    return data;
}

const element = document.getElementById('greeting');
element.textContent = '...Loading';

fetchGreeting().then((data) => {
    element.textContent = data.greeting;
})