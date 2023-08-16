const love = [100,95,89,96,75,64,93];
const day=[10,20,50,100,200,300,365];

const ctx = $("#line1")[0];

const loveData={
    labels:day,
    datasets:[{
        label:"사랑지수",
        data:love,
    }]
}
const chartOption={
    
}

new Chart(ctx,{
    type:"line",
    data:loveData,
    options:chartOption
});


