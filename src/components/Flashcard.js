// client/src/components/Flashcard.js
import React from 'react';

const Flashcard = ({ flashcard, onFlip }) => {
    return (
        <div className="flashcard" onClick={onFlip}>
            <div className={flashcard.isFlipped ? 'flipped' : ''}>
                <div className="front">
                    {flashcard.question}
                </div>
                <div className="back">
                    {flashcard.answer}
                </div>
            </div>
        </div>
    );
};

export default Flashcard;
