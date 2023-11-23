$(document).ready(function(){
    $(".info").hide();
    $('.holmes p').hide();
    $('.conan p').hide();
    $('.genshin p').hide();
    $('.honkai p').hide();
    $('.hsr p').hide();
    
    $('.header1').hover(function(){
        $(".info").fadeToggle();
    });

    $('.navv').hover(function(){
        $(this).delay(5000).toggleClass('nav');
    });

    $('.holmes').mouseover(function(){
        $('.holmes p').slideDown();
        $('.holmes figcaption').html('<b>Sherlock Holmes</b>');
    });
    $('.holmes').mouseleave(function(){
        $('.holmes p').slideUp();
        $('.holmes figcaption').html('Sherlock Holmes');
    });

    $('.conan').mouseover(function(){
        $('.conan p').slideDown();
        $('.conan figcaption').html('<b>Detective Conan</b>');
    });
    $('.conan').mouseleave(function(){
        $('.conan p').slideUp();
        $('.conan figcaption').html('Detective Conan');
    });

    $('.genshin').mouseover(function(){
        $('.genshin p').slideDown();
        $('.genshin figcaption').html('<b>Genshin Impact</b>');
    });
    $('.genshin').mouseleave(function(){
        $('.genshin p').slideUp();
        $('.genshin figcaption').html('Genshin Impact');
    });

    $('.honkai').mouseover(function(){
        $('.honkai p').slideDown();
        $('.honkai figcaption').html('<b>Honkai Impact</b>');
    });
    $('.honkai').mouseleave(function(){
        $('.honkai p').slideUp();
        $('.honkai figcaption').html('Honkai Impact');
    });

    $('.hsr').mouseover(function(){
        $('.hsr p').slideDown();
        $('.hsr figcaption').html('<b>Honkai Star Rail</b>');
    });
    $('.hsr').mouseleave(function(){
        $('.hsr p').slideUp();
        $('.hsr figcaption').html('Honkai Star Rail');
    });

    

    

    

    
});