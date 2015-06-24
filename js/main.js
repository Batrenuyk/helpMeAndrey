
$('#button1').click(function(){
    $('#ref_1').text('vishel zaychik pogylyat');
});



$('.reference2 .dano input').click(function(){
    $('.reference2 li').not("li:nth-child(2)").remove();
});



$('.reference3 .dano input').click(function(){
    $('.reference3 .dano').append('<ul id="ololo"></ul>');
    $($('.reference3 .dano ul li').get().reverse()).each(function() {
    var a = $(this).text();
        $('#ololo').append('<li>'+a+'</li>');
});
$('#el').css({display: 'none'});
});



$('.reference4 .dano input').click(function(){
    $('#button1').css({background:'#D37373'});
});



$('.reference5 .dano input').click(function(){
    $('input').css({background:'#D37373'});
});



$('.reference6 .dano input').click(function(){
    $('.hidden').css({display: 'block'});
});



$('.reference7 .dano input').click(function(){
    window.scrollTo(0,0);
});