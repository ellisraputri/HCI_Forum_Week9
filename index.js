$(document).ready(function(){
    $(".info").hide();
    $('.pic2').hide();
    $('#Demo').hide();
    $('.fun').hide();
    $('.button4').hide();
    
    $('.header1').hover(function(){
        $(".info").fadeToggle();
    });

    $('.navv').hover(function(){
        $(this).delay(5000).toggleClass('nav');
    });

    $('.pic1').mouseover(function(){
        $('.pic1').fadeOut();
        $('.pic2').delay(500).fadeIn();
        $('.hoverinfo').text('Hover away to see the previous picture!');
    });

    $('.pic2').mouseleave(function(){
        $('.pic2').fadeOut();
        $('.pic1').delay(500).fadeIn();
        $('.hoverinfo').text('Hover the picture to see another picture!');
    });
    
    let t=0;
    $('.button1').click(function(){
        t+=1;
        if(t%2==0){
            teks="Click to open me!";
        }
        else{
            teks="Close";
        }
        $('#Demo').toggle();
        $(this).text(teks);
        $(this).toggleClass('but2');
    });

    $('.button2').click(function(){
        $('.fun').show();
        $(this).hide();
        $('.button3').hide();
        $('.ques').text("Here is the fun fact:");
        $('.button4').delay(1000).fadeIn();
    });

    $('.button4').click(function(){
        $('.button2').show();
        $('.button3').show();
        $('.button4').hide();
        $('.fun').hide();
        $('.ques').html('<b>Do you want to know a fun fact about me?</b>');
    });

    $('.button3').click(function(){
        $('.ques').text("Thank you for responding!");
        $('.button4').delay(1000).fadeIn();
        $(this).hide();
        $('.button2').hide();
    });

    

    
});