let station=new Array(40).fill(0);

const st_name=["상수역","은선역","예림역","향숙역","영주역","선양역",
"상준역","승겹역","승겸역","수호역","민지역","태균역","길원역","철환역",
"유성온천역","중앙로역","서대전역","대전역","판암역","용문역","시청역",
"정부청사역","현충원역","탄방역","갈마역","용산역","오룡역","부산역",
"대구역", "조치원역","세종역","청주역","신탄진역","중리동역","반석역",
"월컵역","지족역","계림역","천안역","대동역"];


window.onload=function(){
    map_draw();
}

function map_draw(){ //지도 그리기 위한 함수
    var map=document.querySelector("#map"); // $("#map")
    var out="";
    for(var line=0; line<4; line++){
        var t=line*10;
        if( line%2!=0){  t+=9;
            while( t >= line*10) //  1줄 마지막인덱스 9, 2줄마지막인덱스 10, 3줄 마지막인덱스 29, 4줄 마지막인덱스 30
                out += make(t--);
        }else{
            while(t <= line*10+9)
                out += make(t++);
        }
            
    }
    map.innerHTML=out;
}

function make(t){
    var w95="";
    if((t%10==9 || t%10==0) &&t!=0) //줄의 마지막역과 시작역 부분
        w95 = "w95";
    if(t==9 || t==29 ||t==19) //줄의 마지막역
        w95 += " w95-top";
    if(t==10||t==30 || t==20) // 줄의 시작역
        w95 += " w95-bottom";
    if(t==19||t==20) // 오른쪽에 있는 연결 되어야하는 역
        w95 += "-right";

    var out="";
    out += "<div class='station'>";
    out += "<div class='train'><i class='fa-solid fa-train'></i></div>";
    out += "<div class='mark'><div class='rail "+w95+"'></div>"+
            "<span class='stop'><i class='fa-regular fa-square'></i></span>";
    
     out += "</div>";
    if(t%10==9 && t!=39)
        out+="<div class='rad "+(t==19?'right':'left')+"'></div>";
    out += "<div class='name'>" +st_name[t]+ "</div></div>";
    return out;
}