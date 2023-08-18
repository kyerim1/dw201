let data=new Object();

const types=["하이브리드","수소","경유","휘발유","전기"];

async function getData(){
    var temp = await fetch("./static/js/연료별용도별자동차등록현황.json").then((res)=>res.json());
    console.log(temp);
    refine(temp);
}

$( async function(){
    await getData();

});
function refine(temp){
    $.each(temp,function(i,c){
        var type='';
        if( (type=include(c.DTCONT)) == '' || c.PURPOS_DIV==="사업용") return true;
        if( !(type in data))
            data[type]=new Object();
        if( !( c.REG_YY in data[type]) )
            data[type][c.REG_YY]=Number(c.RIDNG_ODR);
        else
            data[type][c.REG_YY]+=Number(c.RIDNG_ODR);
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