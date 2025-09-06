  const calendarBody = document.getElementById("calendarBody");
const monthYear = document.getElementById("monthYear");

const date = new Date();
const year = date.getFullYear();
const month = date.getMonth();
const today = date.getDate(); // 👈 current date

const months = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

monthYear.textContent = `${months[month]} ${year}`;

const firstDay = new Date(year, month, 1).getDay();
const daysInMonth = new Date(year, month + 1, 0).getDate();

let dayCount = 1;
for (let i = 0; i < 6; i++) {
  const row = document.createElement("tr");
  for (let j = 0; j < 7; j++) {
    const cell = document.createElement("td");
    if (i === 0 && j < firstDay) {
      cell.textContent = "";
    } else if (dayCount <= daysInMonth) {
      cell.textContent = dayCount;

      // ⭐ Highlight today's date
      if (dayCount === today) {
        cell.style.backgroundColor = "#0cacddff"; // yellow
        cell.style.fontWeight = "bold";
        cell.style.border = "2px solid #333";
      }

      dayCount++;
    } else {
      cell.textContent = "";
    }
    row.appendChild(cell);
  }
  calendarBody.appendChild(row);
}

    