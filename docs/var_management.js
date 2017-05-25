function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

var score = getCookie("score");

if (!score) {
    document.cookie = "score=0; expires=Fri, 18 Dec 2048 12:00:00 UTC; path=/";
    score = getCookie("score");
}

function logCookie() {
    console.alert("The cookie is currently: " + score);
}

function updateCookie() {
    document.cookie = "score=" + score + "; expires=Fri, 18 Dec 2048 12:00:00 UTC; path=/";
    logCookie();
}
