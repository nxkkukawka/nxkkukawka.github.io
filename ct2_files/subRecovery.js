/***************************** Prefill SubRecovery Script ************************/
//Generate Ticket

var emptyInputBoxBg = "rgb(255, 87, 51)";
var inputBg = "rgb(255, 87, 51)";

function flTicketFunction(){

    //Gathers and generates notes for sub recovery ticket
    if (document.getElementById("flPOE").checked === true){var flCbPoe =" - Power-cycled POE\n"}
        else { var flCbPoe = ""; };

    if (document.getElementById("flPOELight").checked === true){var flCbPOELight = " - Verified POE light (On/Solid)\n"}
        else {var flCbPOELight = ""};

    if (document.getElementById("flReseated").checked === true){ var flCbReseated =" - Reseated cables\n"}
        else {var flCbReseated = "" };

    if (document.getElementById("flDhcp").checked === true){var flCbDhcp =" - DHCP Server / No CPE\n"}
        else {var flCbDhcp = ""};

    // service call/other ticket
    if (document.getElementById("flSvc").checked === true){var flCbSvc =" - SVC has been added to the service call scheduler\n"}
        else {var flCbSvc = " - No SVC has been added to the service call scheduler\n"};

    if (document.getElementById("flPSub").checked === true){var flCbPSub =" - Sub recovery pre truck roll appt ticket has been created\n"}
        else { var flCbPSub = " - No Sub recovery pre truck roll appt ticket has been created\n"};

    if (document.getElementById("flCabling").checked === true){var flCablingCb =" - Verified Cables\n"}
        else { var flCablingCb = ""};

    //text input options
    if (document.getElementById("flName").value === ""){ document.getElementById("flName").style.backgroundColor = emptyInputBoxBg;
        var flTiName = "unknown"}
        else { var flTiName = document.getElementById("flName").value; document.getElementById("flName").style.backgroundColor = inputBg;}

    if (document.getElementById("flSwap").value === ""){ document.getElementById("flSwap").style.backgroundColor = emptyInputBoxBg;
        var flTiSwap = "Customer can not reach/see POE cable"}
        else { var flTiSwap = document.getElementById("flSwap").value; document.getElementById("flSwap").style.backgroundColor = inputBg;}

    if (document.getElementById("flRouterIP").value === ""){ document.getElementById("flRouterIP").style.backgroundColor = emptyInputBoxBg;
        var flTiRouterIP = "unknown"}
        else { var flTiRouterIP = document.getElementById("flRouterIP").value; document.getElementById("flRouterIP").style.backgroundColor = inputBg;}

    if (document.getElementById("flSMIP").value === ""){ document.getElementById("flSMIP").style.backgroundColor = emptyInputBoxBg;
        var flTiSMIP = "unknown"}
        else { var flTiSMIP = document.getElementById("flSMIP").value; document.getElementById("flSMIP").style.backgroundColor = inputBg;}

    if (document.getElementById("flAPIP").value === ""){ document.getElementById("flAPIP").style.backgroundColor = emptyInputBoxBg;
        var flTiAPIP = "unknown"}
        else { var flTiAPIP = document.getElementById("flAPIP").value; document.getElementById("flAPIP").style.backgroundColor = inputBg;}

    if (document.getElementById("flAPSSID").value === ""){document.getElementById("flAPSSID").style.backgroundColor = emptyInputBoxBg;
        var flTiAPSSID = "unknown"}
        else {var flTiAPSSID = document.getElementById("flAPSSID").value; document.getElementById("flAPSSID").style.backgroundColor = inputBg;};
    var flTiAPSSID = document.getElementById("flAPSSID").value


    if (document.getElementById("APLog").value === ""){document.getElementById("APLog").style.backgroundColor = emptyInputBoxBg}
        else {document.getElementById("APLog").style.backgroundColor = inputBg};
  var flAPLog = document.getElementById("APLog").value


  //compile FL ticket body and subject
  flApSubject = document.getElementById('flAPSSID').value; if (flApSubject == ""){flApSubject = "";} else {flApSubject = flApSubject;}
  flAccountSubject = document.getElementById('flAccount').value; if (flAccountSubject == ""){flAccountSubject = "";} else {flAccountSubject = flAccountSubject;}

  var flTs = ""

  var flTicketSubjectLine = flApSubject + " | " + flAccountSubject + " | " + 'FAST LANE' + " | " + 'No connection (SM down)' + today;
  var flTicket = `###FAST LANE ESCALATION###\n\n Caller: ${flTiName}\n Best callback: ${flTiNumber}\n Call ID: ${flTiCallID}\n Account Type: ${flTiAccount}\n\n Last Known SM IP: ${flTiSMIP}\n Last Known AP IP: ${flTiAPIP}\n Last Known AP SSID: ${flTiAPSSID}\n Last Known Customer Router IP: ${flTiRouterIP}\n\n Blind Troubleshooting Completed:\n ${flCbPoe} ${flCbPOELight} ${flCbDhcp}\n Cabling:\n ${flCablingCb}  - ${flTiSwap}\n ${flCbReseated}\n Service Call:\n ${flCbSvc} ${flCbPSub}\n Logs from the AP log:\n${flAPLog}\n\n Next Step: Escalating Directly to STS`

  //Alert for empty input boxes
  blankTicketPrompt = "*** All fields are required ***";
  blankFastLaneInputError =  document.getElementById('flName' && 'flNumber' && 'flCallID' && 'flAccount' && 'flAPIP' && 'flSMIP' && 'flAPSSID' && 'flRouterIP').value && document.getElementById('flPOe' && 'flPOELight' && 'flDhcp' && 'flCabling' && 'flSwap' && 'flReseated' && 'flSvc' && 'flPSub').checked;

  if (blankSubRecoveryInputError == ""){document.getElementById("blankTicketPrompt").innerHTML = blankTicketPrompt;} else {document.getElementById("blankTicketPrompt").innerHTML = "";}
  if (blankSubRecoveryInputError == ""){flTicket = "*** All fields are required ***";} else {flTicket = flTicket;}
  if (blankSubRecoveryInputError == ""){flTicketSubjectLine = "*** All fields are required ***";} else {flTicketSubjectLine = flTicketSubjectLine;}


  //output for body and subject
  document.getElementById("flTicketText").value = flTicket;
  document.getElementById("flSubjectOutput").value = flTicketSubjectLine;

  return false;
}

document.getElementById("flTicketGen").addEventListener('click', flTicketFunction);



function prepFastLane(){

    //gather values
    let Vpoe = document.getElementById("etPOE").checked;
    let VPOELight = document.getElementById("etPOELight").checked;
    let Vreseat = document.getElementById("etReseated").checked;
    let Vdhcp = document.getElementById("etDHCPcpe").checked;
    let Vapip = document.getElementById("etAPIP");
    let Vapssid = document.getElementById("etAPSSID");
    let Vsmip = document.getElementById("etSMIP");
    let Vname = document.getElementById('etName');
    let Vnumber = document.getElementById('etNumber');
    let Vcallid = document.getElementById('etCallID');
    let Vrouter = document.getElementById('etRouterIP');
    let Vaccount = document.getElementById('etAccount');
    let Vswap = document.getElementById('flSwap');
    if(document.getElementById('etSwapped2').checked)
    {
      Vswap.value = 'Swapped POE/Router Cabling';
    }
    else
    {
      if(document.getElementById('etSMeth').checked){
        Vswap.value = 'SM cable Goes Through Wall';
      }
      else{
        Vswap.value = document.getElementById('flSwap').checked;
      }
    }

    let VCables = document.getElementById('etCabling').checked;


    //implement values
    document.getElementById("flSMIP").value = Vsmip.value;
    document.getElementById("flAPIP").value = Vapip.value;
    document.getElementById("flAPSSID").value = Vapssid.value;
    document.getElementById("flAPFREQUENCY").value = Vaccount.value;
    document.getElementById("flAPSUBCOUNT").value = Vaccount.value;
    document.getElementById("flTARGETSUB").value = Vaccount.value;


}


// Move to subrecovery and prefill fields
var flButton = $("#flButton");
flButton.on('click', prepFastLane);

// date script
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1;
    var yyyy = today.getFullYear().toString().substr(2,2);
    today = " | " + mm+'-'+dd+'-'+yyyy;
      if (flName ==""){today = "";}
