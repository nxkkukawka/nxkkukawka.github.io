/************************************ Every Ticket Script ***********************************/
/*************************ver 2.0 A complete re-write by J Newhart***************************/
//Global Vars
var nullBgColor = "#FF5733";
var bg = "backgroundColor";

function everyTicketFunction()
{
  //Function Vars
  var etBody = "";
  var etSubject = "";
  var etTitle = "###EVERY TICKET###";
  var etCheckboxes = "";
  var etExtraCheckBoxes = "";
  var etPingCheckboxes = "";
  var etBypassResults = "";
  var etRanPings = "";
  var etTaranaStats = "";
  var etLteStats = "";
  var etStatsCOM = "";
  var etStats = "";
  var etCheckboxesTS = "";
  var etSpeedBody = "";
  var etSpeedMain = "\n\nPlan upgrade stats";


  //Clear all warnings from HTML dom
  $('#etName').css(bg, "");
  $('#etCallID').css(bg, "");
  $('#etNumber').css(bg, "");
  $('#etAccount').css(bg, "");
  $('#etSMIP').css(bg, "");
  $('#etAPIP').css(bg, "");
  $('#etAPSSID').css(bg, "");
  $('#etRouterIP').css(bg, "");
  $('#etRouterType').css(bg, "");
  $('#etIssue').css(bg, "");
  $('#etSummary').css(bg, "");
  $('#etPoETS').css(bg, "");
  $('#etRouterTS').css(bg, "");
  $('#etAPTS').css(bg, "");
  $('#etResolution').css(bg, "");
  $('#etNextStep').css(bg, "");
  $('#etZyxelPW').css(bg, "");
  $('#etNextStepOther').css(bg, "");
  $('#etTCSMethod').css(bg, "");
  $('#etSiteSSID').css(bg, "");
  $('#etSiteIP').css(bg, "");
  $('#etMTRPing').css(bg, "");
  $('#etSiteIP').css(bg, "");
  $('#etSiteSSID').css(bg, "");
  document.getElementById("etError").innerHTML = "";
  document.getElementById("etErrorPW").innerHTML = "";

  //Every Ticket Body
  //Gather all vars
  var etName = $('#etName').val() || "";
  var etCallID = $('#etCallID').val() || "";
  var etNumber = $('#etNumber').val() || "";
  var etAccount = $('#etAccount').val() || "";
  var etLanStatus = $('#etLanStatus').val() || "";
  var etSMIP = $('#etSMIP').val() || "";
  var etAPIP = $('#etAPIP').val() || "";
  var etAPSSID = $('#etAPSSID').val() || "";
  var etRouterIP = $('#etRouterIP').val() || "";
  var etRouterType = $('#etRouterType').val() || "";
  var etIssue = $('#etIssue').val() || "";
  var etSummary = $('#etSummary').val() || "";
  var etPoETS = $('#etPoETS').val() || "";
  var etRouterTS = $('#etRouterTS').val() || "";
  var etCPETS = $('#etCPETS').val() || "";
  var etResolution = $('#etResolution').val() || "";
  var etNextStep = $('#etNextStep').val() || "";
  var etZyxelPW = $('#etZyxelPW').val() || "";
  var etNextStepOther = $('#etNextStepOther').val() || "";
  var etTCSMethod = $('#etTCSMethod').val() || "";
  var etSiteSSID = $('#etSiteSSID').val() || "";
  var etSiteIP = $('#etSiteIP').val() || "";
  var etPCMAC = $('#etPCMAC').val() || "";
  var etRTRMAC = $('#etRTRMAC').val() || "";
  var etNextStep = $('#etNextStep').val() || "";
  var etTimeFrame = $('#etTimeFrame').val() || "";

  //Pings
  var etSMPing = $('#etSMPing').val() || "";
  var etRTRPing = $('#etRTRPing').val() || "";
  var etAPPing = $('#etAPPing').val() || "";
  var etMTRPing = $('#etMTRPing').val() || "";
  
  //Logs
  var etCPELogs = $('#etCPELogs').val() || "";
  var etAPLogs = $('#etAPLogs').val() || "";

  // CPE and AP Stats
  var etSMUptime = $('#etSMUptime').val() || "";
  var etAPUptime = $('#etAPUptime').val() || "";
  var etSMSignal = $('#etSMSignal').val() || "";
  var etAPSignal = $('#etAPSignal').val() || "";
  var etSMSplits = $('#etSMSplits').val() || "";
  var etAttemptedAP = $('#etAttemptedAP').val() || "";

  // Commercial CPE and AP Stats
  var etApprovalCOM = $('#etApprovalCOM').val() || "";
  var etSMUptimeCOM = $('#etSMUptimeCOM').val() || "";
  var etAPUptimeCOM = $('#etAPUptimeCOM').val() || "";
  var etSMSignalCOM = $('#etSMSignalCOM').val() || "";
  var etSMSplitsCOM = $('#etSMSplitsCOM').val() || "";
  var etSMConnectionTimeCOM = $('#etSMConnectionTimeCOM').val() || "";
  var etSMAPFrequencyCOM = $('#etSMAPFrequencyCOM').val() || "";

  // Tarana Stats
  var etTaranaSN = $('#etTaranaSN').val() || "";
  var etTaranaSector = $('#etTaranaSector').val() || "";
  var etTaranaMGMTIP = $('#etTaranaMGMTIP').val() || "";
  var etTaranaCurrentBN = $('#etTaranaCurrentBN').val() || "";
  var etTaranaPrimaryBN = $('#etTaranaPrimaryBN').val() || "";
  var etTaranaUptime = $('#etTaranaUptime').val() || "";
  
  // LTE Stats
  var etIMSI = $('#etIMSI').val() || "";
  var etIMEI = $('#etIMEI').val() || "";
  var etRSSI = $('#etRSSI').val() || "";
  var etLteUptime = $('#etLteUptime').val() || "";
  var etPCI = $('#etPCI').val() || "";
  var etBTSID = $('#etBTSID').val() || "";
  var etSector = $('#etSector').val() || "";

  // Subject line vars
  var etAccountSubject = $('#etAccount').val() || "";
  var etIssueSubject = $('#etIssue').val() || "";
  var etMethodSubject = $('#etTCSMethod').val() || "";
  var etAPSSIDSubject = $('#etAPSSID').val() || "";

  // Fiber Information vars
  var etFAS = $('#etFAS').val() || "";
  var etSwitchPort = $('#etSwitchPort').val() || "";
  var etLightLevel = $('#etLightLevel').val() || "";
  var etFiberRouterIP = $('#etFiberRouterIP').val() || "";

  //Upgrade Vars
  var etSpeedPlan = $('#etSpeedPlan').val() || "";
  var etSpeedAP = $('#etSpeedAP').val() || "";
  var etSpeedCount = $('#etSpeedCount').val() || "";
  var etSpeedRadio = $('#etSpeedRadio').val() || "";
  var etSpeedMHz = $('#etSpeedMHz').val() || "";
  var etSpeedComCount = $('#etSpeedComCount').val() || "";
  var etSpeedBusCount = $('#etSpeedBusCount').val() || "";
  var etSpeedApproved = $('#etSpeedApproved').val() || "";

  //Error checking vars
  var etErrorPW = "*** Zyxel Password Is Required ***";
  var etRouterTypeError = $('#etRouterType').val() || ""; 
  var etZyxelPWError = $('#etZyxelPW').val() || "";
  var etNextStepOtherError = $('#etNextStepOtherError').val() || "";
  var etCallIDError = "*** CallID required ***";
  var etError = "*** Not All Inputs Have Been Filled ***";
  var etPingError = "*** MTR pings required if AP pings are out of spec ***";
  var etSSError = "***If SS was successful you need to include AP IP and SSID***";

  //Formatting Vars
  //Cx vars
  if (etAPSSID == ""){etTitle = "###NOTES###";}
  if (etName == ""){$('#etName').css(bg, nullBgColor);} else {etName = "\nWho is calling: " + etName;}
  if (etCallID == ""){$('#etCallID').css(bg, nullBgColor);} else {etCallID = "\nCallID: " + etCallID;}
  if (etNumber == ""){$('#etNumber').css(bg, nullBgColor);} else {etNumber = "\nBest callback: " + etNumber;}
  if (etAccount == ""){$('#etAccount').css(bg, nullBgColor);} else {etAccount = "\nAccount Type: " + etAccount;}
  if (etLanStatus == ""){} else {etLanStatus = "\n- " + etLanStatus;}
  if (etSMIP == ""){$('#etSMIP').css(bg, nullBgColor);} else {etSMIP = "\nCPE IP: " + etSMIP;}
  if (etAPIP == ""){$('#etAPIP').css(bg, nullBgColor);} else {etAPIP = "\nAP IP: " + etAPIP;}
  if (etAPSSID == ""){$('#etAPSSID').css(bg, nullBgColor);} else {etAPSSID = "\nAP SSID: " + etAPSSID;}
  if (etRouterIP == ""){$('#etRouterIP').css(bg, nullBgColor);} else {etRouterIP = "\nCustomer Router IP: " + etRouterIP;}
  if (etIssue == ""){$('#etIssue').css(bg, nullBgColor);} else {etIssue = "\nIssue: " + etIssue;}
  if (etTCSMethod == ""){$('#etTCSMethod').css(bg, nullBgColor);} else {etTCSMethod = "\nContact Method: " + etTCSMethod;}
  if (etSummary == ""){$('#etSummary').css(bg, nullBgColor);} else {etSummary = "\n\nSummary:\n" + etSummary;}
  if (etPoETS == ""){$('#etPoETS').css(bg, nullBgColor);} else {etPoETS = "\n\nPoE:\n" + etPoETS;}
  if (etRouterTS == ""){$('#etRouterTS').css(bg, nullBgColor);} else {etRouterTS = "\n\nRouter:\n" + etRouterTS;}
  if (etCPETS == ""){$('#etCPETS').css(bg, nullBgColor);} else {etCPETS = "\n\nCPE:\n" + etCPETS;}
  if (etRouterType == ""){$('#etRouterType').css(bg, nullBgColor);} else {etRouterType = "\nRouter Type: " + etRouterType;}
  if (etZyxelPW == ""){$('#etZyxelPW').css(bg, nullBgColor);} else {etZyxelPW = "\nZyxel Password: " + etZyxelPW;}
  if (etNextStepOther == ""){$('#etNextStepOther').css(bg, nullBgColor);} else {etNextStepOther = "\nOther: " + etNextStepOther;}
  if (etResolution == ""){$('#etResolution').css(bg, nullBgColor);} else {etResolution = "\n\nResolution:\n" + etResolution;}
  if (etNextStep == ""){$('#etNextStep').css(bg, nullBgColor);} else {etNextStep = "\n\nNext Step: " + etNextStep;}
  if (etTimeFrame == ""){} else {etTimeFrame = "\n\nTime frame for peak time issue: " + etTimeFrame;}

  //Bypass/Authentication formatting
  if (etPCMAC == ""){etPCMAC = ""} else {etPCMAC = "\n- Authenticated Computer - MAC: " + etPCMAC;}
  if (etRTRMAC == ""){etRTRMAC = "";} else {etRTRMAC = "\n- Authenticated Router - MAC: " + etRTRMAC;}

  //CPE,AP,RTR, and MTR pings
  if (etSMPing == ""){etSMPing = "";} else {etSMPing = "\n\nCPE Pings: \n" + etSMPing;}
  if (etRTRPing == ""){etRTRPing = "";} else {etRTRPing = "\n\nRTR Pings: \n" + etRTRPing;}
  if (etAPPing == ""){etAPPing = "";} else {etAPPing = "\n\nAP Pings: \n" + etAPPing;}
  if (etMTRPing == ""){etMTRPing = "";} else {etMTRPing = "\n\nMTR: \n" + etMTRPing;}
  if (etSMPing || etAPPing || etMTRPing || etRTRPing != ""){etRanPings = "\n- Ran Pings";} else {etRanPings = "";}
  
  //CPE and AP logs
  if (etCPELogs == ""){etCPELogs = "";} else {etCPELogs = "\n\nCPE Logs: \n" + etCPELogs;}
  if (etAPLogs == ""){etAPLogs = "";} else {etAPLogs = "\n\nAP Logs: \n" + etAPLogs;}

  //CPE and AP stats
  if (etSMUptime == ""){etSMUptime = "";} else {etSMUptime = "\n- CPE Uptime: " + etSMUptime;}
  if (etAPUptime == ""){etAPUptime = "";} else {etAPUptime = "\n- AP Uptime: " + etAPUptime;}
  if (etSMSignal == ""){etSMSignal = "";} else {etSMSignal = "\n- CPE Signal is " + etSMSignal + " dBm";}
  if (etAPSignal == ""){etAPSignal = "";} else {etAPSignal = "\n- AP Signal is " + etAPSignal + " dBm";}
  if (etSMSplits == ""){etSMSplits = "";} else {etSMSplits = "\n- CPE is seeing a split chain of " + etSMSplits + " dBm";}
  if (etSMUptime == "" && etAPUptime == "" && etSMSignal == "" && etSMSplits == ""){etStats = "";} else {etStats = "\n\nStats:";}
  if($('#etSiteIP').val() != "" && $('#etAPIP').val() != "" ){etAPIP = "\nAP IP: " + etSiteIP + " (NEW AP IP)";}
  if($('#etSiteSSID').val() != "" && $('#etAPSSID').val() != "" ){etAPSSID = "\nAP SSID: " + etSiteSSID + " (NEW AP)";}
  if(etAttemptedAP == ""){etAttemptedAP = "";} else {etAttemptedAP = "\n- Site Survey Notes:\n" + etAttemptedAP + "\n";}

  //Comm CPE and AP stats
  if (etApprovalCOM == ""){etApprovalCOM = "";} else {etApprovalCOM = "\nCom Account Approved By: " + etApprovalCOM;}
  if (etSMUptimeCOM == ""){etSMUptimeCOM = "";} else {etSMUptimeCOM = "\n- CPE Uptime: " + etSMUptimeCOM;}
  if (etAPUptimeCOM == ""){etAPUptimeCOM = "";} else {etAPUptimeCOM = "\n- AP Uptime: " + etAPUptimeCOM;}
  if (etSMSignalCOM == ""){etSMSignalCOM = "";} else {etSMSignalCOM = "\n- CPE Signal is " + etSMSignalCOM + " dBm";}
  if (etSMSplitsCOM == ""){etSMSplitsCOM = "";} else {etSMSplitsCOM = "\n- CPE is seeing a split chain of " + etSMSplitsCOM + " dBm";}
  if (etSMConnectionTimeCOM == ""){etSMConnectionTimeCOM = "";} else {etSMConnectionTimeCOM = "\n- AP Connection Time: " + etSMConnectionTimeCOM;}
  if (etSMAPFrequencyCOM == ""){etSMAPFrequencyCOM = "";} else {etSMAPFrequencyCOM = "\n- AP Frequency: " + etSMAPFrequencyCOM;}
  if (etSMUptimeCOM == "" && etAPUptimeCOM == "" && etSMSignalCOM == "" && etSMSplitsCOM == "" && etSMConnectionTimeCOM == "" && etSMAPFrequencyCOM == ""){etStatsCOM = "";}
  else {etStatsCOM = "\n\nCommercial Stats:";}

  //Tarana stats
  if (etTaranaSN == ""){etTaranaSN = "";} else {etTaranaSN = "\n- Serial number: " + etTaranaSN;}
  if (etTaranaSector == ""){etetTaranaSectorIMEI = "";} else {etTaranaSector = "\n- Sector: " + etTaranaSector;}
  if (etTaranaMGMTIP == ""){etTaranaMGMTIP = "";} else {etTaranaMGMTIP = "\n- Managment IP: " + etTaranaMGMTIP;}
  if (etTaranaCurrentBN == ""){etTaranaCurrentBN = "";} else {etTaranaCurrentBN = "\n- Current BN: " + etTaranaCurrentBN;}
  if (etTaranaPrimaryBN == ""){etTaranaPrimaryBN = "";} else {etTaranaPrimaryBN = "\n- Primary BN: " + etTaranaPrimaryBN;}
  if (etTaranaUptime == ""){etTaranaUptime = "";} else {etTaranaUptime = "\n- Uptime: " + etTaranaUptime;}
  if (etTaranaSN == "" && etTaranaSector == "" && etTaranaMGMTIP == "" && etTaranaCurrentBN == "" && etTaranaPrimaryBN == "" && etTaranaUptime == ""){etTaranaStats = "";} else {etTaranaStats = "\n\nTarana Stats:";}

  //LTE stats
  if (etIMSI == ""){etIMSI = "";} else {etIMSI = "\n- IMSI: " + etIMSI;}
  if (etIMEI == ""){etIMEI = "";} else {etIMEI = "\n- IMEI: " + etIMEI;}
  if (etRSSI == ""){etRSSI = "";} else {etRSSI = "\n- RSSI: " + etRSSI + " dBm";}
  if (etLteUptime == ""){etLteUptime = "";} else {etLteUptime = "\n- System Uptime: " + etLteUptime;}
  if (etPCI == ""){etPCI = "";} else {etPCI = "\n- PCI: " + etPCI;}
  if (etBTSID == ""){etBTSID = "";} else {etBTSID = "\n- BTSID: " + etBTSID;}
  if (etSector == ""){etSector = "";} else {etSector = "\n- Sector: " + etSector;}
  if (etIMEI == "" && etRSSI == "" && etLteUptime == "" && etPCI == "" && etBTSID == "" && etSector == ""){etLteStats = "";} else {etLteStats = "\n\nLTE Stats:";}

  //Upgrade Formatting
  if (etSpeedPlan == ""){etSpeedPlan = ""} else {etSpeedPlan = "\n- Plan upgrade speed requested: " + etSpeedPlan;}
  if (etSpeedAP == ""){etSpeedAP = ""} else {etSpeedAP = "\n- Current AP usage: " + etSpeedAP;}
  if (etSpeedCount == ""){etSpeedCount = ""} else {etSpeedCount = "\n- Current sub count on AP: " + etSpeedCount;}
  if (etSpeedRadio == ""){etSpeedRadio = ""} else {etSpeedRadio = "\n- Radio type: " + etSpeedRadio;}
  if (etSpeedMHz == ""){etSpeedMHz = ""} else {etSpeedMHz = "\n- AP MHz: " + etSpeedMHz;}
  if (etSpeedComCount == ""){etSpeedComCount = ""} else {etSpeedComCount = "\n- Current Com sub count on AP: " + etSpeedComCount;}
  if (etSpeedBusCount == ""){etSpeedBusCount = ""} else {etSpeedBusCount = "\n- Current Bus sub count on AP: " + etSpeedBusCount;}
  if (etSpeedApproved == ""){etSpeedApproved = ""} else {etSpeedApproved = "\n- Speed plan approved: " + etSpeedApproved;}

  //Upgrade body
  if(etSpeedPlan != "" || etSpeedAP != "" || etSpeedCount != "" || etSpeedRadio != "" || etSpeedMHz != "" || etSpeedComCount != "" || etSpeedBusCount != "" || etSpeedApproved != ""){}
  else{etSpeedMain = "";}
  etSpeedBody = etSpeedMain + etSpeedPlan + etSpeedAP + etSpeedCount + etSpeedRadio + etSpeedMHz + etSpeedComCount + etSpeedBusCount + etSpeedApproved;

  //Subject line Formatting
  if (etAccountSubject == ""){etAccountSubject = "";} else {etAccountSubject = " | " + etAccountSubject;}
  if (etIssueSubject == ""){etIssueSubject = "";} else {etIssueSubject = " | " + etIssueSubject;}
  if (etMethodSubject == ""){etMethodSubject = "";} else {etMethodSubject = etMethodSubject;}
  if (etAPSSIDSubject == "" && etSector != ""){etAPSSIDSubject = " | " + $('#etSector').val() || "";} else {etAPSSIDSubject = " | " + etAPSSIDSubject;}
  if ($('#etSiteSSID').val() != ""){etAPSSIDSubject = " | " + $('#etSiteSSID').val() || "";}

  //Date formatting
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth()+1;
  var yyyy = today.getFullYear().toString().substr(2,2);
  today = " | " + mm+'-'+dd+'-'+yyyy;
    if (etName ==""){today = "";}

  //Fiber Formmatting
  if (etFAS == ""){etFAS = "";} else {etFAS = "\n\nSwitch Name: " + etFAS;}
  if (etSwitchPort == ""){etSwitchPort = "";} else {etSwitchPort = "\nSwitch Port: " + etSwitchPort;}
  if (etLightLevel == ""){etLightLevel = "";} else {etLightLevel = "\nLight Level: " + etLightLevel;}
  if (etFiberRouterIP == ""){etFiberRouterIP = "";} else {etFiberRouterIP = "\nFiber Router IP: " + etFiberRouterIP + "\n";}
  if (etFAS != "" || etSwitchPort != "" || etLightLevel != "" || etFiberRouterIP != ""){etSMIP = ""; etAPIP = ""; etAPSSID = ""; etAPSSIDSubject = " | Fiber | " + $('#etFAS').val() || "";}

  //Displays error message if any important inputs are blank
  if (etName == "" || etNumber == "" || etCallID == "" || etAccount == "" || etSMIP == "" || etAPIP == "" || etAPSSID == "" || etRouterIP == "" || etRouterType == "" || etIssue == "" || etSummary == "" || etRouterTS == "" || etPoETS == "" || etCPETS == "" || etResolution == "" || etNextStep == "")
  {document.getElementById("etError").innerHTML = etError;} else {}

  // Commercial Troubleshooting
  + ($('#etCOMSMGoodCOM')[0].checked ? "\n- CPE is accessible" : "")
  + ($('#etCOMSMBadCOM')[0].checked ? "\n- CPE is not accessible" : "")
  + ($('#etCOMSMAPCOM')[0].checked ? "\n- CPE shows on AP Station List" : "")
  + ($('#etCOMSMAP2COM')[0].checked ? "\n- CPE is not on AP Station List" : "")
  + ($('#etCOMAuthenticatedCOM')[0].checked ? "\n- Verified RTR is on CPE bridge table" : "")
  + ($('#etCOMAuthenticated2COM')[0].checked ? "\n- Verified RTR is not on CPE bridge table" : "")

  //Check boxes past t/s
  etExtraCheckBoxes =
  //Tarana Information
  ($('#etTaranaGrant2')[0].checked ? "\n- RN is getting 2 or more grants" : "")
  + ($('#etTaranaGrant')[0].checked ? "\n- Grantss Failed" : "")

  //LTE Information
  + ($('#etConnectedDevices')[0].checked ? "\n- LTE Network is showing device connected" : "")
  + ($('#etNoConnectedDevices')[0].checked ? "\n- LTE Network is NOT showing device connected" : "")

  //Plan Upgrade
  + ($('#etPlanBM')[0].checked ? "\n- Changed Plan In Billmax" : "")
  + ($('#etSMPlanName')[0].checked ? "\n- Changed CPE Name To Reflect New Plan" : "")
  + ($('#etPcSM')[0].checked ? "\n- Power-cycled CPE Remotely" : "")
  + ($('#etPcRTR')[0].checked ? "\n- Power-cycled Router Remotely" : "")
  + ($('#etProRate')[0].checked ? "\n- Explained Pro-Rated Charge" : "")
  + ($('#etBillCharge')[0].checked ? "\n- Explained Amount Will Be Charged Tonight At Midnight" : "")

  //Speedtests
  + ($('#etBypassedYes1')[0].checked ? "\n- Ran Bypassed Speedtests" : "")
  + ($('#etBypassedNo1')[0].checked ? "\n- Customer Has No Bypass Device" : "");

  //Ping results
  etPingCheckboxes =
  ($('#etSMgood')[0].checked ? "\n- CPE Pings are within spec" : "")
  + ($('#etSMbad')[0].checked ? "\n- CPE Pings are NOT within spec" : "")
  + ($('#etRTRgood')[0].checked ? "\n- RTR Pings are within spec" : "")
  + ($('#etRTRbad')[0].checked ? "\n- RTR Pings are NOT within spec" : "")
  + ($('#etAPgood')[0].checked ? "\n- AP Pings are within spec" : "")
  + ($('#etAPbad')[0].checked ? "\n- AP Pings are NOT within spec" : "")
  + ($('#etMTRgood')[0].checked ? "\n- MTR Pings are within spec" : "")
  + ($('#etMTRbad')[0].checked ? "\n- MTR NOT within spec" : "");

  // If no checkboxes are checked, this code will show no troubleshooting completed.
  var count = $("#tsCheckboxes :checked").length;
  count--;
  //Used to verify count matches expected value
  //console.log(count);

  //Checks if troubleshooting was done or not
  if(count == 1 && etPCMAC == "" && etRTRMAC == "" && etSMPing == ""  && etAPPing == "" && etRTRPing == "" && etMTRPing == "" && etRanPings == "")
  {etCheckboxesTS = "\n\n** No Troubleshooting Needed **";}else{etCheckboxesTS = "\n\nTroubleshooting Completed:";}

  //Gathers Speedtest results dynamically any test without a site selected is not added
  for (let i = 1; i < totalSpeedTests+1; i++)
  {
    var idTemp = 'byspeedtestSite'+i;
    var pingtemp = 'byPing'+i;
    var downtemp = 'byDownload'+i;
    var uptemp = 'byUpload'+i;
    var locTemp = 'byLocation'+i;
    if ($('#'+idTemp) && $('#'+idTemp).val())
    {
      var temp = $('#'+idTemp).val() || "";
      if (temp == ""){}
      else
      {
        var byPing = $('#'+pingtemp).val() || "";
        var byDownload = $('#'+downtemp).val() || "";
        var byUpload = $('#'+uptemp).val() || "";
        var byLocation = $('#'+locTemp).val() || "";
        etBypassResults += "\n\n" + temp +
        "\nPing: " + byPing + " ms" +
        "\nDownload: " + byDownload + " Mbps" +
        "\nUpload: " + byUpload + " Mbps" +
        "\nSpeed test server location: " + byLocation;
      }
    }
  }

  //Formatting Ticket body
  etBody =
  etTitle + etApprovalCOM + etName + etNumber + etCallID + etAccount
  + etSMIP + etAPIP + etAPSSID
  + etCheckboxesTS + etCheckboxes + etLanStatus + etAttemptedAP + etPCMAC + etRTRMAC + etRanPings + etPingCheckboxes
  + etFAS + etSwitchPort + etLightLevel + etFiberRouterIP
  + etRouterIP + etRouterType + etZyxelPW + etIssue + etTimeFrame + etSummary + etRouterTS + etPoETS + etCPETS
  + etStats + etTaranaStats + etTaranaSN + etTaranaSector + etTaranaMGMTIP + etTaranaCurrentBN + etTaranaPrimaryBN + etTaranaUptime
  + etLteStats + etSMUptime + etAPUptime + etIMSI + etIMEI + etPCI + etRSSI + etBTSID + etSector + etSMSignal + etAPSignal + etLteUptime + etSMSplits
  + etStatsCOM + etSMUptimeCOM + etAPUptimeCOM + etSMSignalCOM + etSMSplitsCOM + etSMConnectionTimeCOM + etSMAPFrequencyCOM
  + etExtraCheckBoxes + etBypassResults + etSpeedBody
  + etSMPing + etRTRPing + etAPPing + etMTRPing + etCPELogs + etAPLogs
  + etResolution + etNextStep;

  // + etNextStepQuick

  //if tcs communication method is not selected remove the formatting for the tcs method from the subject line
  if(etTCSMethod == '')
  {
    var etAPSSIDSubject = etAPSSIDSubject.replace(/\|/g, '');
    etAPSSIDSubject = etAPSSIDSubject.replace(/^\s+/g, '');
  }

  //Adds Tarana BN inplace of ap ssid
  if(etTaranaCurrentBN != "")
  {
    etAPSSIDSubject = "Tarana " + ($('#etTaranaCurrentBN').val() || "");
  }
  var subjectTimeFrame = $('#etTimeFrame').val() || "";
  if(etTimeFrame != "")
  {
    subjectTimeFrame = " | Peak Times: " + subjectTimeFrame;
    etTimeFrame = " | " + etTimeFrame + " ";
  }

  //Adds LTE sector inplace of ap ssid
  if(etSector != "")
  {
    etAPSSIDSubject = "LTE " + ($('#etSector').val() || "");
  }
  var subjectTimeFrame = $('#etTimeFrame').val() || "";
  if(etTimeFrame != "")
  {
    subjectTimeFrame = " | Peak Times: " + subjectTimeFrame;
    etTimeFrame = " | " + etTimeFrame + " ";
  }

  //Formatting Ticket subject
  etSubject = etMethodSubject + etAPSSIDSubject + etAccountSubject + etIssueSubject + subjectTimeFrame + today;

  //Displays error message
  if (etRouterTypeError == "Zyxel" && etZyxelPWError == ""){document.getElementById("etErrorPW").innerHTML = etErrorPW; etSubject = etErrorPW; etBody = etErrorPW;}
  else {etSubject = etSubject; etBody = etBody;}

  if (($('#etAPbad')[0].checked ? true : false) && etMTRPing == "") {etSubject = etPingError; etBody = etPingError; document.getElementById("etError").innerHTML = etError; alert(etPingError); $('#etMTRPing').css(bg, nullBgColor);}

  if (etCallID == "" && etTCSMethod == ''){alert(etCallIDError); etSubject = etCallIDError; etBody = etCallIDError}

  //Generated notes
  $('#etBody').val(etBody);
  $('#etSubject').val(etSubject);
}
/***************************** Service Call Ticket Function *****************************/
function serviceCallFunction()
{
  //Function vars
  var scServiceOut = "";
  var scServiceSubject = "";
  var scServiceTicket = "###SERVICE TICKET###";

  //Clear all warnings from HTML dom
  $('#scName').css(bg, "");
  $('#scCallID').css(bg, "");
  $('#scNumber').css(bg, "");
  $('#scAccountNumber').css(bg, "");
  $('#scApproval').css(bg, "");
  $('#scAccount').css(bg, "");
  $('#scSMIP').css(bg, "");
  $('#scAPIP').css(bg, "");
  $('#scAPSSID').css(bg, "");
  $('#scQueue').css(bg, "");
  $('#scQueueResult').css(bg, "");
  $('#scChargeDropdown').css(bg, "");
  $('#scSpecialInstructions').css(bg, "");
  $('#scInstructions').css(bg, "");
  $('#scSubjectOutput').css(bg, "");
  $('#scTicketOutput').css(bg, "");
  $('#scStatement').css(bg, "");
  $('#scDate').css(bg, "");

  // Service Call Body
  // Gather all vars
  var scName = $('#scName').val() || "";
  var scNumber = $('#scNumber').val() || "";
  var scCallID = $('#scCallID').val() || "";
  var scAccount = $('#scAccount').val() || "";
  var scSupApproval = $('#scSupApproval').val() || "";
  var scApproval = $('#scApproval').val() || "";
  var scQueue = $('#scQueue').val() || "";
  var scQueueResult = $('#scQueueResult').val() || "";
  var scChargeDropdown = $('#scChargeDropdown').val() || "";
  var scSMIP = $('#scSMIP').val() || "";
  var scAPIP = $('#scAPIP').val() || "";
  var scAPSSID = $('#scAPSSID').val() || "";
  var scInstructions = $('#scInstructions').val() || "";
  var scSummary = $('#scSummary').val() || "";
  var scDate = $('#scDate').val() || "";

  //Error checking vars
  var scError = "*** Not All Inputs Have Been Filled ***";

  //Selector Vars
  //Tower questions
  var scTower = document.querySelector('input[name="scTower"]:checked').value;
  var scTower1 = document.querySelector('input[name="scTower1"]:checked').value;
  var scTower2 = document.querySelector('input[name="scTower2"]:checked').value;
  var scTower3 = document.querySelector('input[name="scTower3"]:checked').value;
  var scTower4 = document.querySelector('input[name="scTower4"]:checked').value;
  var scTower5 = document.querySelector('input[name="scTower5"]:checked').value;

  //SVC error checking
  if ((scTower == "Yes" || scTower1 == "Yes" || scTower2 == "Yes" || scTower3 == "Yes" || scTower4 == "Yes") && scTower5 == "No")
  {
    alert("*** Be sure to verify two tech is not required or ticket will be sent back as a scheduling error ***");
  }

  var scAddress = document.querySelector('input[name="scAddress"]:checked').value;
  var scFee = document.querySelector('input[name="scFee"]:checked').value;
  var scStatement = document.querySelector('input[name="scStatement"]:checked').value;
  var scTimeSubject = " | " + document.querySelector('input[name="scTimeFrame"]:checked').value;

  //Formatting Vars
  if (scName == ""){$('#scName').css(bg, nullBgColor);} else {scName = "\nWho is calling: " + scName;}
  if (scNumber == ""){$('#scNumber').css(bg, nullBgColor);} else {scNumber = "\nContact Number: " + scNumber}
  if (scCallID == ""){$('#scCallID').css(bg, nullBgColor);} else {scCallID = "\nCall ID: " + scCallID}
  if (scAccount == ""){$('#scAccount').css(bg, nullBgColor);} else {scAccount = "\nAccount Type: " + scAccount;}
  if (scSupApproval == ""){} else {scSupApproval = "\nSupervisor: " + scSupApproval;}
  if (scApproval == ""){$('#scApproval').css(bg, nullBgColor);} else {scApproval = "\nService Call Approved By: " + scApproval;}
  if (scQueue == ""){$('#scQueue').css(bg, nullBgColor);} else {scQueue = "\nQueue: " + scQueue;}
  if (scQueueResult == ""){$('#scQueueResult').css(bg, nullBgColor);} else {scQueueResult = "\nDeployment: " + scQueueResult;}

  //Tower questions
  if (scTower == ""){scTower = "";} else {scTower = "\n\nDoes the account have a note about requiring two techs?: " + scTower;}
  if (scTower1 == ""){scTower1 = "";} else {scTower1 = "\nDoes customer have a 30' mast or higher?: " + scTower1;}
  if (scTower2 == ""){scTower2 = "";} else {scTower2 = "\nDoes customer have a 10' tripod or higher?: " + scTower2;}
  if (scTower3 == ""){scTower3 = "";} else {scTower3 = "\nDoes customer have a personal tower?: " + scTower3;}
  if (scTower4 == ""){scTower4 = "";} else {scTower4 = "\nHas customer install or past SVC required two techs?: " + scTower4;}
  if (scTower5 == ""){scTower5 = "";} else {scTower5 = "\nIf any of the above are checked yes does the SVC job require two techs?: " + scTower5;}

  if (scChargeDropdown == ""){$('#scChargeDropdown').css(bg, nullBgColor);}else {scChargeDropdown = "\n\nIs the customer aware they could be charged: " + scChargeDropdown;}
  if (scAddress == ""){scAddress = "";} else {scAddress = "\nIs the address on the apt ticket the location of the equipment?: " + scAddress;}
  if (scFee == ""){scFee = "";} else {scFee = "\nDoes a fee need to be charged: " + scFee;}
  if (scStatement == ""){scStatement = "";} else {scStatement = "\nQuarantined: " + scStatement;}
  if (scSMIP == ""){$('#scSMIP').css(bg, nullBgColor);} else {scSMIP = "\n\nLast Known SM IP: " + scSMIP;}
  if (scAPIP == ""){$('#scAPIP').css(bg, nullBgColor);} else {scAPIP = "\nLast Known AP IP: " + scAPIP;}
  if (scAPSSID == ""){$('#scAPSSID').css(bg, nullBgColor);} else {scAPSSID = "\nLast Known AP SSID: " + scAPSSID;}
  if (scInstructions == ""){scInstructions= "";} else {scInstructions = "\n\nInstructions For Installer: " + scInstructions;}
  if (scSummary == ""){scSummary = "";} else {scSummary = "\n\nSummary & Troubleshooting:\n\n" + scSummary;}
  if (scDate == ""){scDate = "";} else {scDate = "\n\nService call date: " + scDate;}
  //Displays error message
  if (scName == "" || scCallID == "" ||scNumber == "" || scAccount == ""
  || scSMIP == "" || scAPIP == "" || scAPSSID == "" || scApproval == ""
  || scQueue == "" || scQueueResult == ""){document.getElementById("scError").innerHTML = scError;} else {document.getElementById("scError").innerHTML = "";}

  if (scApproval == ""){alert("*** Service Call Approval Name Is Required ***");}
  if (scCallID == ""){alert("*** CallID required ***");}


  //Service call subject line, body, and scheduler line
  scServiceOut =
  scServiceTicket + scName + scNumber + scCallID + scAccount
  + scApproval + scQueue + scQueueResult + scDate
  + scTower + scTower1 + scTower2 + scTower3 + scTower4 + scTower5 + scSupApproval
  + scChargeDropdown + scAddress + scFee + scStatement
  + scSMIP + scAPIP + scAPSSID + scInstructions + scSummary;

  if (scApproval == "" || scCallID == ""){scServiceOut = "";}

  //Generated notes
  $('#scServiceOut').val(scServiceOut);
}
/***************************** Billing Ticket Script *****************************/
function billingTicketFunction()
{
  //Function vars
  var billingBody = "";
  var billingSubject = "";

  //Clear all warnings from HTML dom
  $('#billingName').css(bg, "");
  $('#billingNumber').css(bg, "");
  $('#billingCallID').css(bg, "");
  $('#billingAccount').css(bg, "");
  $('#billingSCDate').css(bg, "");
  $('#billingQueue').css(bg, "");
  $('#billingQueueResult').css(bg, "");

  //Billing Body
  //Gather all vars
  billingName = $('#billingName').val() || "";
  billingNumber = $('#billingNumber').val() || "";
  billingCallID = $('#billingCallID').val() || "";
  billingAccount = $('#billingAccount').val() || "";
  billingSCDate = $('#billingSCDate').val() || "";
  billingQueue = $('#billingAccount').val() || "";
  billingQueueResult = $('#billingQueueResult').val() || "";
  scBillingNotes = $('#scBillingNotes').val() || "";
  billingQueueResultSubject = $('#billingQueueResult').val() || "";

  //Error checking vars
  billingCallIDError = "*** CallID required ***";

  //Format billing vars
  if (billingName == ""){$('#billingName').css(bg, nullBgColor);} else {billingName = "Name: " + billingName;}
  if (billingNumber == ""){$('#billingNumber').css(bg, nullBgColor);} else {billingNumber = "\n\nBest Callback Number: " + billingNumber;}
  if (billingCallID == ""){$('#billingCallID').css(bg, nullBgColor);} else {billingCallID = "\n\nCall ID: " + billingCallID;}
  if (billingAccount == ""){$('#billingAccount').css(bg, nullBgColor);} else {billingAccount = billingAccount;}
  if (billingSCDate == ""){$('#billingSCDate').css(bg, nullBgColor);} else {billingSCDate = billingSCDate;}
  if (billingQueue == ""){$('#billingQueue').css(bg, nullBgColor);} else {billingQueue = billingQueue;}
  if (billingQueueResult == ""){$('#billingQueueResult').css(bg, nullBgColor);} else {billingQueueResult = billingQueueResult;}
  if (scBillingNotes == ""){scBillingNotes = "";} else {scBillingNotes =  "\n\nExtra Notes: " + scBillingNotes;}
  if (billingQueueResultSubject == ""){$('#billingQueueResultSubject').css(bg, nullBgColor);} else {billingQueueResultSubject = billingQueueResultSubject;}

  //Format billing body
  billingBody = billingName + billingNumber + billingCallID
  + "\n\nReason For Service Call: " + billingQueueResultSubject
  + "\n\nHow Much Is The Billing Fee: " + document.querySelector('input[name="billingFee"]:checked').value
  + "\n\nAre They Aware Of The Fee: " + document.querySelector('input[name="billingApprove"]:checked').value
  + "\n\nCustomer approved charge to be paid \nwith payment method on file: " + document.querySelector('input[name="billingFile"]:checked').value
  + "\n\nCharge Payment Immediately: " + document.querySelector('input[name="billingImmediate"]:checked').value
  + scBillingNotes;

  //Format billing subject
  billingSubject = billingQueueResultSubject + " | " + billingAccount + " | " + billingSCDate;

  //Error checking
  if (billingCallID == ""){alert(billingCallIDError); billingSubject = billingCallIDError; billingBody = billingCallIDError}

  //Generated notes
  $('#billingSubject').val(billingSubject);
  $('#billingBody').val(billingBody);
}
/***************************** Outage Ticket Script *****************************/
function outageText()
{
  //Function vars
  var outageOut = "";
  var outageSubject = "";
  var outageTicket = "###OUTAGE TICKET###";
  var outagecreditSubject = "";

  //Clear all warnings from HTML dom
  $('#outageName').css(bg, "");
  $('#outageNumber').css(bg, "");
  $('#outageCallID').css(bg, "");
  $('#outageAccount').css(bg, "");
  $('#outageSMIP').css(bg, "");
  $('#outageAPIP').css(bg, "");
  $('#outageAPSSID').css(bg, "");
  $('#outageTicketNumber').css(bg, "");

  //Outage Body
  //Gather all vars
  var outageName = $('#outageName').val() || "";
  var outageNumber = $('#outageNumber').val() || "";
  var outageCallID = $('#outageCallID').val() || "";
  var outageAccount = $('#outageAccount').val() || "";
  var outageSMIP = $('#outageSMIP').val() || "";
  var outageAPIP = $('#outageAPIP').val() || "";
  var outageAPSSID = $('#outageAPSSID').val() || "";
  var outageTicketNumber = $('#outageTicketNumber').val() || "";
  var outageAPSSIDSubject = $('#outageAPSSID').val() || "";
  var outageAccountSubject = $('#outageAccount').val() || "";
  var outageCreditRequest = $('input[type=radio][name=outageCreditRequest]:checked').val() || "";
  var errorBlankOutageTicketNumber = $('#outageTicketNumber').val() || "";

  //Error checking Vars
  var outageError = "*** Not All Inputs Have Been Filled ***";
  var outageErrorMessage = "*** Outage Ticket Number is Is Required ***";
  var outageCallIDError = "*** CallID required ***";
  var outageNote = "Outage ";

  //Selector vars
  var outageCallBack = document.querySelector('input[name="callbackCX"]:checked').value;
  var outageCreditRequest = document.querySelector('input[name="outageCreditRequest"]:checked').value;
  var outageDocs = document.querySelector('input[name="outageDocumentationRequest"]:checked').value;

  //Format vars
  if (outageName == ""){$('#outageName').css(bg, nullBgColor);} else {outageName = "\nWho is calling: " + outageName;}
  if (outageNumber == ""){$('#outageNumber').css(bg, nullBgColor);} else {outageNumber = "\nContact Number: " + outageNumber;}
  if (outageCallID == ""){$('#outageCallID').css(bg, nullBgColor);} else {outageCallID = "\nCall ID: " + outageCallID;}
  if (outageAccount == ""){$('#outageAccount').css(bg, nullBgColor);} else {outageAccount = "\nAccount Type: " + outageAccount;}
  if (outageSMIP == ""){$('#outageSMIP').css(bg, nullBgColor);} else {outageSMIP = "\n\nLast Known SM IP: " + outageSMIP;}
  if (outageAPIP == ""){$('#outageAPIP').css(bg, nullBgColor);} else {outageAPIP = "\nLast Known Connected AP IP: " + outageAPIP;}
  if (outageAPSSID == ""){$('#outageAPSSID').css(bg, nullBgColor);} else {outageAPSSID = "\nLast Known Connected AP SSID: " + outageAPSSID;}
  if (outageTicketNumber == ""){$('#outageTicketNumber').css(bg, nullBgColor);} else {outageTicketNumber = "\n\nOutage Ticket Number: " + outageTicketNumber;}
  if (outageCallback == ""){outageCallBack = "";} else {outageCallBack = "\nDo they request notification of outage resolved?: " + outageCallBack;}
  if (outageCallBack == ""){outageCreditRequest = "";} else {outageCreditRequest = "\nDid they ask for a credit request?: " + outageCreditRequest;}
  if (outageCallback == ""){outageDocs = "";} else {outageDocs = "\nDid customer request outage documentation?: " + outageDocs;}
  if (outageAPSSIDSubject == ""){outageAPSSIDSubject = "";} else {outageAPSSIDSubject = outageAPSSIDSubject;}
  if (outageAccountSubject == ""){outageAccountSubject = "";} else {outageAccountSubject = " | " + outageAccountSubject;}
  if (outageCreditRequest == 'YES'){var outageCreditRequest = 'CREDIT REQUEST' + " | ";}else if (outageCreditRequest == 'NO'){outageCreditRequest = '';}


  // Outage Subject Line
  if (outageAccountSubject == ""){outageNote = "";} else {outageNote = outageNote;}

  //date script
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth()+1;
  var yyyy = today.getFullYear().toString().substr(2,2);
  today = mm+'-'+dd+'-'+yyyy;
  if (etAPIP ==""){today = "";}

  //Sets outage reported date
  outageDate = "";
  if (outageName == "" || outageNumber == "" || outageAccount == "" || outageSMIP == "" || outageAPIP == "" || outageAPSSID == "" || outageTicketNumber == ""){outageDate = "";} else {outageDate = "\nOutage Date: " + today;}
  outageDateSubject = " | " + today;

  //Displays error message
  if (outageName == "" || outageNumber == "" || outageCallID == "" || outageAccount == "" || outageSMIP == "" || outageAPIP == "" || outageAPSSID == "" || outageTicketNumber == ""){document.getElementById("outageError").innerHTML = outageError;} else {document.getElementById("outageError").innerHTML = "";}

  //Outage body and Subject
  outageOut = outageTicket + outageName + outageNumber + outageCallID + outageAccount + outageDate + outageTicketNumber + outageCallBack + outageCreditRequest + outageDocs + outageSMIP + outageAPIP + outageAPSSID;
  subOutageTicketNumber = ($('#outageTicketNumber').val() || "") + " | ";
  if(($('input[type=radio][name=outageCreditRequest]:checked').val() || "") == "YES"){outagecreditSubject = "Credit requested | "} else { outagecreditSubject = "" };
  outageSubject = outageNote + subOutageTicketNumber + outagecreditSubject + outageAPSSIDSubject + outageAccountSubject + " | " + outageNote + outageDateSubject;

  //Error checking
  if (errorBlankOutageTicketNumber == ""){alert(outageErrorMessage); outageSubject = outageErrorMessage; outageOut = outageErrorMessage}
  if (errorBlankOutageTicketNumber == ""){outageSubject = outageErrorMessage;} else {outageSubject = outageSubject;}
  if (errorBlankOutageTicketNumber == ""){outageOut = outageErrorMessage;} else {outageOut = outageOut;}
  if (outageCallID == ""){alert(outageCallIDError); outageSubject = outageCallIDError; outageOut = outageCallIDError;}

  //Generated notes
  $('#outageSubject').val(outageSubject);
  $('#outageOut').val(outageOut);
}
/***************************** Credit Request Script *****************************/
function creditRequestTicket()
{
  //Function vars
  var crBodyOut = "";
  var crSubjectOut = "";
  var crTicket = "###CREDIT REQUEST TICKET###\n";
  var crSubjectLine = "";

  //Clear all warnings from HTML dom
  $('#crRequestName').css(bg, "");
  $('#crRequestNumber').css(bg, "");
  $('#crRequestCallID').css(bg, "");
  $('#crReason').css(bg, "");
  $('#crReportedDate').css(bg, "");

  //Credit request Body
  //Gather all vars
  var crRequestName = $('#crRequestName').val() || "";
  var crRequestNumber = $('#crRequestNumber').val() || "";
  var crRequestCallID = $('#crRequestCallID').val() || "";
  var crRequestAccountNumber = $('#crRequestAccountNumber').val() || "";
  var crReason = $('#crReason').val() || "";
  var crAmount = $('#crAmount').val() || "";
  var crExtraNotes = $('#crextraNotes').val() || "";

  //Credit Request Date Picker
  var crReportedDate = $('#crReportedDate').val() || "";
  var crResolvedDate = $('#crResolvedDate').val() || "";
  var crbillAmount = $('#crbillAmount').val() || "";
  var crDays = $('#crAmount').val() || "";

  //Error Vars
  var crError = "*** Not All Inputs Have Been Filled ***";
  var crCallIDError = "*** CallID required ***";

  //Calculates per day bill amount
  var crDivided = crbillAmount / 30;
  var crMultiplied = crDivided * crDays;
  var crTotal = crMultiplied.toFixed(2);

  //Format vars
  if (crRequestName == ""){$('#crRequestName').css(bg, nullBgColor);} else { crRequestName = "Who's Calling: " + crRequestName;}
  if (crRequestNumber == ""){$('#crRequestNumber').css(bg, nullBgColor);} else { crRequestNumber = "\n\nBest Callback Number: " + ($('#crRequestNumber').val() || "");}
  if (crRequestCallID == ""){$('#crRequestCallID').css(bg, nullBgColor);} else { crRequestCallID = "\n\nCall ID: " + ($('#crRequestCallID').val() || "");}
  if (crRequestAccountNumber == ""){$('#crRequestAccountNumber').css(bg, nullBgColor);} else { crRequestAccountNumber = "\n\nPhone Number From Billmax: "+ ($('#crRequestAccountNumber').val() || "");}
  if (crReason == ""){$('#crReason').css(bg, nullBgColor);} else { crReason = "\n\nReason for credit request: " + ($('#crReason').val() || "");}
  if (crAmount == ""){crAmount = "";} else { crAmount = "\n\nAmount of days requested: " + ($('#crAmount').val() || "") + " " + "days";}
  if (crReportedDate == ""){$('#crReportedDate').css(bg, nullBgColor);} else { crReportedDate = "\n\nReported issue date: " + ($('#crReportedDate').val() || "");}
  if (crResolvedDate == ""){crResolvedDate = "\n\nDate Resolved: Not Resolved";} else {crResolvedDate = "\n\nDate Resolved: "+ ($('#crResolvedDate').val() || "");}
  if (crReportedDate == ""){crResolvedDate = "";}

  //Formats billing amounts
  if (crTotal == "0.00"){crTotal = "\n\nPending Resolved Date - Bill Total: $"+ crbillAmount} else { crTotal = "\n\nCredit Request Total: $"+ crTotal;}
  if (crbillAmount == ""){crTotal = "";}
  if (crTotal == "NaN"){alert("Total Month Bill does not require a $");}

  //Adds notes section
  if (crExtraNotes == ""){crExtraNotes = "";} else { crExtraNotes = "\n\nExtra Notes: "+ crExtraNotes;}

  // Credit Request Subject
  var creditReason = $('#crReason').val() || "";
  if (creditReason == ""){creditReason = ""} else { creditReason = " | "+ $('#crReason').val() || "";}

  if (crRequestName == ""){crSubjectLine = "";} else {crSubjectLine = "Credit Request";}
  var crResolvedDateSubject = $('#crResolvedDate').val() || "";
  if (crResolvedDateSubject == ""){crResolvedDateSubject = " | Not Resolved";} else {crResolvedDateSubject = "";}
  if (crReportedDate == ""){crResolvedDateSubject = "";}

  //Displays error message
  if (crRequestName == "" || crRequestNumber == "" || crReportedDate == ""){document.getElementById("crError").innerHTML = crError;} else {document.getElementById("crError").innerHTML = ""}

  //Outage body and Subject
  crSubjectOut = crSubjectLine + creditReason + crResolvedDateSubject;
  crBodyOut = crTicket + crRequestName + crRequestNumber + crRequestCallID + crRequestAccountNumber + crReason + crAmount + crReportedDate + crResolvedDate + crTotal + crExtraNotes;

  if (crRequestCallID == ""){alert(crCallIDError); crSubjectOut = crCallIDError; crBodyOut = crCallIDError;}

  //Generated notes
  $('#crTicketSubject').val(crSubjectOut);
  $('#crTicketBody').val(crBodyOut);
}
/***************************** VoIP Ticket Script *****************************/
function voipTicketFunction()
{
  //Function vars
  var voipOut = "";
  var voipSubject = "";
  var voipNote = "###VoIP TROUBLESHOOTING###";

  //Clear all warnings from HTML dom
  $('voipName').css(bg, "");
  $('#voipNumber').css(bg, "");
  $('#voipCallID').css(bg, "");
  $('#voipLine').css(bg, "");
  $('#voipAccount').css(bg, "");
  $('#voipSMIP').css(bg, "");
  $('#voipAPIP').css(bg, "");
  $('#voipAPSSID').css(bg, "");
  $('#voipTRIP').css(bg, "");
  $('#voipRouterType').css(bg, "");
  $('#voipIssueType').css(bg, "");
  $('#voipProblem').css(bg, "");
  $('#voipTimeframe').css(bg, "");
  $('#voipNextStep').css(bg, "");

  //VoIP Ticket Body
  //Gather all vars
  var voipName = $('#voipName').val() || "";
  var voipNumber = $('#voipNumber').val() || "";
  var voipCallID = $('#voipCallID').val() || "";
  var voipLine = $('#voipLine').val() || "";
  var voipAccount = $('#voipAccount').val() || "";
  var voipSMIP = $('#voipSMIP').val() || "";
  var voipAPIP = $('#voipAPIP').val() || "";
  var voipAPSSID = $('#voipAPSSID').val() || "";
  var voipTRIP = $('#voipTRIP').val() || "";
  var voipRouterType = $('#voipRouterType').val() || "";
  var voipIssueType = $('#voipIssueType').val() || "";
  var voipIssue = $('#voipProblem').val() || "";
  var voipTimeframe = $('#voipTimeframe').val() || "";
  var voipSMPing = $('#voipSMPing').val() || "";
  var voipSMPingTS = $('#voipSMPing').val() || "";
  var voipNextStep = $('#voipNextStep').val() || "";
  var voipAPSSIDSubject = $('#voipAPSSID').val() || "";
  var voipAccountSubject = $('#voipAccount').val() || "";
  var voipIssueTypeSubject = $('#voipIssueType').val() || "";

  //Error Vars
  var voipError = "*** Not All Inputs Have Been Filled ***";
  var voipCallIDError = "*** CallID required ***";

  //Format vars
  if (voipName == ""){$('#voipName').css(bg, nullBgColor);} else {voipName = "\nWho is calling: " + voipName;}
  if (voipNumber == ""){$('#voipNumber').css(bg, nullBgColor);} else {voipNumber = "\nContact Number: " + voipNumber;}
  if (voipCallID == ""){$('#voipCallID').css(bg, nullBgColor);} else {voipCallID = "\nCall ID: " + voipCallID;}
  if (voipLine == ""){$('#voipLine').css(bg, nullBgColor);} else {voipLine = "\nVoIP Phone Number: " + voipLine;}
  if (voipAccount == ""){$('#voipAccount').css(bg, nullBgColor);} else {voipAccount = "\nAccount Type: " + voipAccount;}
  if (voipSMIP == ""){$('#voipSMIP').css(bg, nullBgColor);} else {voipSMIP = "\nSM IP: " + voipSMIP;}
  if (voipAPIP == ""){$('#voipAPIP').css(bg, nullBgColor);} else {voipAPIP = "\nAP IP: " + voipAPIP;}
  if (voipAPSSID == ""){$('#voipAPSSID').css(bg, nullBgColor);} else {voipAPSSID = "\nAP SSID: " + voipAPSSID;}
  if (voipTRIP == ""){$('#voipTRIP').css(bg, nullBgColor);} else {voipTRIP = "\nTR IP: " + voipTRIP;}
  if (voipRouterType == ""){$('#voipRouterType').css(bg, nullBgColor);} else {voipRouterType = "\nRouter Type: " + voipRouterType;}
  if (voipIssueType == ""){$('#voipIssueType').css(bg, nullBgColor);} else {voipIssueType = "\nIssue is affecting: " + voipIssueType;}
  if (voipIssue == ""){$('#voipProblem').css(bg, nullBgColor);} else {voipIssue = "\n\nWhat issue is the phone having: " + voipIssue;}
  if (voipTimeframe == ""){$('#voipTimeframe').css(bg, nullBgColor);} else {voipTimeframe = "\n\nHow long has it been going on: " + voipTimeframe;}
  if (voipSMPing == ""){voipSMPingTS = ""; voipSMPing = "";} else {voipSMPingTS = "\n- VoIP pings were run and documented below"; voipSMPing = "\n\nSM Ping: " + voipSMPing;}
  if (voipNextStep == ""){$('#voipNextStep').css(bg, nullBgColor);} else {voipNextStep = "\n\nNext Step: " + voipNextStep;}

  // VoIP Troubleshooting Steps
  voipTSSteps = "\n\nTroubleshooting completed:"
  + ($('#vtsPOE')[0].checked ? "\n- Power-cycled POE" : "")
  + ($('#vtsRouter')[0].checked ? "\n- Power-cycled Router" : "")
  + ($('#vtsAuthenticated')[0].checked ? "\n- Power-cycled ATA" : "")
  + ($('#vtsCabling')[0].checked ? "\n- Verified cabling" : "")
  + ($('#vtsPOELight')[0].checked ? "\n- Verified ATA light was on" : "")
  + ($('#vtsReseated')[0].checked ? "\n- Confirmed ringer volume was up" : "")
  + ($('#vtsDND')[0].checked ? "\n- Confirmed DND (Do Not Disturb) not active" : "")
  + ($('#vtsInternet')[0].checked ? "\n- Confirmed Internet Is Working" : "")
  + ($('#vtsNots')[0].checked ? "\n- No troubleshooting needed" : "");

  // VoIP Subject Line
  if (voipAPSSIDSubject == ""){voipAPSSIDSubject = "";} else {voipAPSSIDSubject = voipAPSSIDSubject;}
  if (voipAccountSubject == ""){voipAccountSubject = "";} else {voipAccountSubject = " | " + voipAccountSubject;}
  if (voipIssueTypeSubject == ""){voipIssueTypeSubject = "";} else {voipIssueTypeSubject = " | Issue Affecting: " + voipIssueTypeSubject;}

  //Displays error message
  if (voipName == "" || voipNumber == "" || voipCallID == "" || voipLine == "" || voipAccount == "" || voipSMIP == "" || voipAPIP == "" || voipAPSSID == "" || voipTRIP == "" || voipRouterType  == "" || voipIssue  == "" || voipTimeframe  == "" || voipNextStep == ""){document.getElementById("voipError").innerHTML = voipError;} else {document.getElementById("voipError").innerHTML = "";}

  //Voip subject line and body
  voipOut = voipNote + voipName + voipNumber + voipCallID + voipLine + voipAccount + voipSMIP + voipAPIP + voipAPSSID + voipTRIP + voipRouterType + voipIssueType + voipIssue + voipTimeframe + voipTSSteps + voipSMPingTS + voipSMPing + voipNextStep;
  voipSubject = voipAPSSIDSubject + voipAccountSubject + voipIssueTypeSubject;

  if (voipCallID == ""){alert(voipCallIDError); voipSubject = voipCallIDError; voipOut = voipCallIDError}

  //Generated notes
  $('#voipticketSubject').val(voipSubject);
  $('#voipticketOutput').val(voipOut);
}
/***************************** Sooner Service Ticket Script *****************************/
function soonerServiceFunction()
{
  //Function vars
  var ssTicketBody = "";
  var ssTicketSubject = "";
  var ssSubjectName = "Sooner Service Request | ";
  var ssSoonerServiceTicket = "###SOONER SERVICE TICKET###\n"

  //Clear all warnings from HTML dom
  $('#ssName').css(bg, "");
  $('#ssNumber').css(bg, "");
  $('#ssCallID').css(bg, "");
  $('#ssAccount').css(bg, "");
  $('#ssQueueResult').css(bg, "");
  $('#ssServiceDate').css(bg, "");
  $('#ssApprovalNotes').css(bg, "");

  //Sooner Service Body
  //Gather all vars
  var ssName = $('#ssName').val() || "";
  var ssNumber = $('#ssNumber').val() || "";
  var ssCallID = $('#ssCallID').val() || "";
  var ssAccount = $('#ssAccount').val() || "";
  var ssQueueResult = $('#ssQueueResult').val() || "";
  var ssServiceDate = $('#ssServiceDate').val() || "";
  var ssApprovalNotes = $('#ssApprovalNotes').val() || "";
  var ssNotes = $('#ssNotes').val() || "";

  //Error Vars
  var ssError = "*** Not All Inputs Have Been Filled ***";
  var ssCallIDError = "*** CallID required ***";

  //Selector vars
  var ssWillCall = document.querySelector('input[name="ssWillCall"]:checked').value;
  var ssCredit = document.querySelector('input[name="ssCredit"]:checked').value;

  //Format vars
  if (ssName == ""){$('#ssName').css(bg, nullBgColor);} else {ssName = "Name: " + ssName;}
  if (ssNumber == ""){$('#ssNumber').css(bg, nullBgColor);} else {ssNumber = "\nContact Number: " + ssNumber;}
  if (ssCallID == ""){$('#ssCallID').css(bg, nullBgColor);} else {ssCallID = "\nCall ID: " + ssCallID;}
  if (ssAccount == ""){$('#ssAccount').css(bg, nullBgColor);} else {ssAccount = "\nAccount Type: " + ssAccount;}
  if (ssQueueResult == ""){$('#ssQueueResult').css(bg, nullBgColor);} else {ssQueueResult = "\nCustomer Issue: " + ssQueueResult;}
  if (ssServiceDate == ""){$('#ssServiceDate').css(bg, nullBgColor);} else {ssServiceDate = "\nScheduled Date: " + ssServiceDate;}
  if (ssApprovalNotes == ""){$('#ssApprovalNotes').css(bg, nullBgColor);} else {ssApprovalNotes = "\n\nApproval Notes: " + ssApprovalNotes;}
  if (ssNotes == ""){ssNotes = "";} else {ssNotes = "\n\nSooner Service Notes: " + ssNotes;}

  //Selector formatting
  if (ssWillCall == "Yes"){ssWillCall = "\n\nDid you offer to add them to the Will-Call-List: " + ssWillCall;}
  else if (ssWillCall == "No"){ssWillCall = "\n\n*** You need to offer will-call-list first. ***";}
  if (ssCredit == "Yes"){ssCredit = "\n\nDid you offer a credit: " + ssCredit;}
  else if (ssCredit == "No"){ssCredit = "\n\n*** You need to offer a credit first. ***";}

  //Subject Line
  ssQueueResultSubject = $('#ssQueueResult').val() || ""; if (ssQueueResultSubject == ""){ssQueueResult = "";} else {ssQueueResultSubject = " | " + ssQueueResultSubject;}
  ssServiceDateSubject = $('#ssServiceDate').val() || ""; if (ssServiceDateSubject == ""){ssServiceDateSubject = "";} else {ssServiceDateSubject = " | Schd: " + ssServiceDateSubject;}

  //Displays error message
  if (ssName == "" || ssNumber == "" || ssCallID =="" || ssAccount == "" || ssQueueResult == "" || ssServiceDate == "" || ssApprovalNotes == ""){document.getElementById("ssError").innerHTML = ssError;} else {document.getElementById("ssError").innerHTML = "";}

  //Subject and body formatting
  ssTicketSubject = ssSubjectName + ssQueueResultSubject + ssServiceDateSubject;
  ssTicketBody = ssSoonerServiceTicket + ssName + ssNumber + ssCallID + ssAccount + ssQueueResult + ssServiceDate + ssWillCall + ssCredit + ssApprovalNotes + ssNotes;

  if (ssCallID == ""){alert(ssCallIDError); ssTicketSubject = ssCallIDError; ssTicketBody = ssCallIDError;}

  //Generated notes
  $('#ssTicketSubject').val(ssTicketSubject);
  $('#ssTicketBody').val(ssTicketBody);
}
/***************************** Static IP Request Script *****************************/
function staticIPFunction()
{
  //Function vars
  var staticBody = "";
  var staticNote = "###STATIC IP REQUEST###";

  //Clear all warnings from HTML dom
  $('#staticTWR').css(bg, "");
  $('#staticTWRIP').css(bg, "");
  $('#staticRouterType').css(bg, "");
  $('#staticRTRIP').css(bg, "");
  $('#staticFee').css(bg, "");
  $('#staticIPS').css(bg, "");
  $('#staticJustification').css(bg, "");
  $('#staticReason').css(bg, "");
  $('#staticNumber').css(bg, "");

  //Static Request Body
  //Gather all vars
  var staticTower = $('#staticTWR').val() || "";
  var staticTowerIP = $('#staticTWRIP').val() || "";
  var staticRouterType = $('#staticRouterType').val() || "";
  var staticRouterIP = $('#staticRTRIP').val() || "";
  var staticIPs = $('#staticIPS').val() || "";
  var staticReason = $('#staticReason').val() || "";
  var staticNumber = $('#staticNumber').val() || "";
  var staticCallID = $('#staticCallID').val() || "";

  //Error Vars
  var staticCallIDError = "*** CallID required ***";

  //Selector vars
  staticFee = document.querySelector('input[name="staticFee"]:checked').value;
  staticJustification = document.querySelector('input[name="staticJustification"]:checked').value;

  //Formats vars
  if (staticTower == ""){$('#staticTWR').css(bg, nullBgColor);} else {staticTower = "\nTower Name: " + staticTower;}
  if (staticTowerIP == ""){$('#staticTWRIP').css(bg, nullBgColor);} else {staticTowerIP = "\nTower IP: " + staticTowerIP;}
  if (staticRouterType == ""){$('#staticRouterType').css(bg, nullBgColor);} else {staticRouterType = "\nRouter Type: " + staticRouterType;}
  if (staticRouterIP == ""){$('#staticRTRIP').css(bg, nullBgColor);} else {staticRouterIP = "\nRouter IP Address: " + staticRouterIP;}
  if (staticFee == ""){$('#staticFee').css(bg, nullBgColor);} else {staticFee = "\nAware of $10.00 Fee: " + staticFee;}
  if (staticIPs == ""){$('#staticIPS').css(bg, nullBgColor);} else {staticIPs = "\nHow many IPs: " + staticIPs;}
  if (staticJustification == ""){$('#staticJustification').css(bg, nullBgColor);} else {staticJustification = "\nJustification form sent: " + staticJustification;}
  if (staticReason == ""){$('#staticReason').css(bg, nullBgColor);} else {staticReason = "\nReason for needing IP: " + staticReason;}
  if (staticNumber == ""){$('#staticNumber').css(bg, nullBgColor);} else {staticNumber = "\nBest Callback Number: " + staticNumber;}
  if (staticCallID == ""){$('#staticCallID').css(bg, nullBgColor);} else {staticCallID = "\nCall ID: " + staticCallID;}

  //Formats static ip request ticket body
  staticBody = staticNote + staticTower + staticTowerIP + staticRouterType + staticRouterIP + staticFee + staticIPs + staticJustification + staticReason + staticNumber + staticCallID;

  if (staticCallID == ""){alert(staticCallIDError); staticBody = staticCallIDError;}

  //Generated notes
  $('#staticTicketBody').val(staticBody);
}
/***************************** Port Forwarding Request Script *****************************/
function portForwardingFunction()
{
  //Function vars
  var pfTicketBody = "";
  var pfTicketSubject = "";
  var pfNote = "###Port Forwarding Request###";
  var pfNoteSubject = "Port Forwarding Request | ";

  //Clear all warnings from HTML dom
  $('#pfName').css(bg, "");
  $('#pfNumber').css(bg, "");
  $('#pfCallID').css(bg, "");
  $('#pfRouter').css(bg, "");
  $('#pfRouterIP').css(bg, "");
  $('#pfTCP').css(bg, "");
  $('#pfUDP').css(bg, "");
  $('#pfIP').css(bg, "");
  $('#pfReason').css(bg, "");

  //Static Request Body
  //Gather all vars
  pfName = $('#pfName').val() || "";
  pfCallID = $('#pfCallID').val() || "";
  pfNumber = $('#pfNumber').val() || "";
  pfRouter = $('#pfRouter').val() || "";
  pfRouterIP = $('#pfRouterIP').val() || "";
  pfTCP = $('#pfTCP').val() || "";
  pfUDP = $('#pfUDP').val() || "";
  pfIP = $('#pfIP').val() || "";
  pfReason = $('#pfReason').val() || "";
  pfRouterSubject = $('#pfRouter').val() || "";

  //Error Vars
  var pfCallIDError = "*** CallID required ***";

  //Formatting vars
  if (pfName == ""){$('#pfName').css(bg, nullBgColor);} else {pfName = "\nAuthorized user making request: " + pfName;}
  if (pfCallID == ""){$('#pfCallID').css(bg, nullBgColor);} else {pfCallID = "\nCall ID: " + pfCallID;}
  if (pfNumber == ""){$('#pfNumber').css(bg, nullBgColor);} else {pfNumber = "\nBest callback number: " + pfNumber;}
  if (pfRouter == ""){$('#pfRouter').css(bg, nullBgColor);} else {pfRouter = "\nRouter: " + pfRouter;}
  if (pfRouterIP == ""){$('#pfRouterIP').css(bg, nullBgColor);} else {pfRouterIP = "\nRouter IP Address: " + pfRouterIP;}
  if (pfTCP == ""){$('#pfTCP').css(bg, nullBgColor);} else {pfTCP = "\n\nTCP Port Numbers: " + pfTCP;}
  if (pfUDP == ""){$('#pfUDP').css(bg, nullBgColor);} else {pfUDP = "\n\nUDP Port Numbers: " + pfUDP;}
  if (pfIP == ""){$('#pfIP').css(bg, nullBgColor);} else {pfIP = "\n\nInternal IP of device: " + pfIP;}
  if (pfReason == ""){$('#pfReason').css(bg, nullBgColor);} else {pfReason = "\n\nReason for needing it: " + pfReason;}

  //Subject line
  pfTicketSubject = pfNoteSubject + pfRouterSubject;

  //Port forwarding body
  pfTicketBody = pfNote + pfName + pfNumber + pfCallID + pfRouter + pfRouterIP + pfTCP + pfUDP + pfIP + pfReason;

  if (pfCallID == ""){alert(pfCallIDError); pfTicketSubject = pfCallIDError; pfTicketBody = pfCallIDError}

  //Generated notes
  $('#pfTicketSubject').val(pfTicketSubject);
  $('#pfTicketBody').val(pfTicketBody);
}
/***************************** Router Shipment Script *****************************/
function routerShipmentFunction()
{
  //Function vars
  var routerShipmentBody = "";
  var routerShipmentSubject = "";
  var rsNote = "###EQUIPMENT SHIPMENT###";
  var rsNoteSubject = "| Customer New Equipment";
  var rtrBodyPickup = "";

  //Router shippment Body
  //Gather all vars
  var rsAddress = $('#rsAddress').val() || "";
  var rsSQFT = $('#rsSQFT').val() || "";
  var rsReason = $('#rsReason').val() || "";
  var rsPOE = $('#rsPOE').val() || "";
  var rsZyxel = $('#rsZyxel').val() || "";
  var rsZyxelMesh = $('#rsZyxelMesh').val() || "";
  var rsVelop = $('#rsVelop').val() || "";
  var rsMikroTik = $('#rsMikroTik').val() || "";
  var rsUPS = $('#rsUPS').val() || "";
  var rsDate = $('#rsDate').val() || "";
  var rsWindow = $('#rsWindow').val() || "";

  //Error Vars
  var rsPerspectiveValueError = "*** Router Package MUST be added in Billmax as Perspective Mode if a router is being shipped***";

  //Selector vars
  rsRouterWareHouseLabel = document.querySelector('input[name="routerWareHouseLabel"]:checked').value;
  poeWareHouseLabel = document.querySelector('input[name="POEShipping"]:checked').value;
  rsDeclineMesh = document.querySelector('input[name="rsDeclineMesh"]:checked').value;
  rsVoIP = document.querySelector('input[name="rsVoIP"]:checked').value;
  rsCxCall = document.querySelector('input[name="rsCxCall"]:checked').value;
  rsTerms = document.querySelector('input[name="rsTerms"]:checked').value;
  rsStatement = document.querySelector('input[name="rsStatement"]:checked').value;
  rsPerspective = document.querySelector('input[name="rsPerspective"]:checked').value;

  //Formats vars
  if (rsAddress == ""){rsAddress = "";} else {rsAddress = "\nBest shipping address: " + rsAddress;}
  if (rsSQFT == ""){rsSQFT = "";} else {rsSQFT = "\nSQFT Area: " + rsSQFT;}
  if (rsReason == ""){rsReason = "";} else {rsReason = "\nReason for request: " + rsReason;}
  if (rsPOE == "0"){ rsPOE = ""; } else { rsPOE = "\n\n# of POE units: " + rsPOE;}
  if (rsZyxel == "0"){ rsZyxel = ""; } else { rsZyxel = "\n\n# of Zyxel Routers: "+ rsZyxel;}
  if (rsZyxelMesh == "0"){rsZyxelMesh = ""; } else {rsZyxelMesh = "\n# of Zyxel Mesh: " + rsZyxelMesh;}
  if (rsVelop == "0"){ rsVelop = ""; } else { rsVelop = "\n\n# of Linksys Velop Routers: "+ rsVelop;}
  if (rsMikroTik == "0"){ rsMikroTik = ""; } else { rsMikroTik = "\n# of MikroTik RB2011: " + rsMikroTik;}
  if (rsUPS == "0"){ rsUPS = ""; } else { rsUPS = "\n# of UPS Rental: " + rsUPS;}
  if (rsDate != ""){rsDate = rsDate;}
  if (rsWindow != ""){rsWindow = rsWindow;}

  //Formats selector vars
  if (rsRouterWareHouseLabel == ""){rsRouterWareHouseLabel = "";} else {rsRouterWareHouseLabel = "\n\nDoes the Warehouse need to include return shipping label?: " + rsRouterWareHouseLabel;}
  if (poeWareHouseLabel == "" || poeWareHouseLabel == "N/a"){poeWareHouseLabel = "";} else {poeWareHouseLabel = "\n\nWhat POE type does the cx need?: " + poeWareHouseLabel;}
  if (rsDeclineMesh == ""){rsDeclineMesh = "";} else {rsDeclineMesh = "\n\nCustomer declined mesh units (Over 2000 Sq Ft): " + rsDeclineMesh;}
  if (rsVoIP == ""){rsVoIP = "";} else {rsVoIP = "\n\nDoes the customer have VoIP service: " + rsVoIP;}
  if (rsCxCall == ""){rsCxCall = "";} else {rsCxCall = "\n\nIs the customer aware to call us upon receipt for static IP input or port forwarding: " + rsCxCall;}
  if (rsTerms == ""){rsTerms = "";} else {rsTerms = "\n\nAll managed router terms and shipping details discussed with customer: " + rsTerms;}
  if (rsStatement == ""){rsStatement = "";} else {rsStatement = "\n\nQuarantined: " + rsStatement;}
  if (rsPerspective == ""){rsPerspective = "";} else {rsPerspective = "\nRouter package added in billmax as perspective?: " + rsPerspective;}

  //Formats body heading to show if cx is picking up equipment or dropping it off
  if ($('#routerPickUp')[0].checked)
  {
    rsRouterPickUpOrShipping = $('input[type=radio][name=routerPickUp]:checked').val();

    if(rsRouterPickUpOrShipping == "Pick-Up")
    {
      rsNote = "###EQUIPMENT PICK-UP###";
      rsDate = " | " + rsDate;
      rsWindow = " | " + rsWindow;
    }
    else
    {
      rsDate = "";
      rsWindow = "";
    }
    if (rsRouterPickUpOrShipping == "")
    {
      rsRouterPickUpOrShipping = "";
    }
    else
    {
      rsRouterPickUpOrShipping = "\n\nThis customer is wanting to: " + rsRouterPickUpOrShipping;
    }
  }

  if ($('#routerShipping')[0].checked)
  {
    rsRouterPickUpOrShipping = $('input[type=radio][name="routerPickUp"]:checked').val();
    if (rsRouterPickUpOrShipping == ""){rsRouterPickUpOrShipping = "";} else {rsRouterPickUpOrShipping = "\n\nThis customer is wanting to: " + rsRouterPickUpOrShipping;}
  }

  // Router Shipment Subject Line
  if($('#rsStatement')[0].checked == true)
  {
    var router_shipment = "\nRouter Mac address: " + $("myclass1").value;
  }
  else if($('#rsStatement1')[0].checked == true)
  {
    var router_shipment = "";
  }

  if ($('#routerPickUp')[0].checked)
  {
    rsRouterPickUpOrShipping1 = $('input[type=radio][name=routerPickUp]:checked').val() + " ";
  }
  if ($('#routerShipping')[0].checked)
  {
    rsRouterPickUpOrShipping1 = $('input[type=radio][name="routerPickUp"]:checked').val() + " ";
  }

  if($('input[type=radio][name=routerPickUp]:checked').val() == "Pick-Up")
  {
    rtrBodyPickup = "\nPick up Date: " + ($('#rsDate').val() || "") + "\nPick up Time: " + ($('#rsWindow').val() || "");
  }
  else
  {
    rsDate = "";
    rsWindow = "";
  }

  //Format the main ticket body
  routerShipmentBody = rsNote + rsRouterPickUpOrShipping + rtrBodyPickup + poeWareHouseLabel + rsRouterWareHouseLabel +  rsAddress + rsSQFT + rsReason + rsZyxel + rsZyxelMesh + rsVelop + rsPOE + rsUPS + rsMikroTik + rsDeclineMesh + rsVoIP + rsCxCall + rsTerms + rsStatement + router_shipment + "\n" + rsPerspective;

  //Format the subject line
  routerShipmentSubject = rsRouterPickUpOrShipping1 + rsNoteSubject + rsDate + rsWindow;

  //Error Checking
  var rsPerspectiveValue = $('input[type=radio][name="rsPerspective"]:checked').val();
  if (rsPerspectiveValue == 'No' && (($('#rsVelop').val() || "0") != "0" || ($('#rsMikroTik').val() || "0") != "0" || ($('#rsZyxel').val() || "0") != "0"))
  {
    document.getElementById("rsPerspectiveValueError").innerHTML = rsPerspectiveValueError;
    routerShipmentBody = "*** Router package Is Required ***";
    routerShipmentSubject = "*** Router Package Is Required ***";
  }
  else
  {
    document.getElementById("rsPerspectiveValueError").innerHTML = "";
    routerShipmentSubject = routerShipmentSubject;
    routerShipmentBody = routerShipmentBody;
  }

  //Generated notes
  $('#rsTicketSubject').val(routerShipmentSubject);
  $('#rsTicketBody').val(routerShipmentBody);
}
/***************************** Supervisor Request Ticket Script *****************************/
function supRequest()
{
  //Function vars
  var supBody = "";
  var supSubject = "";
  supNote = "###SUPERVISOR REQUEST###";
  supSubjectLine = "Supervisor Request | ";

  //Clear all warnings from HTML dom
  $('#supName').css(bg,  "");
  $('#supNumber').css(bg,  "");
  $('#supCallID').css(bg,  "");
  $('#supAccount').css(bg,  "");
  $('#supIssue').css(bg,  "");
  $('#supNotes').css(bg,  "");

  //Supervisor request Body
  //Gather all Vars
  supName = $('#supName').val() || "";
  supNumber = $('#supNumber').val() || "";
  supCallID = $('#supCallID').val() || "";
  supAccount = $('#supAccount').val() || "";
  supIssue = $('#supIssue').val() || "";
  supNotes = $('#supNotes').val() || "";
  supAccountSubject = $('#supAccount').val() || "";

  //Error Vars
  var supCallIDError = "*** CallID required ***";

  //Format vars
  if (supName == ""){$('#supName').css(bg, nullBgColor);} else {supName = "\nWho is calling: " + supName;}
  if (supNumber == ""){$('#supNumber').css(bg,nullBgColor);} else {supNumber = "\nContact Number: " + supNumber;}
  if (supCallID == ""){$('#supCallID').css(bg,nullBgColor);} else {supCallID = "\nCall ID: " + supCallID;}
  if (supAccount == ""){$('#supAccount').css(bg,nullBgColor);} else {supAccount = "\nAccount Type: " + supAccount;}
  if (supIssue == ""){$('#supIssue').css(bg,nullBgColor);} else {supIssue = "\nIssue: " + supIssue;}
  if (supNotes == ""){$('#supNotes').css(bg,nullBgColor);} else {supNotes = "\n\nSummary: " + supNotes;}

  //Subject Line
  if (supAccountSubject == ""){$('#supAccount').css(bg,  nullBgColor);} else {supAccountSubject = supAccountSubject + " | ";}

  //Formats current date
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth()+1;
  var yyyy = today.getFullYear().toString().substr(2,2);
  today = " | " + mm+'-'+dd+'-'+yyyy;
    if (etAPIP == ""){today = "";}

  //Empty Notes
  if (supIssue == ""){supNote = "###NOTES###";}
  if (supName == "" && supNumber == "" && supIssue == "" && supNotes == ""){supNote = "";}
  if (supAccount == "" || supIssue == ""){supSubjectLine = ""; today = "";}

  //Formats ticket boday
  supBody = supNote + supName + supNumber + supCallID + supAccount + supIssue + supNotes;

  //Formats ticket subject line
  supSubject = supSubjectLine + supAccountSubject + ($('#supIssue').val() || "") + today;

  if (supCallID == ""){alert(supCallIDError); supSubject = supCallIDError; supBody = supCallIDError}

  //Generated Notes
  $('#supTicket').val(supBody);
  $('#supSubject').val(supSubject);
}
/***************************** Email Template Ticket Script *****************************/
function emailTemplateText()
{
  //Function vars
  var emailTemplateOut = "";
  var emailTemplateSubject = "";

  //Clear all warnings from HTML dom
  $('#emailTemplateLastFour').css(bg, "");
  $('#emailTemplateNumber').css(bg, "");
  $('#emailTemplateTime').css(bg, "");
  $('#emailTemplateClosing').css(bg, "");

  //emailTemplate Body
  //Gather all vars
  var emailTemplateLastFour = $('#emailTemplateLastFour').val() || "";
  var emailTemplateNumber = $('#emailTemplateNumber').val() || "";
  var emailTemplateTime = $('#emailTemplateTime').val() || "";
  var emailTemplateClosing = $('#emailTemplateClosing').val() || "";
  var emailTemplateNumberSubject = $('#emailTemplateNumber').val() || "";
  var emailTemplateType = $('#emailTemplateType').val() || "1";
  var emailTemplateBody = "";

  //Error checking Vars
  var emailTemplateLastFourError = "*** Last four of phone number required ***";
  var emailTemplateNumberError = "*** Ticket number required ***";
  var emailTemplateTimeError = "*** Time of day required ***";
  var emailTemplateClosingError = "*** Closing required ***";
  var emailTemplateNote = "";

  //Selector vars

  //Format vars
  if (emailTemplateLastFour == ""){$('#emailTemplateLastFour').css(bg, nullBgColor);} else {emailTemplateLastFour = emailTemplateLastFour;}
  if (emailTemplateNumber == ""){$('#emailTemplateNumber').css(bg, nullBgColor);} else {emailTemplateNumber = "Nextlink Support-Ticket " + emailTemplateNumber;}
  if (emailTemplateNumberSubject == ""){emailTemplateNumberSubject = "";} else {emailTemplateNumberSubject = emailTemplateNumberSubject;}
  if (emailTemplateTime == ""){emailTemplateTime = "";} else {emailTemplateTime = "Good " + emailTemplateTime + ",";}

  // emailTemplate Subject Line
  if (emailTemplateNumberSubject == ""){emailTemplateNote = "";} else {emailTemplateNote = emailTemplateNote;}

  //Sets emailTemplate reported date
  emailTemplateDate = "";
  if (emailTemplateNumber == "" || emailTemplateLastFour == "" || emailTemplateTime == "" || emailTemplateClosing == "");
  emailTemplateDateSubject = "";

  //Displays error message
  if (emailTemplateNumber == "" || emailTemplateLastFour == "" || emailTemplateTime == "" || emailTemplateClosing == ""){document.getElementById("emailTemplateError").innerHTML = emailTemplateError;} else {document.getElementById("emailTemplateError").innerHTML = "";}

  //emailTemplate body and Subject
  if (emailTemplateType == "1"){
    emailTemplateBody = "\n\nI hope this email finds you well. I am reaching out to you in regards to the issues you have been experiencing. I would like to start by apologizing for any inconvenience or frustration this may have caused. We definitely want to look into this and get it resolved for you as soon as possible. We tried reaching you via phone at the number ending in " + emailTemplateLastFour + " but unfortunately, we were unable to get ahold of you. Is this still a good number to reach you? If you could at your earliest convenience, please give us a call at 855-698-5465. Our office hours are Monday-Friday (7 am-11 pm) Saturday and Sunday (7 am-10 pm). Thank you for being a Nextlink customer, and we look forward to hearing from you soon!\n\n"
  } else if (emailTemplateType == "2"){
    emailTemplateBody = "\n\nI hope this email finds you well. We are reaching out regarding the issues you reported to our offices. After further review, we have determined that a service call will be needed to resolve this issue. We tried reaching you via phone at the number ending in " + emailTemplateLastFour + " but unfortunately, we were unable to get ahold of you. Is this still a good number to reach you? Since our service calls must be scheduled over the phone, please give us a call at 855-698-5465. Our office hours are Monday-Friday (7 am-11 pm) Saturday and Sunday (7 am-10 pm). Thank you for being a Nextlink customer, and we look forward to speaking with you soon.\n\n"
  } else if (emailTemplateType == "3"){
    emailTemplateBody = "\n\nI hope this email finds you well. We are attempting to follow up with you regarding the issues you reported to our office. Our team has taken a more in-depth look into the problem. After running more diagnostic tests, your service appears to be operating much better on our end. I just wanted to check if you have noticed an improvement on your end. If not, please do not hesitate to contact us so we may further assist you. At your earliest convenience, please give us a call at 855-698-5465 or respond to this email. Our office hours are Monday-Friday (7 am-11 pm) Saturday and Sunday (7 am-10 pm). Thank you for being a Nextlink customer, and we look forward to hearing from you soon.\n\n"
  } else if (emailTemplateType == "4"){
    emailTemplateBody = "\n\nI hope this email finds you well. I am reaching to out you in regards to the connection issues you reported to our office. First, I would like to sincerely apologize for any frustration this may have caused. We did experience an outage in your area that has since been resolved. I have personally logged back into your equipment and have run some tests and have been monitoring its connection to the tower, and so far, everything looks great. I just wanted to check in with you to ensure that your home connection has also been restored and working properly. If you are still experiencing any issues, please unplug the power cable from the POE injector and your router for 45 seconds. If you are still unable to connect after doing so, please email us back at support@team.nxlink.com or call to our office at 855-698-5465. Our office hours are Monday-Friday (7 am-11 pm) Saturday and Sunday (7 am-10 pm). Thank you for your patience as we worked diligently to resolve this issue, and I hope you have a great day.\n\n"
  }
  emailTemplateOut = emailTemplateTime + emailTemplateBody + emailTemplateClosing;

  subemailTemplateNumber = ($('#emailTemplateLastFour').val() || "");
  emailTemplateSubject = emailTemplateNote + emailTemplateNumber + emailTemplateNote + emailTemplateDateSubject;

  //Error checking
  if (emailTemplateLastFour == ""){alert(emailTemplateLastFourError); emailTemplateSubject = emailTemplateLastFourError; emailTemplateOut = emailTemplateLastFourError}
  if (emailTemplateNumber == ""){alert(emailTemplateNumberError); emailTemplateSubject = emailTemplateNumberError; emailTemplateOut = emailTemplateNumberError}
  if (emailTemplateTime == ""){alert(emailTemplateTimeError); emailTemplateSubject = emailTemplateTimeError; emailTemplateOut = emailTemplateTimeError}
  if (emailTemplateClosing == ""){alert(emailTemplateClosingError); emailTemplateSubject = emailTemplateClosingError; emailTemplateOut = emailTemplateClosingError}


  //Generated notes
  $('#emailTemplateSubject').val(emailTemplateSubject);
  $('#emailTemplateOut').val(emailTemplateOut);
}
/***************************** Recovery Ticket Script *****************************/
function recoveryText()
{
  //Function vars
  var recoveryOut = "";
  var recoverySubject = "";
  var recoveryTicket = ($('#recoveryAPIP').val() || "") + " | " + ($('#recoveryAPSSID').val() || "") + " | " + ($('#recoveryFreq').val() || "") + " | " + ($('#recoveryMhz').val() || "") + " | " + ($('#recoveryNumber').val() || "");

  //Clear all warnings from HTML dom
  $('#recoveryTarget').css(bg, "");
  $('#recoveryNumber').css(bg, "");
  $('#recoveryFreq').css(bg, "");
  $('#recoveryMhz').css(bg, "");
  $('#recoveryAccount').css(bg, "");
  $('#recoverySMIP').css(bg, "");
  $('#recoveryAPIP').css(bg, "");
  $('#recoveryAPSSID').css(bg, "");
  $('#recoveryAPLogs').css(bg, "");
  $('#recoveryTRLogs').css(bg, "");
  $('#recoveryOtherAP').css(bg, "");
  $('#recoveryCurrentSubject').css(bg, "");

  //Recovery Body
  //Gather all vars
  var recoveryTarget = $('#recoveryTarget').val() || "";
  var recoveryNumber = $('#recoveryNumber').val() || "";
  var recoveryFreq = $('#recoveryFreq').val() || "";
  var recoveryMhz = $('#recoveryMhz').val() || "";
  var recoveryAccount = $('#recoveryAccount').val() || "";
  var recoverySMIP = $('#recoverySMIP').val() || "";
  var recoveryAPIP = $('#recoveryAPIP').val() || "";
  var recoveryAPSSID = $('#recoveryAPSSID').val() || "";
  var recoveryAPSSIDSubject = $('#recoveryAPSSID').val() || "";
  var recoveryAccountSubject = $('#recoveryAccount').val() || "";
  var recoveryAPLogs = $('#recoveryAPLogs').val() || "";
  var recoveryTRLogs = $('#recoveryTRLogs').val() || "";
  var recoveryOtherAP = $('#recoveryOtherAP').val() || "";
  var recoveryCurrentSubject = $('#recoveryCurrentSubject').val() || "";
  var recoveryTRConnected = $('input[type=radio][name=recoveryTRConnected]:checked').val() || "";

  //Error checking Vars
  var recoveryError = "";
  var recoveryFreqError = "*** AP Frequency required ***";
  var recoveryMhzError = "*** AP Mhz required ***";
  var recoveryNote = "Recovery ";

  //Selector vars
  var recoveryAPConnected = document.querySelector('input[name="recoveryAPConnected"]:checked').value;
  var recoveryTRConnected = document.querySelector('input[name="recoveryTRConnected"]:checked').value;

  //Format vars
  if (recoveryCurrentSubject == ""){$('#recoveryCurrentSubject').css(bg, nullBgColor);} else {recoveryCurrentSubject = "**Sub Recovery** " + recoveryCurrentSubject;}
  if (recoveryTarget == ""){$('#recoveryTarget').css(bg, nullBgColor);} else {recoveryTarget = "\nTarget Sub: " + recoveryTarget;}
  if (recoveryNumber == ""){$('#recoveryNumber').css(bg, nullBgColor);} else {recoveryNumber = "\nTotal Subs: " + recoveryNumber;}
  if (recoveryFreq == ""){$('#recoveryFreq').css(bg, nullBgColor);} else {recoveryFreq = "\nAP Freq: " + recoveryFreq;}
  if (recoveryAccount == ""){$('#recoveryAccount').css(bg, nullBgColor);} else {recoveryAccount = "\nAccount Type: " + recoveryAccount;}
  if (recoverySMIP == ""){$('#recoverySMIP').css(bg, nullBgColor);} else {recoverySMIP = "\nSM IP: " + recoverySMIP;}
  if (recoveryAPIP == ""){$('#recoveryAPIP').css(bg, nullBgColor);} else {recoveryAPIP = "\nAP IP: " + recoveryAPIP;}
  if (recoveryAPSSID == ""){$('#recoveryAPSSID').css(bg, nullBgColor);} else {recoveryAPSSID = "\nAP SSID: " + recoveryAPSSID;}
  if (recoveryAPConnected == ""){recoveryAPConnected = "";} else {recoveryAPConnected = "\nAre there AP logs showing this sub was connected?: " + recoveryAPConnected;}
  if (recoveryAPConnected == ""){recoveryTRConnected = "";} else {recoveryTRConnected = "\nAre there TR logs showing this sub was connected?: " + recoveryTRConnected;}
  if (recoveryAPSSIDSubject == ""){recoveryAPSSIDSubject = "";} else {recoveryAPSSIDSubject = recoveryAPSSIDSubject;}
  if (recoveryAccountSubject == ""){recoveryAccountSubject = "";} else {recoveryAccountSubject = " | " + recoveryAccountSubject;}
  if (recoveryTRConnected == 'YES'){var recoveryTRConnected = 'CREDIT REQUEST' + " | ";}else if (recoveryTRConnected == 'NO'){recoveryTRConnected = '';}
  if (recoveryAPLogs == ""){$('#recoveryAPLogs').css(bg, nullBgColor);} else {recoveryAPLogs = "\n\nAP Logs:\n" + recoveryAPLogs;}
  if (recoveryTRLogs == ""){$('#recoveryTRLogs').css(bg, nullBgColor);} else {recoveryTRLogs = "\n\nTR Logs:\n" + recoveryTRLogs;}
  if (recoveryOtherAP == ""){$('#recoveryOtherAP').css(bg, nullBgColor);} else {recoveryOtherAP = "\n\nOther APs on the tower:\n" + recoveryOtherAP;}


  // Recovery Subject Line
  if (recoveryAccountSubject == ""){recoveryNote = "";} else {recoveryNote = recoveryNote;}

  //date script
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth()+1;
  var yyyy = today.getFullYear().toString().substr(2,2);
  today = mm+'-'+dd+'-'+yyyy;
  if (etAPIP ==""){today = "";}

  //Sets recovery reported date
  recoveryDate = "";
  if (recoveryTarget == "" || recoveryNumber == "" || recoveryAccount == "" || recoverySMIP == "" || recoveryAPIP == "" || recoveryAPSSID == ""){recoveryDate = "";} else {recoveryDate = "\nRecovery Date: " + today;}
  recoveryDateSubject = " | " + today;

  //Displays error message
  if (recoveryTarget == "" || recoveryNumber == "" || recoveryFreq == "" || recoveryMhz == "" || recoveryAccount == "" || recoverySMIP == "" || recoveryAPIP == "" || recoveryAPSSID == "" || recoveryAPLogs == "" || recoveryTRLogs == "" || recoveryTicketNumber == ""){document.getElementById("recoveryError").innerHTML = recoveryError;} else {document.getElementById("recoveryError").innerHTML = "";}

  //Recovery body and Subject
  recoveryOut = recoveryTicket + recoveryTarget  + recoveryAPIP + recoverySMIP + recoveryAPSSID + recoveryAPConnected + recoveryTRConnected + recoveryAPLogs + recoveryTRLogs + recoveryOtherAP;
  
  subRecoveryTicketNumber = ($('#recoveryAPIP').val() || "") + " | " + ($('#recoveryAPSSID').val() || "") + " | " + ($('#recoveryFreq').val() || "") + " | " + ($('#recoveryMhz').val() || "") + " | " + ($('#recoveryNumber').val() || "");
  
  recoverySubject = recoveryCurrentSubject;

  //Error checking
  if (recoveryFreq == ""){alert(recoveryFreqError); recoverySubject = recoveryFreqError; recoveryOut = recoveryFreqError;}
  if (recoveryMhzError == ""){alert(recoveryMhzError); recoverySubject = recoveryMhzError; recoveryOut = recoveryMhzError;}

  //Generated notes
  $('#recoverySubject').val(recoverySubject);
  $('#recoveryOut').val(recoveryOut);
}
/***************************** Spectrum Ticket Script *****************************/
function spectrumText()
{
  //Function vars
  var spectrumOut = "";
  var spectrumSubject = "";
  var spectrumCustomerSubject = "";
  var spectrumTicket = ($('#spectrumAPIP').val() || "") + " | " + ($('#spectrumAPSSID').val() || "") + " | " + ($('#spectrumFreq').val() || "") + " | " + ($('#spectrumMhz').val() || "") + " | " + ($('#spectrumNumber').val() || "");

  //Clear all warnings from HTML dom
  $('#spectrumTarget').css(bg, "");
  $('#spectrumNumber').css(bg, "");
  $('#spectrumFreq').css(bg, "");
  $('#spectrumMhz').css(bg, "");
  $('#spectrumAccount').css(bg, "");
  $('#spectrumSMIP').css(bg, "");
  $('#spectrumAPIP').css(bg, "");
  $('#spectrumAPSSID').css(bg, "");
  $('#spectrumRouterIP').css(bg, "");
  $('#spectrumUpstream').css(bg, "");
  $('#spectrumOtherInfo').css(bg, "");
  $('#spectrumOtherAP').css(bg, "");
  $('#spectrumTicketNumber').css(bg, "");
  $('#spectrumTowerTicketNumber').css(bg, "");
  $('#spectrumCustomerTicket').css(bg, "");
  $('#spectrumCurrentSubject').css(bg, "");

  //Spectrum Body
  //Gather all vars
  var spectrumTarget = $('#spectrumTarget').val() || "";
  var spectrumNumber = $('#spectrumNumber').val() || "";
  var spectrumFreq = $('#spectrumFreq').val() || "";
  var spectrumMhz = $('#spectrumMhz').val() || "";
  var spectrumAccount = $('#spectrumAccount').val() || "";
  var spectrumSMIP = $('#spectrumSMIP').val() || "";
  var spectrumAPIP = $('#spectrumAPIP').val() || "";
  var spectrumAPSSID = $('#spectrumAPSSID').val() || "";
  var spectrumRouterIP = $('#spectrumRouterIP').val() || "";
  var spectrumTicketNumber = $('#spectrumTicketNumber').val() || "";
  var spectrumCustomerTicket = $('#spectrumTowerTicketNumber').val() || "";
  var spectrumAPSSIDSubject = $('#spectrumAPSSID').val() || "";
  var spectrumAccountSubject = $('#spectrumAccount').val() || "";
  var spectrumUpstream = $('#spectrumUpstream').val() || "";
  var spectrumOtherInfo = $('#spectrumOtherInfo').val() || "";
  var spectrumOtherAP = $('#spectrumOtherAP').val() || "";
  var spectrumCurrentSubject = $('#spectrumCurrentSubject').val() || "";
  var errorBlankSpectrumTicketNumber = $('#spectrumTicketNumber').val() || "";

  //Error checking Vars
  var spectrumError = "";
  var spectrumErrorMessage = "*** Spectrum Ticket Number is Is Required ***";
  var spectrumFreqError = "*** AP Frequency required ***";
  var spectrumMhzError = "*** AP Mhz required ***";
  var spectrumNote = "Spectrum ";

  //Selector vars
  var spectrumUpstream = document.querySelector('input[name="spectrumUpstream"]:checked').value;

  //Format vars
  if (spectrumCurrentSubject == ""){$('#spectrumCurrentSubject').css(bg, nullBgColor);} else {spectrumCurrentSubject = spectrumCurrentSubject;}
  if (spectrumTarget == ""){$('#spectrumTarget').css(bg, nullBgColor);} else {spectrumTarget = "\nTarget Sub: " + spectrumTarget;}
  if (spectrumNumber == ""){$('#spectrumNumber').css(bg, nullBgColor);} else {spectrumNumber = "\nTotal Subs: " + spectrumNumber;}
  if (spectrumFreq == ""){$('#spectrumFreq').css(bg, nullBgColor);} else {spectrumFreq = "\nAP Freq: " + spectrumFreq;}
  if (spectrumAccount == ""){$('#spectrumAccount').css(bg, nullBgColor);} else {spectrumAccount = "\nAccount Type: " + spectrumAccount;}
  if (spectrumSMIP == ""){$('#spectrumSMIP').css(bg, nullBgColor);} else {spectrumSMIP = "\nSM IP: " + spectrumSMIP;}
  if (spectrumAPIP == ""){$('#spectrumAPIP').css(bg, nullBgColor);} else {spectrumAPIP = "\nAP IP: " + spectrumAPIP;}
  if (spectrumAPSSID == ""){$('#spectrumAPSSID').css(bg, nullBgColor);} else {spectrumAPSSID = "\nAP SSID: " + spectrumAPSSID;}
  if (spectrumAPIP == ""){$('#spectrumRouterIP').css(bg, nullBgColor);} else {spectrumRouterIP = "\nRouter IP: " + spectrumRouterIP;}
  if (spectrumTicketNumber == ""){$('#spectrumTicketNumber').css(bg, nullBgColor);} else {spectrumTicketNumber = "\nReference Ticket: " + spectrumTicketNumber;}
  if (spectrumCustomerTicket == ""){$('#spectrumCustomerTicket').css(bg, nullBgColor);} else {spectrumCustomerTicket = spectrumCustomerTicket;}
  if (spectrumUpstream == ""){spectrumUpstream = "";} else {spectrumUpstream = "\nIs the MTR showing to be clear upstream?: " + spectrumUpstream;}
  if (spectrumAPSSIDSubject == ""){spectrumAPSSIDSubject = "";} else {spectrumAPSSIDSubject = spectrumAPSSIDSubject;}
  if (spectrumAccountSubject == ""){spectrumAccountSubject = "";} else {spectrumAccountSubject = " | " + spectrumAccountSubject;}
  if (spectrumOtherInfo == ""){$('#spectrumOtherInfo').css(bg, nullBgColor);} else {spectrumOtherInfo = "\n\nOther Info:\n" + spectrumOtherInfo;}
  if (spectrumOtherAP == ""){$('#spectrumOtherAP').css(bg, nullBgColor);} else {spectrumOtherAP = "\n\nOther APs on the tower:\n" + spectrumOtherAP;}


  // Spectrum Subject Line
  if (spectrumAccountSubject == ""){spectrumNote = "";} else {spectrumNote = spectrumNote;}

  //date script
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth()+1;
  var yyyy = today.getFullYear().toString().substr(2,2);
  today = mm+'-'+dd+'-'+yyyy;
  if (etAPIP ==""){today = "";}

  //Sets spectrum reported date
  spectrumDate = "";
  if (spectrumTarget == "" || spectrumNumber == "" || spectrumAccount == "" || spectrumSMIP == "" || spectrumAPIP == "" || spectrumAPSSID == "" || spectrumTicketNumber == ""){spectrumDate = "";} else {spectrumDate = "\nSpectrum Date: " + today;}
  spectrumDateSubject = " | " + today;

  //Displays error message
  if (spectrumTarget == "" || spectrumNumber == "" || spectrumFreq == "" || spectrumMhz == "" || spectrumAccount == "" || spectrumSMIP == "" || spectrumAPIP == "" || spectrumAPSSID == "" || spectrumRouterIP == "" || spectrumUpstream == "" || spectrumTicketNumber == ""){document.getElementById("spectrumError").innerHTML = spectrumError;} else {document.getElementById("spectrumError").innerHTML = "";}

  //Spectrum body and Subject
  spectrumOut = spectrumTicket + spectrumTarget  + spectrumAPIP + spectrumSMIP + spectrumAPSSID + spectrumRouterIP + spectrumTicketNumber + spectrumUpstream + spectrumOtherInfo + spectrumOtherAP;
  subSpectrumTicketNumber = ($('#spectrumAPSSID').val() || "") + " | " + ($('#spectrumFreq').val() || "") + " | " + ($('#spectrumMhz').val() || "") + " | " + ($('#spectrumNumber').val() || "");
  subCustomerTicket = ($('#spectrumTowerTicketNumber').val() || "") + " | " + ($('#spectrumCurrentSubject').val() || "");
  spectrumSubject = "**Spectrum ** " + spectrumNote + subSpectrumTicketNumber + spectrumNote + spectrumDateSubject;
  spectrumCustomerSubject = "Pending " + spectrumCustomerTicket + " | " + spectrumCurrentSubject;

  //Error checking
  if (errorBlankSpectrumTicketNumber == ""){alert(spectrumErrorMessage); spectrumSubject = spectrumErrorMessage; spectrumOut = spectrumErrorMessage}
  if (errorBlankSpectrumTicketNumber == ""){spectrumSubject = spectrumErrorMessage;} else {spectrumSubject = spectrumSubject;}
  if (errorBlankSpectrumTicketNumber == ""){spectrumOut = spectrumErrorMessage;} else {spectrumOut = spectrumOut;}
  if (spectrumFreq == "")  subSpectrumTicketNumber = ($('#spectrumAPSSID').val() || "") + " | " + ($('#spectrumFreq').val() || "") + " | " + ($('#spectrumMhz').val() || "") + " | " + ($('#spectrumNumber').val() || "");
 // {alert(spectrumFreqError); spectrumSubject = spectrumFreqError; spectrumOut = spectrumFreqError;}
  if (spectrumMhzError == ""){alert(spectrumMhzError); spectrumSubject = spectrumMhzError; spectrumOut = spectrumMhzError;}

  //Generated notes
  $('#spectrumSubject').val(spectrumSubject);
  $('#spectrumCustomerSubject').val(spectrumCustomerSubject);
  $('#spectrumOut').val(spectrumOut);
}
