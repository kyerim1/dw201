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
    $.each(data,function(i,item){
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
    ctx.fillStyle="#000";
    ctx.fillRect(1230,85,60,15);
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
});

/*
    각 소방서 의 총 출동건수를  세로 막대로 캔버스에 표현하시오
           이송환자수는  꺽은선 
*/