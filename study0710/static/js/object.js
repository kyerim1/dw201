window.onload = function(){

    var body = document.getElementsByTagName("body");
    // body[0].innerHTML="<div>오늘 비와?</div>";

    var node = document.createElement("div"); //새로운 tag만들기
    node.setAttribute("id","rain"); //태그에 속성 부여
    node.addEventListener("click",function(){alert("선향 졸려?");})
    var text = document.createTextNode("오늘 비 많이와?");
    node.appendChild(text); //태그에 글씨넣기
    body[0].appendChild(node);// 만든 태그를 누구밑에?

}

function exit(){
    window.close();
}
function winopen(){
    window.open("https://www.naver.com","_blank","");
//window.open("주소","새창의이름또는 타겟","옵션");

// open함수의 두번째 인자로 
// _blank 또는 아무것도 넣지않으면
// 현재 브라우저에 새탭으로 열기하려면 옵션부분에 너비,높이 지정안하다.
// 너비와 높이를 지정하면 새 브라우저로 열기가된다.
}