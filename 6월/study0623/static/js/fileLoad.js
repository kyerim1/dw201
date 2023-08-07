
export function FileLoad(lotto, e){
        let target = e.target; // 선택된 파일 참조
        let files = target.files; // 선택 되 파일은 배열의 형식으로 저장된다.
        //  첫번째 파일 참조를 해야 내가 선택한 파일을 읽을수 있다.
        let reader = new FileReader();
        reader.addEventListener("load",function(){
            var str = reader.result;
            //return str;
            var temp = str.split("\n");
            
            for( var i in temp){
                lotto.push( temp[i].split("\t") );
            }
            alert(lotto[0][3]);
            
        });
        reader.readAsText(files[0]);
}


