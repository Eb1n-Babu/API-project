import React from 'react';

function JokeApi(props) {

    const [joke , setJoke] = React.useState(null);

    const fetchJoke = async () => {
        const response = await fetch('https://v2.jokeapi.dev/joke/Programming?type=single');
        const data = await response.json();
        setJoke(data.joke);
    }

    return (
        <div>
            <button onClick={fetchJoke}>button</button>
            <h1>{joke}</h1>
        </div>
    );
}

export default JokeApi;