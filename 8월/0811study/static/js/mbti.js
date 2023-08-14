let data='';
const state=["인생최악","별로","그저그럼","좋은사람","천생연분"];
const color=["red","orange","#86E57F","#5CD1E5","pink"];

async function getData(){
    var temp = await fetch("./static/js/mbti.json").then((res)=>res.json());
    //console.log(temp);
    return temp;
}

$(async function(){
    data = await getData();

    $("#result_bt").click( result );
    $("#result_box").click(function(){
        $(this).toggle();
    });

    draw_GO();
});
function draw_GO(){
    var ctx = $("#mbti")[0].getContext("2d");
    var keys = Object.keys(data);
    
    $.each(keys,function(i,k){
         draw_text(i,k,ctx);
         draw_rect(i,k,ctx,keys);
    });
    
    //console.log(keys);
}
function draw_rect(i,k,ctx,keys){
    
    $.each(keys,function(a,b){
        console.log(color[data[k][b] - 1]);
        ctx.fillStyle=color[data[k][b] - 1];
        ctx.fillRect(50+50*a,60+50*i,50,50);
        ctx.strokeRect(50+50*a,60+50*i,50,50);
    })
}

function draw_text(i,k,ctx){
    ctx.fillStyle="#000";
    ctx.font="15px Arial";
    ctx.fillText(k,60+50*i,50);
    ctx.fillText(k,10,90+50*i);
}

function result(){
    var me = $("#me").val().toUpperCase();
    var you = $("#you").val().toUpperCase();
    var n = data[me][you];

    $("#result_box").show();
    $("#result").empty();
    $("#result").css("background",color[n-1]);
    $("#result").append("<h2>결과</h2><div>나와 너의 궁합은 "+state[n-1]+"</div>")

    $(".left_img").attr("src","./static/image/"+me+".png");
    $(".right_img").attr("src","./static/image/"+you+".png");

    $("#left_detail").text(detail[me]);
    $("#right_detail").text(detail[you]);
    //console.log( state[n-1]);
}







const detail={ 
    ISTJ:"소금형",
    ESTP:"활동가형", ISFJ:"권력형",ESFP:"사교형", ENFP:"스파크형",
    INFJ:"예언자형", ENTP:"발명가형", INTJ:"과학자형", ESTJ:"사업가형",
    ISTP:"백과사전형", ESFJ:"친선도모형", ENFJ:"언변능숙형",
    ISFP:"성인군자형", ENTJ:"지도자형", INFP:"잔다르크형", INTP:"아이디어형"
};