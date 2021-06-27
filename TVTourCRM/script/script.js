function BoutonTechnique() {
    resetSubMenus();
    loadHtml("mainWindow", ".//includes//main-technique.html");
    document.getElementById("techniqueSubMenu").style.display="block";
} 
function BoutonResidences() {
    resetSubMenus();
    loadHtml("mainWindow", ".//includes//main-residences.html");
    document.getElementById("residencesSubMenu").style.display="block";
} 
function BoutonGroupes() {
    resetSubMenus();
    loadHtml("mainWindow", ".//includes//main-groupes.html");
    document.getElementById("groupesSubMenu").style.display="block";
} 
function BoutonPersonnes() {
    resetSubMenus();
    loadHtml("mainWindow", ".//includes//main-personnes.html");
    document.getElementById("personnesSubMenu").style.display="block";
} 
function resetSubMenus() {
    document.getElementById("techniqueSubMenu").style.display="none";
    document.getElementById("residencesSubMenu").style.display="none";
    document.getElementById("groupesSubMenu").style.display="none";
    document.getElementById("personnesSubMenu").style.display="none";
    ClosePopUp();
}

function OpenPopUp(lien) {
    console.log(lien);
    loadHtml("popUp", lien)
    document.getElementById("mainWindow").style.brightness= "50%";
    document.getElementById("popUp-container").style.display="block";
}
function ClosePopUp() {
    document.getElementById("popUp-container").innerHTML="";
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