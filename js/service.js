var swiper = new Swiper('.swiper-container', {
    speed: 500,
    pagination: {
        el: '.swiper-pagination',
        clickable: true // 此参数设置为true时， 点击分页器的指示点分页器会控制Swiper切换。
    },
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    autoplay: {
        delay: 3000,
        stopOnLastSlide: false,
        disableOnInteraction: false,
        pauseOnMouseEnter: true
    }
});
$(function() {
    // 1.点击上部的li，当前li 添加current类，其余兄弟移除类
    $('.tab_list li').mouseover(function() {
        // 链式编程操作
        $(this).addClass('current').siblings().removeClass('current');
        // 2.点击的同时，得到当前li 的索引号
        var index = $(this).index();
        // 3.让下部里面相应索引号的item显示，其余的item隐藏
        $('.tab_con .item').eq(index).show().siblings().hide();
    });
})