
a= $('nav a');
function active(){
    for(i=0;i<a.length;i++){
        if(a[i]===this){
            a[i].className='active';
        }
        else{
            a[i].className=' ';
        } 
    }
}
for(i=0;i<a.length;i++){
    a[i].addEventListener("click", active, false);
}


var i=0;
$('.right').click(function(){
    if(i===0){
        $('.carouselCont').css({'margin-left': '-340px'});
        
        $('#right1').css({display: 'none'});
        $('#left12').css({display: 'block'});
        i=1;
    }
        else{
            $('.carouselCont').css({'margin-left': '0px'});
            $('#left12').css({display: 'none'});
            $('#right1').css({display: 'block'});           
            i=0;
        }
});
