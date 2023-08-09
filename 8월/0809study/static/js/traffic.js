let data=[];  // json 데이터 저장할 변수
let fire_stat=new Object();

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
    var keys = Object.keys(fire_stat);
    $.each(keys,function(i,key){
        var td1 = "";
        var td2 = "<tr>";
        for(var i=1; i<=fire_stat[key].출동건수; i+=5)
            td1+="<td class='red' width=5></td>";
        for(var i=1; i<=fire_stat[key].환자수; i+=5)
            td2+="<td class='blue' width=5></td>";
        td2+="</tr>";

        $("#gp").append("<tr><td class='name' rowspan='2'>"+key+"</td>"+td1+"</tr>");
        $("#gp").append(td2);

    })
    console.log(fire_stat);
});