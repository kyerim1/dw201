//  import는  외부 파일에서 가져오는 방법이고
// export는 외부로 내보내는 방법이다.
export default function sum(a,b){ // sum 함수를 외부로 내보낸다.
    return a+b;
}

export function makeTable(id, row,col){
    var tb = document.getElementById(id);
    var tag='<table>';
    for(var i=1; i<=row; i++){
        tag += "<tr>";
        for(var k=1; k<=col; k++){
            tag += "<td></td>";
        }
        tag+="</tr>";
    }
    tag+='</table>';
    tb.innerHTML=tag;
}