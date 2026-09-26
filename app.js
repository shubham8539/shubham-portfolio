document.getElementById("year").textContent = new Date().getFullYear();

const workLine = document.getElementById("work-line-text");
const workMessages = [
  "Migrate with confidence.",
  "Automate the heavy lifting.",
  "Make collaboration effortless.",
  "Put AI to useful work.",
];
let messageIndex = 0;

window.setInterval(() => {
  workLine.classList.add("is-changing");
  window.setTimeout(() => {
    messageIndex = (messageIndex + 1) % workMessages.length;
    workLine.textContent = workMessages[messageIndex];
    workLine.classList.remove("is-changing");
  }, 240);
}, 2800);
