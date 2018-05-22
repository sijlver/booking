import React, { Component } from 'react';

import FilterPanel from './components/FilterPanel';
import ListHotels from './components/ListHotels';

function HomePage() {
    return (
        <div>
            <FilterPanel />
            <ListHotels />
        </div>
    );
}

export default HomePage;
