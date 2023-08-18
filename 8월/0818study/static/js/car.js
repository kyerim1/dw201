let data=new Object();

const types=["하이브리드","수소","경유","휘발유","전기"];

async function getData(){
    var temp = await fetch("./static/js/연료별용도별자동차등록현황.json").then((res)=>res.json());
    console.log(temp);
    refine(temp);
}

$( async function(){
    await getData();
    const ctx = $("#car")[0];

    var fuel = Object.keys(data);
    var year = Object.keys(data[types[0]]);
    // var color=["SpringGreen","DarkTurquoise","DodgerBlue","Orange","LightCoral"];
    // var dataset=[];
    // $.each(fuel,function(i,t){
    //     dataset.push( {
    //         label:t,
    //         data:data[t],
    //         borderColor:color[i],
    //         backgroundColor:color[i],
    //     })
    // })
    
    new Chart(ctx,{
        type:"line",
        data:{
            labels:year,
            datasets:   //dataset
            [
                {
                    label:fuel[0],
                    data:Object.values(data[fuel[0]]),
                    borderColor:"DarkTurquoise",
                    backgroundColor:"DarkTurquoise",
                    yAxisID:fuel[0]
                },
                {
                    label:fuel[1],
                    data:data[fuel[1]],
                    borderColor:"DodgerBlue",
                    backgroundColor:"DodgerBlue",
                    yAxisID:"전기"
                },
                {
                    label:fuel[2],
                    data:data[fuel[2]],
                    borderColor:"Orange",
                    backgroundColor:"Orange",
                    yAxisID:"하이브리드"
                },
                {
                    label:fuel[3],
                    data:data[fuel[3]],
                    borderColor:"LightCoral",
                    backgroundColor:"LightCoral",
                    yAxisID:"휘발유"
                },
                {
                    label:fuel[4],
                    data:data[fuel[4]],
                    borderColor:"SpringGreen",
                    backgroundColor:"SpringGreen",
                    yAxisID:"경유"
                },
            ]
        },
        options:{
            // plugins:{legend:{labels:{font:{size:20}}}},
            scales:{
                "수소":{
                    min:500,
                    max:7000,
                    ticks:{color:"DarkTurquoise"}
                    ,position:"right"
                },
                "전기":{ min:11000,
                    max:51000,
                    ticks:{color:"DodgerBlue"},position:"right"
                },
                "하이브리드":{min:140000,
                    max:310000,ticks:{color:"orange"},position:"right"
                },
                "휘발유":{min:2700000,
                    max:3100000,ticks:{color:"LightCoral"},position:"left"},
                "경유":{min:1450000,
                        max:1500000,ticks:{color:"SpringGreen"},position:"left"}
                    
                // x:{ticks:{font:{size:20}}}
            }
        }
    });
});
function refine(temp){
    $.each(temp,function(i,c){
        var type='';
        if( (type=include(c.DTCONT)) == '' || c.PURPOS_DIV==="사업용") return true;
        if( !(type in data)) // 연료명으로 key가 있냐 없냐
            data[type]=new Object();  // 없으면 연료명으로 key 생성
        if( !( c.REG_YY in data[type]) ) // 년도로 키가 있냐 없냐
            data[type][c.REG_YY]=Number(c.RIDNG_ODR); //없으면 년도 키 생성 하고 키에 승용차수저장
        else
            data[type][c.REG_YY]+=Number(c.RIDNG_ODR);//승용차수 누적
    });
    console.log(data);
}
function include(kind){
    for(var i in types){
        if(kind.indexOf(types[i]) > -1)
            return types[i];
    }
    return '';
}