function BoutonTechnique() {
    loadHtml("mainWindow", ".//includes//main-technique.html");
} 
function BoutonResidences() {
    loadHtml("mainWindow", ".//includes//main-residences.html");
} 
function BoutonGroupes() {
    loadHtml("mainWindow", ".//includes//main-groupes.html");
} 
function BoutonPersonnes() {
    loadHtml("mainWindow", ".//includes//main-personnes.html");
} 

function OpenPopUp(lien) {
    console.log(lien);
    loadHtml("popUp", lien)
    document.getElementById("mainWindow").style.brightness= "50%";
    document.getElementById("popUp-container").style.display="block";
}

function ClosePopUp() {
    document.getElementById("mainWindow").style.backgroundColor= "white";
    document.getElementById("popUp-container").style.display="none";
}

 const loadHtml = function(parentElementId, filePath) {
    const init = {
        method : "GET",
        headers : { "Content-Type" : "text/html" },
        mode : "cors",
        cache : "default"
    };
    
    const req = new Request(filePath, init);
        fetch(req)
        .then(function(response) {
            return response.text();
        })
        .then(function(body) {
        document.getElementById(parentElementId).innerHTML = body;
        });
    };