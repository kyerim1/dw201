const tall=[161,168,174,159];
const name=["송은선","임민지","이상준","김선향"];
let avg = tall_avg();

$("#reg_bt").click(function(){
    if( $("#tall").val()=='' || $("#name").val()=='' ){
        alert("키 또는 이름을 입력하세요");
        $("#tall").val()=='' ? $("#tall").focus():$("#name").focus();
        return;
    }
    tall.push( Number($("#tall").val()) );
    name.push( $("#name").val() );

});

let ctx = $("#bar_chart")[0].getContext("2d");
let chart ='';
draw();

function draw(){
    chart = new Chart(ctx,{
        type:"bar",
        data:{
            labels: name,
            datasets:[{
                label:"201호 키 조사",
                data:tall,
                borderWidth:1,
                backgroundColor:[
                    tall[0]>=avg ? "#4374D9" : "#CC3D3D",
                    tall[1]>=avg ? "#4374D9" : "#CC3D3D",
                    tall[2]>=avg ? "#4374D9" : "#CC3D3D",
                    tall[3]>=avg ? "#4374D9" : "#CC3D3D",
                ],
                barPercentage:1,
                barThickness:50,
                borderColor:"black",
                borderSkipped:"topleft", // start , end, middle, bottom, left, top, right,
                borderRadius:100,
                categoryPercentage:0.1,
                hoverBackgroundColor:"yellow", // BorderColor , BorderWidth, BorderRadius
                indexAxis:"x",
                base:avg
            }]
        },
        options:{
            scales:{
                y:{min:150, max:200,ticks:{stepSize:10}}
            }
        }
    });
}

function tall_avg(){
    var sum=0;    
    $.each(tall,function(i,t){  sum+=t;  });
    return sum/tall.length;
}