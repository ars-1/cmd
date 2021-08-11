function createButton() {
    let btn = document.createElement("button");
    let btn_text = document.createTextNode("Click");
    btn.appendChild(btn_text);
    btn.onclick = "main()";
    document.body.appendChild(btn);
}

function welcomeMsg() {
    let success = document.createElement("h2");
    success.style.color = "white";
    success.style.marginBottom = "80px";
    success.style.textAlign = "center";
    let ptext = document.createTextNode("Welcome User!");
    success.appendChild(ptext);
    document.body.appendChild(success);
    createInput();
}


function accessGranted() {
    let success = document.createElement("p");
    success.style.color = "green";
    let ptext = document.createTextNode("Access Granted!");
    success.appendChild(ptext);
    document.body.appendChild(success);
}


function accessDenied() {
    let success = document.createElement("p");
    success.style.color = "red";
    let ptext = document.createTextNode("Access Denied!");
    success.appendChild(ptext);
    document.body.appendChild(success);
}

function adminMsg() {
    let success = document.createElement("p");
    success.style.color = "white";
    let ptext = document.createTextNode("Welcome Administrator!");
    success.appendChild(ptext);
    document.body.appendChild(success);
}

function permissionAuthorized() {
    let success = document.createElement("p");
    success.style.color = "yellow";
    let ptext = document.createTextNode("Permission Authorized!");
    success.appendChild(ptext);
    document.body.appendChild(success);
}

function guideMsg() {
    let success = document.createElement("p");
    success.style.color = "white";
    let ptext = document.createTextNode("Sorry!, uknown command, type help to see list of known commands or type help-all to see their uses as well");
    success.appendChild(ptext);
    document.body.appendChild(success);
}

function printed(element) {
    let success = document.createElement("p");
    success.style.color = "white";
    let ptext = document.createTextNode(element);
    success.appendChild(ptext);
    document.body.appendChild(success);
}