import React from 'react';
import { MoonLoader } from 'react-spinners';

const LoaderComponent = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', width: '100%' }}>
            <MoonLoader />
        </div>
    )
}

export default LoaderComponent;