$(document).ready(function(){
    $(".info").hide();
    $('.sdyosi').hide();
    $('.smpyosi').hide();
    $('.smayosi').hide();
    $('.binusi').hide();
    
    $('.header1').hover(function(){
        $(".info").fadeToggle();
    });

    $('.navv').hover(function(){
        $(this).delay(5000).toggleClass('nav');
    });

    $('.sdyos a').hover(function(){
        $('.sdyosi').fadeToggle();
    });

    $('.smpyos a').hover(function(){
        $('.smpyosi').fadeToggle();
    });

    $('.smayos a').hover(function(){
        $('.smayosi').fadeToggle();
    });

    $('.binus a').hover(function(){
        $('.binusi').fadeToggle();
    });
    
    let value_c=1, value_cpp=1, value_htm=1, value_css=1;
    $('.cli input').click(function(){
        value_c+=1;
        if(value_c%2==0){
            $('.c').hide();
        }
        else{
            $('.c').show();
        }
    });

    $('.cppli input').click(function(){
        value_cpp+=1;
        if(value_cpp%2==0){
            $('.cpp').hide();
        }
        else{
            $('.cpp').show();
        }
    });

    $('.htmli input').click(function(){
        value_htm+=1;
        if(value_htm%2==0){
            $('.htm').hide();
        }
        else{
            $('.htm').show();
        }
    });

    $('.cssli input').click(function(){
        value_css+=1;
        if(value_css%2==0){
            $('.css').hide();
        }
        else{
            $('.css').show();
        }
    });

    
});