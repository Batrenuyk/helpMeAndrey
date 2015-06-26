var $container = $('.carousel .carousel-container'),
    $items = $container.find('.twoList'),
    itemMargin = parseInt($items.css('marginRight')),
    containerWidth = ($items.width() + itemMargin * 2) * $items.length;
    carousel = {
        step: 4,
        move: function(direction) {
            var containerMargin = parseInt($container.css('margin-left')),
                itemWidth = (itemMargin * 2 + $items.width()),
                diff = itemWidth * carousel.step,
                visibleItems = itemWidth * 4;
        
            if(direction === 'forward' && containerMargin <= -(containerWidth - visibleItems)) {
                // дошло до конца - ничего не делаем
            } else if(direction === 'forward' && containerMargin > -(containerWidth - visibleItems)) {
                // прокручиваем вперед на количество carousel.step
                $container.css('margin-left', containerMargin - diff);
            
            } else if(direction === 'back' && containerMargin >= 0) {
                // дошло до начала - ничего не делаем
            } else if(direction === 'back' && containerMargin < 0) {
                // прокручиваем назад на количество carousel.step
                $container.css('margin-left', containerMargin + diff);
            
            }
        }
    }

$container.width(containerWidth);

$('#right1').on('click', function(event) {
    carousel.move('forward');
});

$('#left1').on('click', function(event) {
    carousel.move('back');
});

//$('#button1').click(function(){
//    $('#ref_1').text('vishel zaychik pogylyat');
//});
//
//
//
//$('.reference2 .dano input').click(function(){
//    $('.reference2 li').not("li:nth-child(2)").remove();
//});
//
//
//
//$('.reference3 .dano input').click(function(){
//    $('.reference3 .dano').append('<ul id="ololo"></ul>');
//    $($('.reference3 .dano ul li').get().reverse()).each(function() {
//    var a = $(this).text();
//        $('#ololo').append('<li>'+a+'</li>');
//});
//$('#el').css({display: 'none'});
//});
//
//
//
//$('.reference4 .dano input').click(function(){
//    $('#button1').css({background:'#D37373'});
//});
//
//
//
//$('.reference5 .dano input').click(function(){
//    $('input').css({background:'#D37373'});
//});
//
//
//
//$('.reference6 .dano input').click(function(){
//    $('.hidden').css({display: 'block'});
//});
//
//
//
//$('.reference7 .dano input').click(function(){
//    window.scrollTo(0,0);
//});