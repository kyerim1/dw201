const brtc=new Object();
const signgu=new Object();

async function getCode(){
    var temp = await fetch("./static/js/sigu.json").then((res)=>res.json());
    $.each(temp,function(i,d){
        if(d.시군구코드==='' || d.광역시도코드==36){
            brtc[d.광역시도코드]=d.법정동명;
        }else{
            signgu[d.법정동명]=d.시군구코드;
        }
    });
    //console.log(brtc);
}
async function getData(brtcCode, signguCode){
    var ServiceKey="aU2M7WTPerUiHviK%2Bo%2FXiW8lJKziToXUzCR94DRarfLfWW6nbPM%2FkuOYo%2Fntj30U24svccnw4EMvwXj3ccN%2Bxg%3D%3D";
    var url="https://data.myhome.go.kr:443/rentalHouseList?ServiceKey="+ServiceKey+
    "&brtcCode="+brtcCode+"&signguCode="+signguCode+"&numOfRows=500";
    var temp = fetch(url).then((res)=>res.json());
}


$(async function(){
    await getCode();
    var brtkey = Object.keys(brtc);
    $("#si").append("<option value=''>시도 선택하세요</option>");
    $.each(brtkey,function(i,k){
        $("#si").append("<option value='"+k+"'>"+brtc[k]+"</option>");
    });
    $("#gu").append("<option>구 군 선택</option>");
    $("#si").change(change_gu);
});

function change_gu(){
    $("#gu").empty();
    var key = $(this).val();
    var gukeys = Object.keys(signgu);
    $.each(gukeys,function(i,k){
        if(k.indexOf(brtc[key]) > -1 ){
            $("#gu").append("<option value='"+signgu[k]+"'>"+k+"</option>");
        }
    });
    console.log($(this).val());
}

















/*
[{11:'서울특별시'},{26:'부산광역시'},{27:'대구광역시'},
{28:'인천광역시'},{29:'광주광역시'},{30:'대전광역시'},{31:'울산광역시'},
{36:'세종특별자치시'},{41:'경기도'},{42:'강원도'},{43:'충청북도'},{44:'충청남도'},
{45:'전라북도'},{46:'전라남도'},{47:'경상북도'},{48:'경상남도'},{50:'제주특별자치도'}];

*/