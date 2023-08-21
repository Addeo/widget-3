const widgetOpenButton = document.getElementById("widget-open-button");

if (widgetOpenButton) {
    widgetOpenButton.addEventListener('click', () => {
        window.leadCM.open()
    })
}
