const http= require('http');
const fs =require('fs');
const url=require('url');
const template = require('./lib/template.js');
const dataParse = JSON.parse(fs.readFileSync('./lib/page.json','utf8'));

const app = http.createServer(function(request, response){
    const pageURL=request.url;
    const query = url.parse(pageURL,true).query;// 쿼리 스트링
    const path = url.parse(pageURL,true).pathname; //루트도메인 뒤 주소

    if(path.indexOf(".")==-1){
        var html='';
        if( path ==="/"){
            html = template.homeHTML(dataParse.main, dataParse.login_before);
        }
        if(path==='/login'){
            html = template.loginHTML(dataParse.main);
        }
        if(path==='/sign'){
            html = template.signHTML(dataParse.main, dataParse.sign);
        }
        if(path==='/qs'){
            var qdata = JSON.parse(fs.readFileSync('./lib/question.json','utf8'));
            html = template.questionHTML(dataParse.main, dataParse.login_before, qdata );

        }
        response.writeHead(200);
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