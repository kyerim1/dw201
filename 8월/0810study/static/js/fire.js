let data=[];  // json 데이터 저장할 변수
let fire_stat=new Object();
let color=["#FF6347","#FFD700","#7CFC00","#008080","#0000FF",
"#BA55D3","#D2691E","#B0C4DE","#FF4500","#228B22","#FFD700","#7CFC00","#008080"];

async function getData(){
    var temp = await fetch("./traffic.json").then((r)=>r.json());
    //console.log(temp);
    return temp.body.items;
}

$(async function(){
    data = await getData();
    var total=bike=0;
    $.each(data,function(i,item){
        total+=Number(item.gutCo);// 전체 사고건수
        bike+=item.rlifAcdAsmCdNm==="오토바이사고"?Number(item.gutCo):0;
        if( item.rsacGutFsttOgidNm in fire_stat ){
            fire_stat[item.rsacGutFsttOgidNm].출동건수 += item.gutCo;
            fire_stat[item.rsacGutFsttOgidNm].환자수 += item.trnfPcnt;
        }else{
            fire_stat[item.rsacGutFsttOgidNm] = { 출동건수:Number(item.gutCo),
                                                  환자수:Number(item.trnfPcnt)};
        }
    });

    var ctx = $("#graph")[0].getContext("2d");

    ctx.strokeRect(1200,50,200,60);
    ctx.moveTo(1230,70);
    ctx.lineTo(1290,70);
    ctx.stroke();
    var grd=ctx.createLinearGradient(1230,85,1290,100);
    grd.addColorStop(0,"#FF6347");
    grd.addColorStop(0.5,"#FFD700");
    grd.addColorStop(1,"#008080");
    ctx.fillStyle=grd;
    ctx.fillRect(1230,85,60,15);
    ctx.fillStyle="#000";
    ctx.fillText("환자수",1300,73);
    ctx.fillText("출동건수",1300,95);

    var keys=Object.keys(fire_stat);
    var oldx=oldy=0;
    var oldtext=0;
    $.each(keys,function(i, f){
        ctx.fillStyle="#000";
        ctx.font="15px Arial";
        ctx.fillText(f,50+100*i,780);
        ctx.fillStyle

        ctx.fillStyle=color[i];
        ctx.fillRect(50+100*i, 760-fire_stat[f].출동건수,50,fire_stat[f].출동건수);

        if(oldx==0 && oldy==0){
            oldx=80+100*i;
            oldy=760-fire_stat[f].환자수;
        }else{
            ctx.moveTo(oldx,oldy);
            ctx.lineTo(80+100*i, 760-fire_stat[f].환자수);
            ctx.stroke();

            oldx=80+100*i;
            oldy=760-fire_stat[f].환자수;
        }

    });

    var ctx2 = $("#pi")[0].getContext("2d");

    var pc = 1/(total/bike);
    var bike_deg= 270+360*pc;
    bike_deg = Math.round( (bike_deg>360 ? bike_deg-360: bike_deg) *100  )/100;
    
    ctx2.beginPath();
    ctx2.moveTo(350,350);
    ctx2.arc(350,350,300,270*Math.PI/180 , bike_deg*Math.PI/180,false);
    ctx2.fillStyle="yellow";
    ctx2.fill();

    ctx2.beginPath();
    ctx2.moveTo(350,350);
    ctx2.arc(350,350,300,bike_deg*Math.PI/180 , 270*Math.PI/180,false);
    ctx2.fillStyle="orange";
    ctx2.fill();

    ctx2.fillStyle="#000";
    ctx2.font="30px Arial";
    ctx2.fillText(Math.round(pc*1000)/10+"%",450,200);
});

/*
    각 소방서 의 총 출동건수를  세로 막대로 캔버스에 표현하시오
           이송환자수는  꺽은선 
*/