function getCookie(name){
    var cookies = document.cookie.split(";");
    for(var i in cookies){
        var cookie = cookies[i].trim();
        if( cookie.startsWith(name+"=") ) {
            return cookie.substring(name.length+1, cookie.length);
        }
    }
    return '';
}
