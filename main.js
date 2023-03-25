var hour = document.getElementById("hour");
var minute = document.getElementById("minute");
var seconds = document.getElementById("seconds");
const clock = document.getElementById('clock');

function updateClock() {
   
  
    // Get current time
    const now = new Date();
  
    // Format the time as hours, minutes, and seconds
    const hr = now.getHours().toString().padStart(2, '0');
    const min = now.getMinutes().toString().padStart(2, '0');
    const secs = now.getSeconds().toString().padStart(2, '0');
  
    // Update the clock's text with the formatted time
    hour.textContent = hr;
    minute.textContent= min;
    seconds.textContent = secs
  }


  
  // Call updateClock function every second
  setInterval(updateClock, 1000);
  