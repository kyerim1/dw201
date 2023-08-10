async function getData(){
    var temp = await fetch("./traffic.json").then((r)=>r.json());
    //console.log(temp);
    return temp.body.items;
}

$(async function(){
    data = await getData();

});

/*
    각 소방서 의 총 출동건수를  세로 막대로 캔버스에 표현하시오
*/