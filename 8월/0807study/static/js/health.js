//  스크립트에서 배열을 생성할때는  const를 많이 사용한다.  
//  배열의 주소는 변하지 않고 값만 변동이 있기때문에  배열의 주소변조를 막기위해 const를 사용한다.
/*
    자바스크립트 비동기 -  aysnc  , await, promose 
    자바스크립트에서 비동기 처리 3가지 방법
     1. 콜백함수  -  무한 콜백, callback hell 
     2. promise 
     3. aysnc/await

*/
let data_list= new Object(); // json 데이터 저장할 전역변수
// $.getJSON("./전국건강증진센터표준데이터.json",function(data){
//     data_list =data.records;
//  });
 
async function getData(){
        // var d="";
        // $.getJSON("./전국건강증진센터표준데이터.json",function(data){
        //     d =data.records;
        // });
        // return d;
        var data = await fetch("https://api.odcloud.kr/api/15031992/v1/uddi:3c46e4ef-78dc-4da6-97b1-ad226624eff5_201911131644?page=1&perPage=500&serviceKey=aU2M7WTPerUiHviK%2Bo%2FXiW8lJKziToXUzCR94DRarfLfWW6nbPM%2FkuOYo%2Fntj30U24svccnw4EMvwXj3ccN%2Bxg%3D%3D").then(function(res){ return res.json();}).then(function(r){return r;});
        console.log(data.records);
        return data.records;
}

$(async function(){
    $(".filterMore").click(function(){
        $(this).toggleClass("moreDown");
        $(this).toggleClass("moreUp");
        $(".filterDetail").slideToggle();
    });
   data_list = await getData();
   view(data_list);

    

// 전체 텍스트에 대한 검색이 아니라
//  소재지주소와 업무내용에 한해서만  검색이 가능하게 변경하시오
    $("#searchWord").on("keyup",function(){
            search();
    });


    $(".sort_obj").click(function(){
        $(this).toggleClass("asc");
        $(this).toggleClass("desc");
        var name = $(this).data("name");
        const sort_type= { centerName:"건강증진센터명" ,
addr:"소재지도로명주소" , nurseCount:"간호사수", doctorCount:"의사수"};
        var has = -1;
        if( $(this).hasClass("asc") ) has=1;
        
        data_list.sort(function(a,b){
            if( a[sort_type[name]] > b[sort_type[name]]) return 1*has;
            if( a[sort_type[name]] < b[sort_type[name]]) return -1*has;
            if(a[sort_type[name]]===b[sort_type[name]]) return 0;
        });

        view(data_list);
      
    });
   

    /* 상세검색 부분 */
    $("input[type=checkbox]").change(function(){
        search();
    });
    $("input[type=radio]").change(function(){
        search();
    });

});

function search(){
    const word = $("#searchWord").val();
    let classify=new Array();
    let location=new Array();
    let task = new Array();
    let nurse = new Array();
    let social = new Array();
    $("input[name=classify]:checked").each(function(){ classify.push($(this).val());});
    $("input[name=location]:checked").each(function(){ location.push($(this).val());});
    $("input[name=task]:checked").each(function(){ task.push($(this).val());});
    $("input[name=nurse]:checked").each(function(){ nurse.push($(this).val());});
    $("input[name=social]:checked").each(function(){ social.push($(this).val());});

    $(".item_short").filter(function(){
        
        var isShow=true;
        var idx = $(this).index();

        if(word!=''){
            var addr = $(this).find(".item_detail").children("li:eq(1)");
            var task1 = $(this).find(".item_detail").children("li:eq(2)");
            var hasAddr = addr.text().indexOf(word) > -1;
            var hasTask = task1.text().indexOf(word) > -1;
            isShow= hasAddr || hasTask;
        }
        
        if(classify.length!=0 && isShow){
            if( classify.indexOf(data_list[idx].건강증진센터구분) == -1) isShow=false;
        }
        if(location.length!=0 && isShow){
            isShow=false;
            for(var i=0; i< location.length; i++){
                if( data_list[idx].소재지도로명주소.indexOf(location[i]) > -1){
                    isShow=true; break;
                }
            }
        }

        if( task.length!=0 && isShow ){ //업무 상세검색
            isShow=false;
            for(var i=0; i<task.length; i++){
                if( data_list[idx].건강증진업무내용.indexOf(task[i]) > -1 ){
                    isShow=true;
                    break;
                }
            }
        }
        if(nurse.length!=0 && isShow){  // 간호사수 상세검색
            if (Number(data_list[idx].간호사수) >= Number(nurse[0])) isShow=true;
            else isShow=false;
        }
        if(social.length!=0 && isShow){  // 간호사수 상세검색
            if (Number(data_list[idx].사회복지사수) >= Number(social[0])) isShow=true;
            else isShow=false;
        }


        $(this).toggle( isShow );
    });
}


function view(data_list){
    $("#section").empty();
    $.each(data_list, function(i, item){
        $("#section").append(
"<div class='item_short'><div class='item_image'>"+
"<img src='https://loremflickr.com/200/200/health?random="+i+"'></div>"+
"<div class='item_detail_box'><ul class='item_detail'>"+
"<li>"+item.건강증진센터명+"</li><li>"+item.소재지도로명주소+"</li>"+
"<li>"+item.건강증진업무내용+"</li><li>"+item.건강증진센터구분+"</li>"+
"<li>"+item.운영기관명+"</li><li>"+item.운영기관전화번호+"</li></ul></div></div>"
        );
   });
}



/*
인천광역시 인공어초시설 현황 데이터 활용

어초 종류, 어초수량, 설치년도  별로 검색 가능 하게 만들기
checkbox로 !!!!!!!!!!!!



*/