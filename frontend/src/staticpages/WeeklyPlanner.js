import React, { useEffect } from "react";

export default function WeeklyPlanner(props) {
  useEffect(() => {
    // Get the dropdown element
    var dropdown = document.getElementById("daysDropdown");

    // Define the days of the week
    var days = [
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
    for (var i = 0; i < days.length; i++) {
      var option = document.createElement("option");
      option.value = days[i];
      option.text = days[i];
      dropdown.appendChild(option);
    }

    // Add event listener for dropdown change
    dropdown.addEventListener("change", function () {
      var selectedDay = this.value;
      displayNotepad(selectedDay);
    });

    function displayNotepad(day) {
      // Clear the previous notepad if it exists
      var notepadContainer = document.getElementById("notepadContainer");
      notepadContainer.innerHTML = "";

      // Create the notepad elements
      var notepad = document.createElement("div");
      notepad.className = "notepad";
      notepad.innerHTML = "<h2>" + day + "</h2>";

      var addExerciseButton = document.createElement("button");
      addExerciseButton.textContent = "Add Exercise";
      addExerciseButton.addEventListener("click", function () {
        addExercise(day);
      });

      var exerciseList = document.createElement("ul");
      exerciseList.id = "exerciseList";

      notepad.appendChild(addExerciseButton);
      notepad.appendChild(exerciseList);

      notepadContainer.appendChild(notepad);
    }

    function addExercise(day) {
      var exerciseList = document.getElementById("exerciseList");
      var exerciseInput = prompt("Enter the exercise:");

      if (exerciseInput) {
        var exerciseItem = document.createElement("li");
        exerciseItem.textContent = exerciseInput;
        exerciseList.appendChild(exerciseItem);
      }
    }
  }, []);

  return (
    <div className="container">
      <select id="daysDropdown">
        <option value="">Select a day</option>
      </select>
      <div id="notepadContainer"></div>
    </div>
  );
}
