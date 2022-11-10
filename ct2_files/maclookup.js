
    var hexChars = "0123456789abcdef";
    var ouiChars = hexChars + ":-.";
    var matchCount = 0;
    var maxCount = 100;

    function getMacVal(rawVal) {
        var rawLower = rawVal.toLowerCase();
        var macVal = "";

        for (var i = 0; i < rawLower.length; i++) {
            oc = rawLower.charAt(i);
            // Valid OUI?
            if (ouiChars.indexOf(oc) < 0) {
                return "";
            }

            if (hexChars.indexOf(oc) >= 0) {
                macVal += oc;
            }
        }
        return macVal;
    }

    function matchMac(macVal, pfx, mask) {
        var maskLen = mask / 4;
        var cmpLen = macVal.length;

        if (macVal.length < 1) {
            return 0;
        }
        if (macVal.length > maskLen) {
            cmpLen = maskLen;
        }
        if (macVal.length < maskLen) {
            maskLen = macVal.length;
        }

        for (var i = 0 ; i < cmpLen; i++) {
            if (macVal.charAt(i) != pfx.charAt(i)) {
                return 0;
            }
        }
        return 1;
    }

    function addSeparators(rawMac) {
        var ret = "";
        for (var i = 0; i < rawMac.length; i++) {
            ret += rawMac.charAt(i);
            if (i % 2 == 1 && i < rawMac.length -1) {
                ret += ":";
            }
        }
        return ret.toUpperCase();
    }

    function lookup() {
        var ffentry = document.getElementById("ffentry");
        var matches = document.getElementById("matches");
        var matchedContent = "";
        var line = "";
        var macFields = new Array();
        var descFields = new Array();
        var count = 0;
        var maxCount = 100;
        // field.style.backgroundColor = statusColor["valid"];

        matchLines = ffentry.value.split("\n");
        for (var i = 0; i < matchLines.length; i++) {
            // Strip whitespace
            line = matchLines[i];
            line = line.replace(/^\s*/, '');
            line = line.replace(/\s*$/, '');
            if (line.length < 1) {
                continue;
            }
            macTest = getMacVal(line);
            if (macTest.length > 0) {
                macFields.push(macTest);
            } else {
                descFields.push(new RegExp(line, "i"));
            }
        }
        oui_entries:
        for (var n = 0; n < oui.length; n++) {
            entry = oui[n];
            if (count >= maxCount) {
                break;
            }
            for (i = 0; i < macFields.length; i++) {
                mac = macFields[i];
                if (matchMac(mac, entry["pfx"], entry["mask"])) {
                    matchedContent += addSeparators(entry["pfx"]) + ' ' + entry["desc"] + '<br>';
                    count++;
                    continue oui_entries;
                }
            }
            for (i = 0; i < descFields.length; i++) {
                desc = descFields[i];
                if (entry["desc"].match(desc)) {
                    matchedContent += addSeparators(entry["pfx"]) + ' ' + entry["desc"] + '<br>';
                    count++;
                    continue oui_entries;
                }
            }
        }
        if (count < 1) {
            matchedContent = "<i>No matches</i>";
        }
        matches.innerHTML = matchedContent;
    }
