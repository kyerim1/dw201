$(function(){

});

function send(){
    var send_data = { writer:$("#writer").val(), content:$("#content").val() };
    send_data = JSON.stringify(send_data);
    
    var xmlHttp = new XMLHttpRequest(); 
    // 서버와 주고받고 할때 사용되는 객체, 새로고침없이 데이터를 받아올수있다.

    xmlHttp.open("POST", "http://krdrive.ipdisk.co.kr:8000/test/data.php");
// open("전송방식-GET,POST", "서버페이지주소");
    xmlHttp.onload=function(){ // 서버로부터 결과를 반환 받는곳
        alert( this.response );
    };
    xmlHttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    xmlHttp.send("x="+send_data);
// send() - 서버에 데이터 보내는 곳

}