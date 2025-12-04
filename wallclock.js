// Get the clock hands
const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.minute-hand');
const hourHand = document.querySelector('.hour-hand');
const digitalTime = document.getElementById('digitalTime');

// Function to set the clock
function setClock() {
    const now = new Date();
    
    // Get seconds, minutes, and hours
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();
    
    // Calculate the degrees for each hand
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    const minutesDegrees = ((minutes / 60) * 360) + ((seconds / 60) * 6) + 90;
    const hoursDegrees = ((hours / 12) * 360) + ((minutes / 60) * 30) + 90;
    
    // Apply the rotation to each hand
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
    
    // Update digital time
    const timeString = now.toLocaleTimeString();
    digitalTime.textContent = timeString;
}

// Add minute ticks to the clock
function addTicks() {
    const clockFace = document.querySelector('.clock-face');
    
    for (let i = 0; i < 60; i++) {
        const tick = document.createElement('div');
        tick.classList.add('tick');
        
        // Make every 5th tick larger
        if (i % 5 === 0) {
            tick.classList.add('tick-major');
        }
        
        tick.style.transform = `rotate(${i * 6}deg)`;
        clockFace.appendChild(tick);
    }
}

// Initialize the clock
function initClock() {
    // Add ticks to the clock face
    addTicks();
    
    // Set the clock immediately and then every second
    setClock();
    setInterval(setClock, 1000);
}

// Start the clock when the page loads
document.addEventListener('DOMContentLoaded', initClock);