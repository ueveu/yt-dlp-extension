document.addEventListener("DOMContentLoaded",() => { // Funktion wird aufgerufen, wenn DOM vollstaendig geladen wurde
    const downloadButton = document.querySelector(button.download); // Sucht nach eineem Button mit der Klasse "download"

    if (downloadButton) { // Wenn Button gefunden wurde 
        const customButton = document.createElement("button"); // Erstellt ein neues Button
        customButton.TextContent ="YT-DLP DL"; // Setzt den Text des Buttons auf "YT-DLP DL"


        customButton.onclick = () => { // Funktion wird aufgerufen, wenn Button geklickt wird
            chrome.runtime.sendMessage({ action: "download_video" }); // Sendet eine Nachricht an den Erweiterungsscript, dass ein Video heruntergeladen werden soll
        };

        downloadButton.replaceWith(customButton); // Ersetzt den alten Button mit dem neuen Button
        
    }
});