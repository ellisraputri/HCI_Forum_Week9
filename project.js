$(document).ready(function(){
    $(".info").hide();
    $('.pr1').hide();
    $('.pr2').hide();
    $('.pr3').hide();
    
    $('.header1').hover(function(){
        $(".info").fadeToggle();
    });

    $('.navv').hover(function(){
        $(this).delay(5000).toggleClass('nav');
    });

    let t=0;
    $('.button1').click(function(){
        t+=1;
        if(t%2==0){
            teks="Show Details";
        }
        else{
            teks="Hide Details";
        }
        $('.pr1').slideToggle();
        $(this).text(teks);
    });

    let a=0;
    $('.button2').click(function(){
        a+=1;
        if(a%2==0){
            teks="Show Details";
        }
        else{
            teks="Hide Details";
        }
        $('.pr2').slideToggle();
        $(this).text(teks);
    });

    let b=0;
    $('.button3').click(function(){
        b+=1;
        if(b%2==0){
            teks="Show Details";
        }
        else{
            teks="Hide Details";
        }
        $('.pr3').slideToggle();
        $(this).text(teks);

        
    });

    
    

    

    

    
});