"use strict";

// Clock module with private state and public methods
const createClock = (hourSpan, minuteSpan, secondSpan, ampmSpan) => {
    // Private function to pad a single digit with leading zero
    const padSingleDigit = num => num.toString().padStart(2, "0");

    //  function to display the current time
    const displayCurrentTime = () => {
        const now = new Date();
        let hours = now.getHours();
        let ampm = "AM"; // Default value
    
        // conditions to set Am and Pm 
        if (hours > 12) { 
            hours = hours - 12;
            ampm = "PM";
        } else { // Adjust 12 noon and 12 midnight
            switch (hours) {
                case 12: // Noon
                    ampm = "PM";
                    break;
                case 0:  // Midnight
                    hours = 12;
                    ampm = "AM";
            }
        }
        // Update clock display
        hourSpan.text(hours);
        minuteSpan.text(padSingleDigit(now.getMinutes()));
        secondSpan.text(padSingleDigit(now.getSeconds()));
        ampmSpan.text(ampm);
    };

    //method to start the clock
    return {
        start: () => { 
            
            displayCurrentTime();
            setInterval(displayCurrentTime, 1000);
        }
    };
};
