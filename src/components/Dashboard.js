// client/src/components/Dashboard.js
import React, { useState, useEffect } from 'react';

const Dashboard = () => {
    const [flashcards, setFlashcards] = useState([]);
    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState('');

    useEffect(() => {
        fetch('/api/flashcards')
            .then(res => res.json())
            .then(data => setFlashcards(data));
    }, []);

    const addFlashcard = () => {
        const newFlashcard = { question, answer };
        fetch('/api/flashcards', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newFlashcard),
        })
            .then(res => res.json())
            .then(data => setFlashcards([...flashcards, data]));
    };

    const deleteFlashcard = (id) => {
        fetch(`/api/flashcards/${id}`, {
            method: 'DELETE',
        }).then(() => setFlashcards(flashcards.filter(fc => fc.id !== id)));
    };

    return (
        <div className="dashboard">
            <h2>Admin Dashboard</h2>
            <input 
                type="text" 
                placeholder="Question" 
                value={question} 
                onChange={(e) => setQuestion(e.target.value)} 
            />
            <input 
                type="text" 
                placeholder="Answer" 
                value={answer} 
                onChange={(e) => setAnswer(e.target.value)} 
            />
            <button onClick={addFlashcard}>Add Flashcard</button>

            <ul>
                {flashcards.map(fc => (
                    <li key={fc.id}>
                        {fc.question} - {fc.answer}
                        <button onClick={() => deleteFlashcard(fc.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Dashboard;
