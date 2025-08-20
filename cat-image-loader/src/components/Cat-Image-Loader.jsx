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
            <button onClick={fetchCatImage}>Show Me a Cat 🐱</button><br/>
            {loading && (
                <div style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100vw',
                    height: '100vh',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    pointerEvents: 'none',
                    backgroundColor: 'rgba(255, 255, 255, 0.8)',
                    zIndex: 9999
                }}>
                    <img src={loading} alt="Loading..." width="400" height="400" />
                </div>
            )}
        </div>
    );
}

export default CatImageLoader;