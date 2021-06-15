var swiper = new Swiper('.swiper-container1', {
    spaceBetween: 30,
    effect: 'fade',
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    }
})

swiper.el.onmouseover = function() {
    swiper.autoplay.stop()
}

swiper.el.onmouseout = function() {
    swiper.autoplay.start()
}

var hour = document.querySelector('.hour'); // 小时的黑色盒子
var minute = document.querySelector('.minute'); // 分钟的黑色盒子
var second = document.querySelector('.second'); // 秒数的黑色盒子
var inputTime = +new Date('2021-6-19 00:00:00'); // 返回的是用户输入时间总的毫秒数
countDown(); // 我们先调用一次这个函数，防止第一次刷新页面有空白 
// 2. 开启定时器
setInterval(countDown, 1000);
var item = document.querySelectorAll('.nav-item')
move();

function move() {
    $('.swiper-container1 .swiper-button-prev').css("left", $('.nav-item').css("width"));
    $('.nav-item-link').css('background-position', $('.nav-item').width() - 40);
    $('.fu').css("margin-left", $('.container-fluid').width() / 2);
}
window.onresize = function() {
    move();
};
// setInterval(move, 200);
$('.nav-wrapper .nav-item').mouseover(function() {
    $('.children ').css("left", $('.nav-item').css("width"));
    $('.children ').css("height", $('.swiper').css("height"));
    $('.children-col-4 ').css("width", $('.swiper').width() - $('.nav-item').width());
    $('.children-col-3 ').css("max-width", $('.swiper').width() - $('.nav-item').width());
    $('.children-col-2 ').css("max-width", $('.swiper').width() - $('.nav-item').width());
});
$('item').mouseover(function() {
    $('.children-list li ').css("line-height", $('.children-list li').css("height"));
});

function countDown() {
    var nowTime = +new Date(); // 返回的是当前时间总的毫秒数
    var times = (inputTime - nowTime) / 1000; // times是剩余时间总的秒数 
    var h = parseInt(times / 60 / 60 % 24); //时
    h = h < 10 ? '0' + h : h;
    hour.innerHTML = h; // 把剩余的小时给 小时黑色盒子
    var m = parseInt(times / 60 % 60); // 分
    m = m < 10 ? '0' + m : m;
    minute.innerHTML = m;
    var s = parseInt(times % 60); // 当前的秒
    s = s < 10 ? '0' + s : s;
    second.innerHTML = s;
}
var swiper = new Swiper('.swiper-container2', {
    autoplay: false,
    pagination: '.swiper-pagination',
    paginationClickable: true,
    slidesPerView: 4,
    slidesPerGroup: 4,
    spaceBetween: 20,
    breakpoints: {
        1024: {
            slidesPerView: 4,
            slidesPerGroup: 4,
            spaceBetween: 15
        },
        768: {
            slidesPerView: 3,
            slidesPerGroup: 3,
            spaceBetween: 10
        },
        640: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 5
        },
        320: {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 5
        }
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    }
});