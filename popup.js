document.getElemendbyId("downloadBtn").addEventListener("click", () => { // fügt einen Klick-Event Listener zum Button mit der ID 'downloadBtn' hinzu
    chrome.runtime.sendMessage({ action: "download_video"}); //   // Sendet eine Nachricht an das Hintergrundskript, wenn der Button geklickt wird
}) 