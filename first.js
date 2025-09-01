 function generateCalendar(month, year) {
        const calendar = document.getElementById("calendar");
        calendar.innerHTML = "";

        const date = new Date(year, month, 1);
        const daysInMonth = new Date(year, month + 1, 0).getDate();

        let table = document.createElement("table");
        table.classList.add("calendar-table");

        // Calendar header
        const days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
        let thead = document.createElement("thead");
        let headerRow = document.createElement("tr");
        days.forEach(d => {
            let th = document.createElement("th");
            th.innerText = d;
            headerRow.appendChild(th);
        });
        thead.appendChild(headerRow);
        table.appendChild(thead);

        // Calendar body
        let tbody = document.createElement("tbody");
        let row = document.createElement("tr");

        // Empty cells before first day
        for (let i = 0; i < date.getDay(); i++) {
            let emptyCell = document.createElement("td");
            row.appendChild(emptyCell);
        }

        // Fill days
        for (let day = 1; day <= daysInMonth; day++) {
            let cell = document.createElement("td");
            cell.innerText = day;
            cell.classList.add("calendar-day");

            // toggle present/absent on click
            cell.addEventListener("click", () => {
                if (cell.classList.contains("present")) {
                    cell.classList.remove("present");
                    cell.classList.add("absent");
                } else if (cell.classList.contains("absent")) {
                    cell.classList.remove("absent");
                } else {
                    cell.classList.add("present");
                }
            });

            row.appendChild(cell);

            if ((day + date.getDay()) % 7 === 0) {
                tbody.appendChild(row);
                row = document.createElement("tr");
            }
        }

        tbody.appendChild(row);
        table.appendChild(tbody);
        calendar.appendChild(table);
    }

    // Initialize with current month
    const today = new Date();
    generateCalendar(today.getMonth(), today.getFullYear());

const sideMenu=document.querySelector('aside');
const menuBtn=document.querySelector('.menu');
const closebtn=document.querySelector('#close-btn');

menuBtn.addEventListener('click',()=>{
    sideMenu.style.display='block'
})
closebtn.addEventListener('click',()=>{
    sideMenu.style.display='none'
})