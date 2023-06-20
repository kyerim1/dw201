function getNum(id){
    return parseInt(document.getElementById(id).value);
}

function output(){
    var kor=getNum("kor");
    var mat=getNum("mat");
    var eng=getNum("eng");
    var out=document.getElementById("out"); //출력태그

    var avg= (kor+mat+eng) / 3; //평균

    kor = "국어 : "+grade(kor);
    mat = "수학 : "+grade(mat);
    eng = "영어 : "+grade(eng);
    avg = "평균 : "+grade(avg);

    out.innerHTML = kor+"<br>"+mat+"<br>"+eng+"<br>"+avg;

}
function grade(score){ //등급 구하기 용 함수
    if(score>=90)  return "A등급";
    else if(score>=80) return "B등급";
    else if(score >= 70) return "c등급";
    else return "F등급";
}