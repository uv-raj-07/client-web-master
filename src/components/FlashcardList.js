// client/src/components/FlashcardList.js
import React, { useState, useEffect } from 'react';
import Flashcard from './Flashcard';

const FlashcardList = () => {
    const [flashcards, setFlashcards] = useState([]);

    useEffect(() => {
        fetch('/api/flashcards')
            .then(res => res.json())
            .then(data => setFlashcards(data));
    }, []);

    const handleFlip = (index) => {
        setFlashcards(prevFlashcards => {
            const newFlashcards = [...prevFlashcards];
            newFlashcards[index].isFlipped = !newFlashcards[index].isFlipped;
            return newFlashcards;
        });
    };

    return (
        <div className="flashcard-list">
            {flashcards.map((flashcard, index) => (
                <Flashcard 
                    key={index} 
                    flashcard={flashcard} 
                    onFlip={() => handleFlip(index)} 
                />
            ))}
        </div>
    );
};

export default FlashcardList;
