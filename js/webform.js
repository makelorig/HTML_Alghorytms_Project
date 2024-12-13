document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("tableForm");
    const resultContainer = document.getElementById("resultContainer");
    const saveButton = document.getElementById("saveConfig");
    const loadButton = document.getElementById("loadConfig");


    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const days = parseInt(document.getElementById("days").value);
        const lessons = parseInt(document.getElementById("lessons").value);
        const language = document.getElementById("language").value;


        resultContainer.innerHTML = "";

        const table = document.createElement("table");
        table.classList.add("generated-table");

        const headers = {
            ru: ["День недели", "Занятия"],
            en: ["Day of the Week", "Lessons"],
        };

        const headerRow = document.createElement("tr");
        headers[language].forEach((text) => {
            const th = document.createElement("th");
            th.textContent = text;
            headerRow.appendChild(th);
        });
        table.appendChild(headerRow);

        const weekDays = {
            ru: ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"],
            en: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        };

        for (let i = 0; i < days; i++) {
            const row = document.createElement("tr");

            const dayCell = document.createElement("td");
            dayCell.textContent = weekDays[language][i];
            row.appendChild(dayCell);

            const lessonCell = document.createElement("td");
            lessonCell.textContent = `1 - ${lessons}`;
            row.appendChild(lessonCell);

            table.appendChild(row);
        }

        resultContainer.appendChild(table);
    });
    saveButton.addEventListener("click", () => {
        const config = {
            days: document.getElementById("days").value,
            lessons: document.getElementById("lessons").value,
            language: document.getElementById("language").value,
        };
        localStorage.setItem("tableConfig", JSON.stringify(config));
        alert("Настройки сохранены!");
    });

    loadButton.addEventListener("click", () => {
        const config = JSON.parse(localStorage.getItem("tableConfig"));
            document.getElementById("days").value = config.days;
            document.getElementById("lessons").value = config.lessons;
            document.getElementById("language").value = config.language;
    });
});