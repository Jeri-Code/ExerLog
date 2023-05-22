import React from 'react';
import exerciseData from './test.json';

const ExerciseList = ({ selectedDay }) => {
    const exercises = exerciseData[selectedDay] || [];
    return (
        <div>
        <h2>{selectedDay}</h2>
        {exercises.length === 0 ? (
            <p>No exercises found for {selectedDay}.</p>
        ) : (
            <ul>
            {exercises.map((exercise, index) => (
                <li key={index}>{exercise}</li>
            ))}
            </ul>
        )}
        </div>
    );
};

export default ExerciseList;