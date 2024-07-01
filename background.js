chrome.runtime.onInstalled.addListener(() => { // Funktion wird aufgerufen, wenn Erweiterung installiert wird
    console.log("Extension installed"); // Ausgabe einer Nachricht in der Konsole
});


chrome.runtime.onMessage.addListener((request, sender, sendResponse) => { // Funktion wird aufgerufen, wenn eine Nachricht an das Erweiterungsscript gesendet wird
    if (request.action === "download_video") { // Wenn eine Nachricht mit dem Namen "download_video" gesendet wird
        fetch('http://localhost:5000/download', { // Funktion wird mit der URL 'http://localhost:5000/download' aufgerufen
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json'
            }, 
            body: JSON.stringify({ url: sender.tab.url }) // JSON-Objekt wird mit der URL des Tabs erstellt
        })
        .then(response => response.json()) // Antwort wird als JSON-Objekt interpretiert
        .then(data =>{
            console.log("Download finished", data);
            sendResponse({ message: "Download finished", data: data }); // Nachricht wird mit dem JSON-Objekt gesendet
        })
        .catch(error => { // .catch 
            console.error ("Download failed", error);
        });
    }
});