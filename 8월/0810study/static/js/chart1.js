let ctx="";
let color=["#FF6347","#FFD700","#7CFC00","#008080","#0000FF",
"#BA55D3","#D2691E","#B0C4DE","#FF4500","#228B22"];

let data=new Array();
function physical(name,tall){
    this.name=name;
    this.tall=tall;
}
let cnt=0;

$(function(){
    ctx = $("#Canvas")[0].getContext("2d");

    $("#reg").click(function(){
        var name = $("#name").val();
        var tall = $("#tall").val();
        
        draw(name,tall);

        $("#name").val("");
        $("#tall").val("");
        $("#name").focus();
    });
});
let oldx=oldy=0;
function draw(name,tall){

    ctx.fillStyle="#000";
    ctx.font="20px Arial";
    ctx.fillText(name,50+100*cnt,680);

    ctx.beginPath();
    ctx.arc(80+100*cnt,600-tall,3,0,2*Math.PI);
    ctx.fillStyle="red";
    ctx.fill();

    if(oldx==0 && oldy==0){
        oldx=80+100*cnt;
        oldy=600-tall;
    }else{
        ctx.moveTo(oldx,oldy);
        ctx.lineTo(80+100*cnt,600-tall);
        ctx.stroke();

        oldx=80+100*cnt;
        oldy=600-tall;
    }
    cnt++;
}
/*
세로
    ctx.fillStyle="#000";
    ctx.font="20px Arial";
    ctx.fillText(name,50+100*cnt,680);

    for(var i=0; i<tall/10 ; i++){
        ctx.fillStyle=color[cnt];
        ctx.fillRect(50+100*cnt,(640-(20*i)), 50,20);
    }
    cnt++;

가로
 ctx.fillStyle="#000";
    ctx.font="20px Arial";
    ctx.fillText(name,50,50+40*cnt);

    for(var i=0; i<tall/10 ; i++){
        ctx.fillStyle=color[cnt];
        ctx.fillRect(150+(20*i),31+40*cnt, 20,20);
    }
    cnt++;

*/