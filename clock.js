"use strict";

// Document ready event handler
$(document).ready(function () {
    // Move clock-related functions to library_clock.js
    // Create a clock object using the createClock function and pass the necessary DOM elements
    const clock = createClock($("#hours"), $("#minutes"), $("#seconds"), $("#ampm"));

    // Move stopwatch-related functions to library_stopwatch.js
    // Create a stopwatch object using the createStopwatch function and pass the necessary DOM elements
    const stopwatch = createStopwatch($("#s_minutes"), $("#s_seconds"), $("#s_ms"));

    // Start the clock using the created clock object
    clock.start();

    // Event handler for the Start button
    // Start the stopwatch when the Start button is clicked
    $("#start").click(() => {
        stopwatch.start();
    });

    // Event handler for the Stop button
    // Stop the stopwatch when the Stop button is clicked
    $("#stop").click(() => {
        stopwatch.stop();
    });

    // Event handler for the Reset button
    // Reset the stopwatch when the Reset button is clicked
    $("#reset").click(() => {
        stopwatch.reset();
    });

    // The remaining code is now in the library files and will be handled by the created objects
});
