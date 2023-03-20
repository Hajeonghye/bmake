$(function(){
    $('.nav li').mouseenter(function(){
        $('.gnb').stop().slideDown();
    });
    $('.nav li').mouseleave(function(){
        $('.gnb').stop().slideUp();
    });
});