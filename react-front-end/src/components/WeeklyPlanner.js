import React, { useState } from 'react';
import ExerciseList from './ExerciseList';

const daysOfWeek = [
    { value: 'Monday', label: 'Monday' },
    { value: 'Tuesday', label: 'Tuesday' },
    { value: 'Wednesday', label: 'Wednesday' },
    { value: 'Thursday', label: 'Thursday' },
    { value: 'Friday', label: 'Friday' },
    { value: 'Saturday', label: 'Saturday' },
    { value: 'Sunday', label: 'Sunday' },
];

export default function WeeklyPlanner() {
    const [selectedDay, setSelectedDay] = useState(daysOfWeek[0]);

    const handleDayChange = (selectedOption) => {
        if (selectedOption && selectedOption.value === 'all') {
        setSelectedDay({ value: 'all', label: 'View all days' });
        } else if (selectedOption) {
        setSelectedDay(daysOfWeek.find((day) => day.value === selectedOption.value));
        }
    };

    const handleViewAllDays = () => {
        setSelectedDay({ value: 'all', label: 'View all days' });
    };

    return (
        <div className="Week">
        <div className="dropdown">
            <babel>Select Day: </babel>
            <select
            value={selectedDay.value}
            onChange={(e) =>
                handleDayChange(daysOfWeek.find((day) => day.value === e.target.value))
            }
            >
            {daysOfWeek.map((day) => (
                <option key={day.value} value={day.value}>
                {day.label}
                </option>
            ))}
            <option value="all" onClick={handleViewAllDays}>
                View all days
            </option>
            </select>
        </div>
        <div className="box">
            <ExerciseList selectedDay={selectedDay.value} />
        </div>
        </div>
    );
}
