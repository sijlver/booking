import React, { Component } from 'react';

import { Header, Footer } from './components';
import { RootNavigation } from './navigations';
import './styles.css';

function App() {
    return (
        <div>
            <main>
                <Header />
                <RootNavigation />
            </main>
            <Footer />
        </div>
    );
}

export default App;
