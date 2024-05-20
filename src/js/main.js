const countEntries = document.getElementById('count-entries');
const saveEntries = document.getElementById('save-entries');
let counts = 0;

// eslint-disable-next-line no-unused-vars
function increment() {
  counts += 1;
  countEntries.textContent = counts;
}

// eslint-disable-next-line no-unused-vars
function save() {
  const countStr = ` ${counts} - `;
  saveEntries.textContent += countStr;
  countEntries.textContent = 0;
  counts = 0;
}
