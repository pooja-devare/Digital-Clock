const hourSpan = document.getElementById
("hour");
const minuteSpan = document.getElementById
("minute");
const secondSpan = document.getElementById
("second");
const amorpmSpan = document.getElementById
("amorpm");

// console.log(hourSpan, minuteSpan, secondSpan, amorpmSpan);

function changeTime(){
    const date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    
    let amorpm;

    
    hourSpan.textContent = hour;
    minuteSpan.textContent = minute;
    secondSpan.textContent = second;

   

    // if (hour >= 0 || hour <= 12){
    //     amorpm = "AM"
    // }
    // else{
    //     amorpm = "PM"
    // }

    // amorpmSpan.textContent = amorpm;

    function convert24To12(time) {
        // Split the time string into hours and minutes.
        // const [hour, minute] = time.split(':');
      
        // Convert the hour to 12-hour format.
        let hour12 = hour % 12;
        if (hour12 == 0) {
          hour12 = 12;
        }
      
        // Get the AM/PM indicator.
        const amorpm = hour >= 12 ? 'PM' : 'AM';
      
        // Return the time string.
        return `${hour12}:${minute} ${amorpm}`;
      }
      

/*
    function displayTimeWithAMPM(date) {
        // Get the hour.
        const hour = date.getHours();
      
        // Convert the hour to 12-hour format.
        let hour12 = hour % 12;
        if (hour12 === 0) {
          hour12 = 12;
        }
      
        // Get the AM/PM indicator.
        const ampm = hour >= 12 ? 'PM' : 'AM';
      
        // Return the time string.
        return `${hour12}:${date.getMinutes()} ${ampm}`;
      }
   */   

// amorpm.innerHTML = hr>12 ? "PM" : "AM";
}

// changeTime()

setInterval(changeTime, 1000)

