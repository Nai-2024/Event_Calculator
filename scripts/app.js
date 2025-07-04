
const daysEl = document.querySelector('.days .big-text');
const hoursEl = document.querySelector('.hours .big-text');
const minsEl = document.querySelector('.mins .big-text');
const secsEl = document.querySelector('.secs .big-text');


// ✅ Calculate targetYear FIRST
const now = new Date();
let targetYear = now.getFullYear();

if (
  now.getMonth() > 0 || 
  (now.getMonth() === 0 && now.getDate() > 1)
) {
  targetYear += 1;
}

// ✅ Update heading AFTER targetYear is set
document.querySelector('h1').innerText = `New Year Countdown ${targetYear}`;

function calculateTimeRemaining() {
  const now = new Date();
  let targetYear = now.getFullYear();

  // If today is Jan 1 or after, target next Jan 1
  if(now.getMonth() > 0 // Month is after Jan (0 = Jan, 1 = Feb, etc.) 
  || (now.getMonth === 0 && now.getDate() > 1)) { // Jan but day after 1
    targetYear +=1;
  }

  const targetDate = new Date(`Jan 1 ${targetYear} 00:00:00`);

  const totalSeconds = Math.floor((targetDate - now) / 1000);

  const days = Math.floor(totalSeconds / (3600 * 24));
  const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return { days, hours, minutes, seconds };
}

function updateCountdown() {
  const timeRemaining = calculateTimeRemaining();

function formatTime(time) {
  if (time < 10) {
    return '0' + time;
  } else {
    return time.toString();
  }
}

  daysEl.innerHTML = formatTime(timeRemaining.days);
  hoursEl.innerHTML = formatTime(timeRemaining.hours);
  minsEl.innerHTML = formatTime(timeRemaining.minutes);
  secsEl.innerHTML = formatTime(timeRemaining.seconds);

  setTimeout(updateCountdown, 1000);
}

updateCountdown();