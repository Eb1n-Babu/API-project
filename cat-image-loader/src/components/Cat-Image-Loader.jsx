import React from 'react';

function CatImageLoader(props) {

    const [loading, setLoading] = React.useState(false);

    const fetchCatImage = async () => {
        const response = await fetch('https://api.thecatapi.com/v1/images/search')
        const data = await response.json();
        setLoading(data[0].url);
    }
    return (
        <div>
            <button onClick={fetchCat}>Show Me a Cat 🐱</button><br/>
            {catUrl && <img src={catUrl}  alt="Random Cat" width="400" height="400"/>}
        </div>
    );
}

export default CatImageLoader;