var x = true;


$("html").click(function(){
    if(x){
        // 头部添加
        var title = "素材宝库";
        var headerh = '<h3>'+title+'</h3><div class="avatar"><a target="_blank" href="https://a-b.cc"><img src="https://A-B.CC/wp-content/uploads/iCool.svg" title="前往宝秘基地🛸"></a></div><p>一个汇集艺术创作素材的元素小宇宙</p><ul><li><a href="/" title="返回本站首页🔙">🏠主页面</a></li><li><a href="https://www.a-b.cc" title="一个网址导航🧭">🚀导航站</a></li><li><a href="https://pan.baidu.com/s/4nyfYvsH" title="共筑美好未来💫">💎同参与</a></li><li><a href="https://i.a-b.cc/comment.html" title="分享奇思妙想🤯">📝留言栏</a></li></ul>';
        $(".header").append(headerh);
    }
})

window.onload = function(){
    setTimeout(function() {
        $("html").click();
        x = false;
    }, 100);
}