var x = true;


$("html").click(function(){
    if(x){
        // 头部添加
        var title = document.title;
        var headerh = '<h3>'+title+'</h3><div><img src="https://a-b.cc/wp-content/uploads/iconder.webp" alt="[ '+title+' ]"/></div><p>一个汇集艺术创作素材的元素小宇宙</p><ul><li><a href="/">站点主页</a></li><li><a href="www.a-b.cc">网站导航</a></li><li><a href="https://pan.baidu.com/s/4mqNq3n6">参与分享</a></li><li><a href="https://a-b.cc">个人博客</a></li></ul>';
        $(".header").append(headerh);
    }
})

window.onload = function(){
    setTimeout(function() {
        $("html").click();
        x = false;
    }, 100);
}