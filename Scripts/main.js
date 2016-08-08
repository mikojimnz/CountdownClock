var tag = function () {
	var a = {};
	var b = window.location.search.substring(1);
	var vars = b.split("&");
	
	for (var c = 0; c < vars.length; c++) {
		var d = vars[c].split("=");
		
		if (typeof a[d[0]] === "undefined") {
			a[d[0]] = decodeURIComponent(d[1]);
		} else if (typeof a[d[0]] === "string") {
			var e = [ a[d[0]], decodeURIComponent(d[1]) ];
			a[d[0]] = e;
		} else {
			a[d[0]].push(decodeURIComponent(d[1]));
		}
	}
	
	return a;
}();

function call() {
    var timeRem = function () {
        var a =  Date.parse(tag.w+"/"+tag.v+"/"+tag.x+" "+tag.y+":"+tag.z+":00") - Date.parse(new Date());
        var b = Math.floor((a/1000)%60); //sec
        var c = Math.floor((a/1000/60)%60); //min
        var d = Math.floor((a/(1000*60*60))%24); //hour
        var e = Math.floor(a/(1000*60*60*24)); //day
        return new Array(a, b, c, d, e);
    }();
    
    var f = function () {
        if (timeRem[4] == 1) {
            return " Day, ";
        } else if (timeRem[4] <= 0) {
            return "";
        } else {
            return " Days, ";
        }
    }();
    
   var g = function () {
        if (timeRem[3] == 1) {
            return " Hour, ";
        } else if (timeRem[3] <= 0 && timeRem[4] <= 0) {
            return "";
        } else {
            return " Hours, ";
        }
    }();
    
    var h = function () {
        if (timeRem[2] == 1) {
            return " Minute & ";
        } else if (timeRem[2] <= 0 && timeRem[3] <=0 && timeRem[4] <= 0) {
            return "";
        } else {
            return " Minutes & ";
        }
    }();
    
    var i = function () {
        if (timeRem[1] == 1) {
            return " Second";
        } else if (timeRem[1] <= 0 && timeRem[2] <= 0 && timeRem[3] <=0 && timeRem[4] <= 0) {
            return "Zero Time";
        } else {
            return " Seconds";
        }
    }();
    
    var j = function () {
        if (timeRem[4] <= 0 ) {
            return "";
        } else {
            return timeRem[4];
        }
    }();
    
    var k = function () {
        if (timeRem[3] <= 0 && timeRem[4] <= 0) {
            return "";
        } else {
            return timeRem[3];
        }
    }();
    
    var l = function () {
        if (timeRem[2] <= 0 && timeRem[3] <=0 && timeRem[4] <= 0) {
            return "";
        } else {
            return timeRem[2];
        }
    }();
    
    var m = function () {
        if (timeRem[1] <= 0 && timeRem[2] <= 0 && timeRem[3] <=0 && timeRem[4] <= 0) {
            return "";
        } else {
            return timeRem[1];
        }
    }();
    
    document.getElementById("time").innerHTML = j+f+k+g+l+h+m+i;
    setTimeout(call,1000);
}

call();
document.getElementById("name").innerHTML = tag.nm;
document.getElementById("target-readable").innerHTML = tag.w+"/"+tag.v+"/"+tag.x+" "+tag.y+":"+tag.z;