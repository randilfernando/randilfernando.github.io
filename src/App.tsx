import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Home from './pages/Home';
import './style.css';

const App: React.FC = () => {
    return (
        <Router>
            <div id="app">
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
};

export default App;
