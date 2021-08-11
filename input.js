
// Main Function
function createInput(idd) {

    //Create Input Field
    let inputEle = document.createElement("input");
    inputEle.id = idd;
    inputEle.width = "100%";

    //OnkeyDown Function to get Input
    inputEle.onkeydown = function () {
        let ele = document.getElementById(idd);

        //Condition yes
        if (ele.value == "yes") {
            printed(ele.value);
            accessGranted();
            document.body.removeChild(inputEle);
            createInput(idd);
        }

        //Condition no
        if (ele.value == "no") {
            printed(ele.value);
            accessDenied();
            document.body.removeChild(inputEle);
            createInput(idd);
        }

        //Condition ok
        if (ele.value == "ok") {
            printed(ele.value);
            permissionAuthorized();
            document.body.removeChild(inputEle);
            createInput(idd);
        }

        //Condition ars
        if (ele.value == "ARS" || ele.value == "ars") {
            printed(ele.value);
            adminMsg();
            document.body.removeChild(inputEle);
            createInput(idd);
        }

        if (ele.value == "data" || ele.value == "Data") {
            printed(ele.value);
            printed("Gathering Required Information...");
            setTimeout('dbs()', 1000);
            document.body.removeChild(inputEle);
            createInput(idd);
        }

        //Condition Uknown
        if (ele.value != "ars" || ele.value != "ARS" || ele.value != "yes" || ele.value != "no" || ele
            .value != "ok") {
            if (ele.value.length >= 10) {
                guideMsg();
                document.body.removeChild(inputEle);
                createInput(idd);
            }
        }

    }
    document.body.appendChild(inputEle);
}