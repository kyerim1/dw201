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

function draw(name,tall){

    ctx.fillStyle="#000";
    ctx.font="20px Arial";
    ctx.fillText(name,50+100*cnt,680);

    for(var i=0; i<tall/10 ; i++){
        ctx.fillStyle=color[cnt];
        ctx.fillRect(50+100*cnt,(640-(20*i)), 50,20);
    }
    cnt++;
}