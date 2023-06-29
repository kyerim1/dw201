
// padStart() -  문자열의 시작을 다른 문자열로 채워준다.
// 신상수.padStart(5,"오빠");  ->  오빠신상수
window.onload=function(){

    setInterval(function(){
        var dt = document.querySelector("#date_time");
        const now = new Date();
        const year = now.getFullYear();
        const month = String(now.getMonth()+1).padStart(2,"0");
        const date =String(now.getDate()).padStart(2,"0");
        const hour = String(now.getHours()).padStart(2,"0");
        const minute = String(now.getMinutes()).padStart(2,"0");
        const sec = String(now.getSeconds()).padStart(2,"0");
        
        dt.innerHTML=`${year}.${month}.${date} ${hour}:${minute}:${sec}`;
        //dt.innerHTML=year+"."+month+"."+date+" "+hour+":"+minute+":"+sec;
    },1000);
};