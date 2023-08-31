// template.js

module.exports = {
    homeHTML:function(main){
        var menu = "";
        for(var key of Object.keys(main.menu)){
            menu+=`<li class="menu"><a href="/${key}">${main.menu[key]}</a></li>`;
        }

        return (`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>스드메의 모든것</title>


</head>
<body>
    <div id="wrap">
        <header id="header">
            <div class="logo"><a href="/"><img src="./image/${main.logo}"></a></div>
            <nav class="nav">
                <ul class="menuList">
                   ${menu}
                </ul>
            </nav>
        </header>
        <main id="main">
            <section id="content">
                <img src="./image/${main.main_img}">
            </section>
            <section id="side">
                
            </section>
        </main>
    </div>
</body>
</html>
        `);
    }
}