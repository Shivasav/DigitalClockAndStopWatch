"use strict";

// Stopwatch module with private state and public methods
const createStopwatch = (minuteSpan, secondSpan, msSpan) => {
    // Private state for elapsed time and timer
    let elapsed = { minutes: 0, seconds: 0, milliseconds: 0 };
    let stopwatchTimer = null;

    
    const padSingleDigit = num => num.toString().padStart(2, "0");

    // function to handle the stopwatch 
    const tickStopwatch = () => {
        elapsed.milliseconds = elapsed.milliseconds + 10;

        // conditions added
        if (elapsed.milliseconds === 1000) {
            elapsed.seconds++;
            elapsed.milliseconds = 0;
        }

        if (elapsed.seconds === 60) {
            elapsed.minutes++;
            elapsed.seconds = 0;
        }

        // Update stopwatch display
        minuteSpan.text(padSingleDigit(elapsed.minutes));
        secondSpan.text(padSingleDigit(elapsed.seconds));
        msSpan.text(elapsed.milliseconds);
    };

    // methods for starting, stopping, and resetting the stopwatch
    return {
        start: () => {
            // Check if the timer is already running
            if (!stopwatchTimer) {
                tickStopwatch();
                stopwatchTimer = setInterval(tickStopwatch, 10);
            }
        },
        stop: () => {
            // Stop the timer and reset the stopwatchTimer variable
            clearInterval(stopwatchTimer);
            stopwatchTimer = null;
        },
        reset: () => {
            // Stop the timer, reset elapsed time, and update stopwatch display
            clearInterval(stopwatchTimer);
            stopwatchTimer = null; // Reset the stopwatchTimer variable
            elapsed = { minutes: 0, seconds: 0, milliseconds: 0 };
            minuteSpan.text("00");
            secondSpan.text("00");
            msSpan.text("000");
        }
    };
};
