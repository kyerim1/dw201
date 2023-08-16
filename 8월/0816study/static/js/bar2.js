const ctx=$("#acc")[0];

const name=["김승겸","안태균","송은선","이상준","김선향","신상수"];
const exam=[3,2,5,1,6,4];
const question=[5,1,2,7,2,3];
const attitude=[6,5,6,4,3,2];



new Chart(ctx,{
    plugins:[ChartDataLabels],
    type:"bar",
    data:{
        labels:name,
        datasets:[
            {
                label:"시험",
                data:exam,
                backgroundColor:"orange",
                datalabels:{align:"end",anchor:"start"}
            },
            {
                label:"질문",
                backgroundColor:"tomato",
                data:question,
                datalabels:{align:"center",anchor:"center"}
            },
            {
                label:"태도",
                backgroundColor:"sienna",
                data:attitude,
                datalabels:{align:"end",anchor:"center"}
            }
        ],
    },
    options:{
        plugins:{
            datalabels:{
                formatter:function(v,c){
                    return v+"개";
                },color:"white"
            },
            title:{
                display:true,
                text:"커피누적"
            }
        },
        scales:{
            x:{ stacked:true},
            y:{stacked:true}
        }
    }
});

