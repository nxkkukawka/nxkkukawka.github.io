/***************************** Prefill To All Tickets Script *****************************/
//Global Vars
var animTime = 1000;

function prefillInputs() {
    var prefillAll=" ";
    preName = "" + $('#etName').val() || "";
    preNumber = "" + $('#etNumber').val() || "";
    preAccount = "" + $('#etAccount').val() || "";
    preSMIP = "" + $('#etSMIP').val() || "";
    preAPIP = "" + $('#etAPIP').val() || "";
    preAPSSID = "" + $('#etAPSSID').val() || "";
    preRTR = "" + $('#etRouterType').val() || "";
    preRTRIP = "" + $('#etRouterIP').val() || "";
    preCallID = $('#etCallID').val() || "";

    // Service Call Ticket
    $('#scName').val(preName);
    $('#scNumber').val(preNumber);
    $('#scAccount').val(preAccount);
    $('#scCallID').val(preCallID);
    $('#scSMIP').val(preSMIP);
    $('#scAPIP').val(preAPIP);
    $('#scAPSSID').val(preAPSSID);
    //Billing Ticket
    $('#billingName').val(preName);
    $('#billingNumber').val(preNumber);
    $('#billingAccount').val(preAccount);
    $('#billingCallID').val(preCallID);
    // Outage Ticket
    $('#outageName').val(preName);
    $('#outageNumber').val(preNumber);
    $('#outageAccount').val(preAccount);
    $('#outageCallID').val(preCallID);
    $('#outageSMIP').val(preSMIP);
    $('#outageAPIP').val(preAPIP);
    $('#outageAPSSID').val(preAPSSID);
    // VoIP Ticket
    $('#voipName').val(preName);
    $('#voipNumber').val(preNumber);
    $('#voipAccount').val(preAccount);
    $('#voipCallID').val(preCallID);
    $('#voipSMIP').val(preSMIP);
    $('#voipAPIP').val(preAPIP);
    $('#voipAPSSID').val(preAPSSID);
    $('#voipRouterType').val(preRTR);
    // Staic IP Request Ticket
    $('#staticRTRIP').val(preRTRIP);
    $('#staticNumber').val(preNumber);
    $('#staticCallID').val(preCallID);
    // Credit Request Ticket
    $('#crRequestName').val(preName);
    $('#crRequestNumber').val(preNumber);
    $('#crRequestCallID').val(preCallID);
    // Sooner Service
    $('#ssName').val(preName);
    $('#ssNumber').val(preNumber);
    $('#ssAccount').val(preAccount);
    $('#ssCallID').val(preCallID);
    // Port Forwarding
    $('#pfName').val(preName);
    $('#pfNumber').val(preNumber);
    $('#pfIP').val(preRTRIP);
    $('#pfCallID').val(preCallID);
    //Supervisor ticket
    $('#supName').val(preName);
    $('#supNumber').val(preNumber);
    $('#supAccount').val(preAccount);
    $('#supCallID').val(preCallID);

    document.documentElement.scrollTop = 0;
}

/**************************** Prefill To Service Call Script *****************************/

// Every Ticket to SC Ticket
function preSC() {
    var prefillOut = "";
    preNameSC = $('#etName').val() || "";
    preNumberSC = $('#etNumber').val() || "";
    preCallIDSC = $('#etCallID').val() || "";
    preAccountSC = $('#etAccount').val() || "";
    preSMIPSC = $('#etSMIP').val() || "";
    preAPIPSC = $('#etAPIP').val() || "";
    preAPSSIDSC = $('#etAPSSID').val() || "";

    $('#scName').val(preNameSC);
    $('#scNumber').val(preNumberSC);
    $('#scCallID').val(preCallIDSC);
    $('#scAccount').val(preAccountSC);
    $('#scSMIP').val(preSMIPSC);
    $('#scAPIP').val(preAPIPSC);
    $('#scAPSSID').val(preAPSSIDSC);
}

/* **************************** Prefill To Billing Ticket Script **************************** */

// Every Ticket to Billing Ticket
function preBillingTicket() {
    var prefillOut = "";
    preNameET = $('#etName').val() || "";
    preNumberET = $('#etNumber').val() || "";
    preAccountET = $('#etAccount').val() || "";
    preCallIDET = $('#etCallID').val() || "";

    $('#billingName').val(preNameET);
    $('#billingNumber').val(preNumberET);
    $('#billingAccount').val(preAccountET);
    $('#billingCallID').val(preCallIDET);
}

// Service Call to Billing Ticket
function preBillingTicket2() {
    var prefillOut = "";
    preName = $('#scName').val() || "";
    preNumber = $('#scNumber').val() || "";
    preAccount = $('#scAccount').val() || "";
    preDateSC = $('#scDate').val() || "";
    preCallIDSC = $('#scCallID').val() || "";

    $('#billingName').val(preName);
    $('#billingNumber').val(preNumber);
    $('#billingAccount').val(preAccount);
    $('#billingCallID').val(preCallIDSC);
    $('#billingSCDate').val(preDateSC);
}

/***************************** Prefill To Outage Script *****************************/

function preOutage() {
    var prefillOut = "";
    preNameOutage = $('#etName').val() || "";
    preNumberOutage = $('#etNumber').val() || "";
    preAccountOutage = $('#etAccount').val() || "";
    preSMIPOutage = $('#etSMIP').val() || "";
    preAPIPOutage = $('#etAPIP').val() || "";
    preAPSSIDOutage = $('#etAPSSID').val() || "";
    preCallIDOutage = $('#etCallID').val() || "";

    $('#outageName').val(preNameOutage);
    $('#outageNumber').val(preNumberOutage);
    $('#outageAccount').val(preAccountOutage);
    $('#outageSMIP').val(preSMIPOutage);
    $('#outageAPIP').val(preAPIPOutage);
    $('#outageAPSSID').val(preAPSSIDOutage);
    $('#outageCallID').val(preCallIDOutage);
}

/* **************************** Prefill To Credit Request Script **************************** */

function preCR() {
    var prefillOut=" ";
    preNameCR = $('#etName').val() || "";
    preNumberCR = $('#etNumber').val() || "";
    preCallIDCR = $('#etCallID').val() || "";

    $('#crRequestName').val(preNameCR);
    $('#crRequestNumber').val(preNumberCR);
    $('#crRequestCallID').val(preCallIDCR);
}

/* **************************** Prefill To VoIP Script **************************** */

function preVoIP() {
    var prefillOut = "";
    preNameSC = $('#etName').val() || "";
    preNumberSC = $('#etNumber').val() || "";
    preAccountSC = $('#etAccount').val() || "";
    preSMIPSC = $('#etSMIP').val() || "";
    preAPIPSC = $('#etAPIP').val() || "";
    preAPSSIDSC = $('#etAPSSID').val() || "";
    preRTR = $('#etRouterType').val() || "";
    preCallIDCR = $('#etCallID').val() || "";

    $('#voipName').val(preNameSC);
    $('#voipNumber').val(preNumberSC);
    $('#voipAccount').val(preAccountSC);
    $('#voipSMIP').val(preSMIPSC);
    $('#voipAPIP').val(preAPIPSC);
    $('#voipAPSSID').val(preAPSSIDSC);
    $('#voipRouterType').val(preRTR);
    $('#voipCallID').val(preCallIDCR);
}

/***************************** Prefill To Sooner Service Script *****************************/

function preSoonerService() {
    var prefillOut = "";
    preNameSC = $('#etName').val() || "";
    preNumberSC = $('#etNumber').val() || "";
    preAccountSC = $('#etAccount').val() || "";
    preCallIDCR = $('#etCallID').val() || "";

    $('#ssName').val(preNameSC);
    $('#ssNumber').val(preNumberSC);
    $('#ssAccount').val(preAccountSC);
    $('#ssCallID').val(preCallIDCR);
}

function preSoonerService2() {
    var prefillOut = "";
    preNameSC = $('#scName').val() || "";
    preNumberSC = $('#scNumber').val() || "";
    preAccountSC = $('#scAccount').val() || "";
    preZoneSC = $('#scZone').val() || "";
    preDateSC = $('#scDate').val() || "";
    preCallIDCR = $('#scCallID').val() || "";

    $('#ssName').val(preNameSC);
    $('#ssNumber').val(preNumberSC);
    $('#ssAccount').val(preAccountSC);
    $('#ssZone').val(preZoneSC);
    $('#ssServiceDate').val(preDateSC);
    $('#ssCallID').val(preCallIDCR);
}

/***************************** Prefill To PortForwarding Script *****************************/

// Every Ticket to PF Ticket
function prePF() {
    var prefillOut = "";
    preNamePF = $('#etName').val() || "";
    preNumberPF = $('#etNumber').val() || "";
    preCallIDPF = $('#etCallID').val() || "";
    preRTRIP = $('#etRouterIP').val() || "";

    $('#pfName').val(preNamePF);
    $('#pfNumber').val(preNumberPF);
    $('#pfCallID').val(preCallIDPF);
    $('#pfIP').val(preRTRIP);
}

/***************************** Prefill To Supervisor Script *****************************/

function preSupRequest() {
    var prefillOut = "";
    preName = $('#etName').val() || "";
    preNumber = $('#etNumber').val() || "";
    preAccount = $('#etAccount').val() || "";
    preCallIDCR = $('#etCallID').val() || "";

    $('#supName').val(preName);
    $('#supNumber').val(preNumber);
    $('#supAccount').val(preAccount);
    $('#supCallID').val(preCallIDCR);
}

/***************************** Prefill To Fast Lane Script *****************************/

function preFastLane() {
    var prefillOut = "";
    preNameFastLane = $('#etName').val() || "";
    preFastLaneNumber = $('#etNumber').val() || "";
    preFastLaneAccount = $('#etAccount').val() || "";
    prFastLaneSMIP = $('#etSMIP').val() || "";
    preFastLaneAPIP = $('#etAPIP').val() || "";
    preFastLaneAPSSID = $('#etAPSSID').val() || "";
    preFastLaneRTR = $('#etRouterIP').val() || "";
    preCallIDCR = $('#etCallID').val() || "";

    $('#flName').val(preNameFastLane);
    $('#flNumber').val(preFastLaneNumber);
    $('#flAccount').val(preFastLaneAccount);
    $('#flSMIP').val(prFastLaneSMIP);
    $('#flAPIP').val(preFastLaneAPIP);
    $('#flAPSSID').val(preFastLaneAPSSID);
    $('#flRouterIP').val(preFastLaneRTR);
    $('#flCallID').val(preCallIDCR);
}

/***************************** Erase All Ticket Inputs Script **************************** */
function eraseEverything(){
  var result = confirm("Are you sure you want to erase everything? This cannot be recovered.");
    if (result) {
      document.documentElement.scrollTop = 0;
      location.reload();
    }
}

/*****************************Textfield Dropdown*****************************/
//Text field toggle
function toggleCheckbox(ID) {
  //gets the value of element provided and hides or unhides the element with that ID
  if($(ID).prop('checked'))
  {
    $("#" +($(ID).attr('value'))).fadeIn(animTime);
  }
  else
  {
    $("#" +($(ID).attr('value'))).fadeOut(animTime);
  }
}

//Compares value to current setting and shows div when correct one is selected
function checkval(comp,val,effector)
{
  if(val === comp){
    $('#' + effector).fadeIn(animTime);
  }
  else{
    $('#' + effector).fadeOut(animTime);
  }
}

//Compares values to current setting and shows div when correct one is selected
function checkvals(comp,comp2,comp3,val,effector)
{
  if(val === comp){
    $('#' + effector).fadeIn(animTime);
  }
  else if(val === comp2){
    $('#' + effector).fadeIn(animTime);
  }
  else if(val === comp3){
    $('#' + effector).fadeIn(animTime);
  }
  else{
    $('#' + effector).fadeOut(animTime);
  }
}

/*****************************Tabs Script******************************/

//function for clicking on tabs
function openTab3(tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
  }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
    document.getElementById(tabName).style.display = "block";
  }

/*****************************Copy Function*****************************/

function CopyFunction(ID)
{
  var copyText = $('#'+ID);
  copyText.select();
  document.execCommand("copy");
}

/*****************************Timer Script*****************************/
function _timer(callback)
{
    var time = 3;     //  The default time of the timer
    var mode = 1;     //    Mode: count up or count down
    var status = 0;    //    Status: timer is running or stoped
    var timer_id;    //    This is used by setInterval function

    // this will start the timer ex. start the timer with 1 second interval timer.start(1000)
    this.start = function(interval)
    {
        interval = (typeof(interval) !== 'undefined') ? interval : 1000;

        if(status == 0)
        {
            status = 1;
            timer_id = setInterval(function()
            {
                switch(mode)
                {
                    default:
                    if(time)
                    {
                        time--;
                        generateTime();
                        if(typeof(callback) === 'function') callback(time);
                    }
                    break;

                    case 1:
                    if(time < 86400)
                    {
                        time++;
                        generateTime();
                        if(typeof(callback) === 'function') callback(time);
                    }
                    break;
                }
            }, interval);
        }
    }

    //  Same as the name, this will stop or pause the timer ex. timer.stop()
    this.stop =  function()
    {
        if(status == 1)
        {
            status = 0;
            clearInterval(timer_id);
        }
    }

    // Reset the timer to zero or reset it to your own custom time ex. reset to zero second timer.reset(0)
    this.reset =  function(sec)
    {
        sec = (typeof(sec) !== 'undefined') ? sec : 120;
        time = sec;
        generateTime(time);
    }

    // Change the mode of the timer, count-up (1) or countdown (0)
    this.mode = function(tmode)
    {
        mode = tmode;
    }

    // This method return the current value of the timer
    this.getTime = function()
    {
        return time;
    }

    // This method returns the current mode of the timer count-up (1) or countdown (0)
    this.getMode = function()
    {
        return mode;
    }

    // This method return the status of the timer running (1) or stoped (1)
    this.getStatus
    {
        return status;
    }

    // This method will render the time variable to hour:minute:second format
    function generateTime()
    {
        var second = time % 60;
        var minute = Math.floor(time / 60) % 60;

        second = (second < 10) ? '0'+second : second;
        minute = (minute < 10) ? '0'+minute : minute;

        $('div.timer span.second').html(second);
        $('div.timer span.minute').html(minute);
    }
}

// example use
var timer;

$(document).ready(function(e)
{
    timer = new _timer
    (
        function(time)
        {
            if(time == 0)
            {
                timer.stop();
                alert('TIMER DONE!!!');
            }
        }
    );
    timer.reset(0);
    timer.mode(0);
});

/******************************Date Picker Script******************************/

$(document).ready(function(){
    var date_input=$('input[name="date"]'); //our date input has the name "date"
    var container=$('.bootstrap-iso form').length>0 ? $('.bootstrap-iso form').parent() : "body";
    date_input.datepicker({
        format: 'mm-dd-yy',
        container: container,
        todayHighlight: true,
        autoclose: true,
    })
})

/******************************Dynamic speed test button function******************************/
var totalSpeedTests = 1;
function createSpeedTests(){
  totalSpeedTests++;
  var title = "byspeedtestSite" + totalSpeedTests;
  //creates new speed test inside the div for speedtests
  $("#additionalSpeedTests").before('<div id = "speedTest'+ totalSpeedTests +'"> <br><br><br><br><hr><br>Speed Test '+ totalSpeedTests +': &nbsp; <select id="byspeedtestSite'+ totalSpeedTests +'" class="smallDropdown"><option value="">-- Choose an option --</option><option value="wifiman.com: (Bypassed)">wifiman.com (Bypassed)</option><option value="Speedtest.GoogleFiber.net: (Bypassed)">Speedtest.GoogleFiber.net (Bypassed)</option><option value="Speedtest.Xfinity.com: (Bypassed)">Speedtest.Xfinity.com (Bypassed)</option><option value="MikroTik Bandwidth Test:">MikroTik Bandwidth Test</option><option value="LTE Speed Test (BEC website):">LTE speed Test</option><option value="Wireless Link Test:">Wireless Link Test</option><option value="NISC Router speed test: (bypassed)">NISC Router speed test (bypassed)</option><option value="Other: (Bypassed)">Other (Bypassed)</option><option value="Speedtest.GoogleFiber.net:">Speedtest.GoogleFiber.net (Wireless)</option><option value="Speedtest.Xfinity.com:">Speedtest.Xfinity.com (Wireless)</option><option value="wifiman.com:">wifiman.com (Wireless)</option><option value="Other:">Other (Wireless)</option></select> <input type="text" class="smallTextbox" id="byPing'+totalSpeedTests+'" placeholder="Ping" autocomplete="off"> -&nbsp;<input type="text" class="smallTextbox" id="byDownload'+totalSpeedTests+'" placeholder="D/L"autocomplete="off"> -&nbsp;<input type="text" class="smallTextbox" id="byUpload'+totalSpeedTests+'" placeholder="U/L" autocomplete="off">&nbsp;<button class="tablinks buttonMenu" onclick="removeElement(&#39;speedTest'+totalSpeedTests+'&#39;)" ></i> &nbsp; Remove &nbsp; </button><br><input type="text" class="mainInputBox6" id="byLocation'+totalSpeedTests+'" placeholder=" Speedtest server location" autocomplete="off"></div>');
}

function removeElement(elementId) {
  // Removes an element from the document.
  var element = $('#'+elementId);
  element.remove();
}
