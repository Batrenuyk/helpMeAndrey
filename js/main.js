
//a= $('nav a');
//function active(){
//    for(i=0;i<a.length;i++){
//        if(a[i]===this){
//            a[i].className='active';
//        }
//        else{
//            a[i].className=' ';
//        } 
//    }
//}
//for(i=0;i<a.length;i++){
//    a[i].addEventListener("click", active, false);
//}
//
//

margin = 0;
$('#right1').click(function(){
    var a= $('.carouselCont');
    containerWidth = a.width();
if(margin > -containerWidth){
        margin= margin - 340;
        $('.carouselCont').css({'margin-left': margin});
        }
//        $('#right1').css({display: 'none'});
//        $('#left12').css({display: 'block'});
//        i=1;
//    
//        
//            
////            $('#left12').css({display: 'none'});
////            $('#right1').css({display: 'block'});           
//        
});
$('#left1').click(function(){
    var a= $('.carouselCont');
    containerWidth = a.width();
    
   if(margin > + containerWidth) {
            margin= margin + 340;
            $('.carouselCont').css({'margin-left': margin});
        }
});

