const http= require('http');
const fs =require('fs');
const url=require('url');
const template = require('./lib/template.js');
const JStemp = require('./lib/JStemplate.js');
const dataParse = JSON.parse(fs.readFileSync('./lib/page.json','utf8'));
const member = JSON.parse(fs.readFileSync('./lib/member.json','utf8'));
let cookie_arr=[];

const app = http.createServer(function(request, response){
    const pageURL=request.url;
    const query = url.parse(pageURL,true).query;// 쿼리 스트링
    const path = url.parse(pageURL,true).pathname; //루트도메인 뒤 주소

    if(path.indexOf(".")==-1){
        var html='';
        if( path ==="/"){
            if(query.sdmId==undefined)
                html = template.homeHTML(dataParse.main, dataParse.login_before);
            else{//파라미터에 id가 있다면
                for(var m of member){
                    if(m.sdmId==query.sdmId && m.sdmPw== query.sdmPw){
                        cookie_arr=['isLogin=true','id='+query.sdmId];
                        dataParse.login_after.id=query.sdmId;
                        break;
                    }
                }
                html = template.homeHTML(dataParse.main, dataParse.login_after);
            }
        }
        if(path==='/login'){
            html = template.loginHTML(dataParse.main);
            html += JStemp.login();
        }
        if(path==='/sign'){
            html = template.signHTML(dataParse.main, dataParse.sign);
        }
        if(path==='/qs'){
            var qdata = JSON.parse(fs.readFileSync('./lib/question.json','utf8'));
            html = template.questionHTML(dataParse.main, dataParse.login_before, qdata );

        }
        response.writeHead(200,
            { 'Set-Cookie':cookie_arr } );
        response.write(html);
        response.end();
    }
    if(path.indexOf('.css') > -1){
        var css_name = path.slice('/lib/'.length);
        fs.readFile('./lib/'+css_name,function(err,data){
            response.writeHead(200);
            response.write(data);
            response.end();
        });
    }
    if(path.indexOf('/image') > -1){
        var img_name = path.slice('/image/'.length);
        fs.readFile('./image/'+img_name,function(err,data){
            response.writeHead(200);
            response.write(data);
            response.end();
        });
    }

});
app.listen(3000);





/*
    로그인 버튼 클릭시 로그인 화면이 나오게 만드세요 !

*/