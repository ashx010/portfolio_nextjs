"use client";
import React, { useState, useEffect } from 'react';

const Typewriter = ({ words, delay = 1000, typingSpeed = 150, deletingSpeed = 100 }) => {
    const [index, setIndex] = useState(0); // Tracks the current word index
    const [subIndex, setSubIndex] = useState(0); // Tracks the current character index
    const [isDeleting, setIsDeleting] = useState(false); // Tracks if we're deleting

    useEffect(() => {
        if (subIndex === words[index].length + 1 && !isDeleting) {
            // Finished typing a word, wait for `delay` and start deleting
            setTimeout(() => setIsDeleting(true), delay);
        } else if (subIndex === 0 && isDeleting) {
            // Finished deleting a word, move to the next word
            setIsDeleting(false);
            setIndex((prevIndex) => (prevIndex + 1) % words.length);
        }
    }, [subIndex, isDeleting, index, words, delay]);

    useEffect(() => {
        const timeout = setTimeout(() => {
            // If we're deleting, move backward; otherwise, move forward
            setSubIndex((prevSubIndex) => prevSubIndex + (isDeleting ? -1 : 1));
        }, isDeleting ? deletingSpeed : typingSpeed);

        return () => clearTimeout(timeout);
    }, [subIndex, isDeleting, typingSpeed, deletingSpeed]);

    return (
        <div className="typewriter-box">
            <h1>{`${words[index].substring(0, subIndex)}`}</h1>
        </div>
    );
};

export default Typewriter;