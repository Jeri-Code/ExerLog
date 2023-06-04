import React, { useState, useEffect } from "react";

export default function WeeklyPlanner(props) {
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    async function getData() {
      const data = await fetch('http://localhost:8000/exercises');
      const dataJson = await data.json();
      setExercises(dataJson);
    }

    getData();
  }, []);

  useEffect(() => {
    // Get the dropdown element
    let dropdown = document.getElementById("daysDropdown");

    // Define the days of the week
    let days = [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday"
    ];

    // Clear existing options in the dropdown
    dropdown.innerHTML = "";

    // Create options for each day and add them to the dropdown
    for (let i = 0; i < days.length; i++) {
      let option = document.createElement("option");
      option.value = days[i];
      option.text = days[i];
      dropdown.appendChild(option);
    }

    // Add event listener for dropdown change
    dropdown.addEventListener("change", function () {
      let selectedDay = this.value;
      displayNotepad(selectedDay);
    });

    function displayNotepad(day) {
      // Clear the previous notepad if it exists
      let notepadContainer = document.getElementById("notepadContainer");
      notepadContainer.innerHTML = "";

      // Create the notepad elements
      let notepad = document.createElement("div");
      notepad.className = "notepad";
      notepad.innerHTML = "<h2>" + day + "</h2>";

      let addExerciseButton = document.createElement("button");
      addExerciseButton.textContent = "Add Exercise";
      addExerciseButton.addEventListener("click", function () {
        addExercise(day);
      });

      let exerciseList = document.createElement("ul");
      exerciseList.id = "exerciseList";

      notepad.appendChild(addExerciseButton);
      notepad.appendChild(exerciseList);

      notepadContainer.appendChild(notepad);
    }

    function addExercise(day) {
      let exerciseList = document.getElementById("exerciseList");
      let exerciseInput = prompt("Enter the exercise:");

      if (exerciseInput) {
        let exerciseItem = document.createElement("li");
        exerciseItem.textContent = exerciseInput;
        exerciseList.appendChild(exerciseItem);
      }
    }
  }, []);

  return (
    <div className="container">
    {
      console.log(exercises)
    }
      <select id="daysDropdown">
        <option value="">Select a day</option>
      </select>
      <div id="notepadContainer"></div>
    </div>
  );
}