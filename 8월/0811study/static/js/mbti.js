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
    })
});

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
    //console.log( state[n-1]);
}







const detail={ 
    ISTJ:"소금형<br>원이원칙적, 계획적.  여행가면 나서서 계획세움."+  
    "즉흑적인거 싫어함 약속 어기는거 싫어함 협동하고 이런거 싫어함"
};