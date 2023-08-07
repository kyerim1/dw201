const name=["선향","상수","민지","수호","배신","은선","지영","승겸","미안해"];
window.onload=function(){
    res=document.getElementById("res");
    for( var i=0; i<name.length; i++){
        if(i%2==0 && i!=6)
            res.append(name[i]);
    }
}