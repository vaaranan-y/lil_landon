import React from 'react';
import Welcome from './Welcome.js';
import HotelInfo from './HotelInfo.js';

const Main = () => {
    return (
        <main id="wrapper">
            <Welcome />
            <HotelInfo />
          </main>
    );
}

export default Main; // makes this component available to other components