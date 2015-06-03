function del(){
    two= document.body.getElementsByTagName('img')[1];
    document.body.childNodes[1].removeChild(two);
}
function cre(){
    myImg=document.createElement('img');    
    document.body.childNodes[1].appendChild(myImg);
    document.getElementsByTagName('img')[4].src="img/5.png";
}
function cha(){
    img2= document.getElementsByTagName('img')[1];
    img4= document.getElementsByTagName('img')[3];
    document.body.childNodes[1].replaceChild(img4,img2);
    
    myImg2=document.createElement('img');    
    document.body.childNodes[1].appendChild(myImg2);
    document.getElementsByTagName('img')[3].src="img/2.png";
}
