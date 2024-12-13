(function () {
    window.addEventListener("load", () => {
        const loadTime = performance.timing.domContentLoadedEventEnd - performance.timing.navigationStart;
        const footer = document.querySelector("footer");
        if (footer) {
            const loadInfo = document.createElement("p");
            loadInfo.textContent = `Страница загрузилась за ${loadTime} мс.`;
            footer.appendChild(loadInfo);
        }
    });
})();
