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
function OpenPopUp(texte) {
    document.getElementById("mainPopUp").innerHTML=texte;
    document.getElementById("popUp").style.display="block";
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