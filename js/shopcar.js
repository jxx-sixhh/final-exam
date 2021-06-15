$(function() {
    // 全选功能
    $('.checkall').change(function() {
        $('.j-checkbox,.checkall').prop('checked', $(this).prop('checked'));
        if ($(this).prop("checked")) {
            // 让所有的商品添加 check-cart-item 类名
            $(".cart-item").addClass("check-cart-item");
        } else {
            // check-cart-item 移除
            $(".cart-item").removeClass("check-cart-item");
        }
        getSum();
    })
    $('.j-checkbox').change(function() {
        if ($('.j-checkbox:checked').length == $('.j-checkbox').length) {
            $('.checkall').prop('checked', true);
        } else {
            $('.checkall').prop('checked', false);
        }
        if ($(this).prop("checked")) {
            // 让当前的商品添加 check-cart-item 类名
            $(this).parents(".cart-item").addClass("check-cart-item");
        } else {
            // check-cart-item 移除
            $(this).parents(".cart-item").removeClass("check-cart-item");
        }
        getSum();
    })

    // 增减商品数量

    $('.increment').click(function() {
        var n = $(this).siblings('.itxt').val();
        n++;
        $(this).siblings('.itxt').val(n);
        //计算小计模块，根据 文本框的值 乘以当前商品的价格，就是商品的小计
        var p = $(this).parents('.p-num').siblings('.p-price').html();
        $(this).parents('.p-num').siblings('.p-price').html()
        p = p.substr(1);
        var price = (p * n).toFixed(2);
        $(this).parents('.p-num').siblings('.p-sum').html('￥' + price);
        getSum();
    })
    $('.decrement').click(function() {
            var n = $(this).siblings('.itxt').val();
            if (n <= 1) {
                return false;
            }
            n--;
            $(this).siblings('.itxt').val(n);
            var p = $(this).parents('.p-num').siblings('.p-price').html();
            $(this).parents('.p-num').siblings('.p-price').html()
            p = p.substr(1);
            var price = (p * n).toFixed(2);
            $(this).parents('.p-num').siblings('.p-sum').html('￥' + price);
            getSum();
        })
        // 用户直接修改了文本框
    $('.itxt').change(function() {
            // 先得到文本框里面的值
            var n = $(this).val();
            var p = $(this).parents('.p-num').siblings('.p-price').html();
            p = p.substr(1);
            var price = (p * n).toFixed(2);
            $(this).parents('.p-num').siblings('.p-sum').html('￥' + price);
            getSum();
        })
        // 计算总额模块
    getSum();

    function getSum() {
        var count = 0;
        var money = 0;
        $(".j-checkbox:checked").parents(".p-checkbox").siblings(".p-num").find(".itxt").each(function(i, ele) {
            count += parseInt($(ele).val());
        })
        $('.amount-sum em').text(count);
        $(".j-checkbox:checked").parents(".p-checkbox").siblings(".p-sum").each(function(i, ele) {
            money += parseFloat($(ele).text().substr(1));
        })
        $('.price-sum em').text('￥' + money.toFixed(2));
    }
    // 商品删除模块
    // 商品后的删除按钮
    $('.p-action a').click(function() {
            $(this).parents('.cart-item').remove();
            getSum();
        })
        //删除选中的按钮
    $('.remove-batch').click(function() {
            // 删除的是小的复选框选中的商品
            $(".j-checkbox:checked").parents('.cart-item').remove();
            getSum();
        })
        //请理购物车
    $('.clear-all').click(function() {
            // 删除的是小的复选框选中的商品
            $('.cart-item').remove();
            getSum();
        })
        // 加载时执行一次
    move();

    function move() {
        $('.fu').css("margin-left", $('.container-fluid').width() / 2);
        $('.p-num').css("padding-left", ($('.p-num').width() - $('.quantity-form').width()) / 2);
        $('.p-num').css("padding-right", $('.p-num').css("padding-left"));
    };
    // 监听
    window.onresize = function() {
        move();
    };
})

$(function() {
    $(".go").click(function() {
        $("body, html").stop().animate({
            scrollTop: 0
        });
    })
    $(".phone").hover(function() {
        $('.appcode').stop().slideToggle();
    })
    $(".phone").mouseover(function() {
        $('.three').show();
    })
    $(".phone").mouseout(function() {
        $('.three').hide();
    })
    $(".shopcar").hover(function() {
            $('.txt').stop().slideToggle();
        })
        // $(document).scrollTop(64);
    $(window).scroll(function() {
        if ($(document).scrollTop() >= 481) {
            $('.go').fadeIn();
        } else {
            $('.go').fadeOut();
        }
    })
});