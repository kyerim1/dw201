const day=["5월","6월","7월","8월","9월"];
const clove = [34,56,86,43,12]; 
const plove = [11,24,95,35,23]; 
const nlove = [8,43,100,100,100]; 
const hlove = [0,5,70,89,94,14];  

const ctx = $("#line1")[0];

let bar1 = {
    data:clove,
    label:"ㅊㅎ",
    type:"bar",
    backgroundColor:"SpringGreen",
}
let bar2 ={
    data:plove,
    label:"ㅅㅎ",
    type:"bar",
    backgroundColor:"OrangeRed",
}
let bar3 ={
    data:nlove,
    label:"ㅅㅅ",
    type:"bar",
    backgroundColor:"LightPink",
}
let line1 ={
    data:hlove,
    label:"ㅅㅎ",
    type:"line",
    borderColor:"hotpink",
}
const loveData={
    labels:day,
    datasets:[
        line1,bar1,bar2,bar3
    ]
}
const chartOption={
    plugins: {
        title:{ display:true, text:"love변화 조사"}
    },
}
new Chart(ctx,{
    data:loveData,
    options:chartOption
});

/*
    오늘의 숙제 
    혼합 차트 만들기 ( 막대, 꺽은선)

    const day=["5월","6월","7월","8월","9월"];
    const clove = [34,56,86,43,12]; ->막대
    const plove = [11,24,95,35,23]; ->막대
    const nlove = [8,43,100,100,100]; ->막대
    const hlove = [0,5,70,89,94,14];  ->  꺽은선

*/
