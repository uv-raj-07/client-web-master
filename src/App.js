// client/src/App.js
import React from 'react';
import FlashcardList from './components/FlashcardList';
import Dashboard from './components/Dashboard';

function App() {
    return (
        <div className="App">
            <h1>Flashcard Learning Tool</h1>
            <FlashcardList />
            <Dashboard />
        </div>
    );
}

export default App;
