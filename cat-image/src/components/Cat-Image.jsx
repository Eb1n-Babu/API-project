import React from 'react';

function CatImage(props) {

    const [cat, setCat] = React.useState("")

    const fetchCatImage = async () => {
        const response = await fetch('https://api.thecatapi.com/v1/images/search')
        const data = await response.json();
        setCat(data[0].url)
    }

    return (
        <div>
            <button onClick={fetchCatImage}>button</button>
            {cat && <img src={cat} alt="A cute cat" width="300" />}
        </div>
    );
}

export default CatImage;