/*----------------------------------------------------*/
/* Smooth Scrolling
------------------------------------------------------ */

jQuery(document).ready(function($) {

    $('.smoothscroll').on('click',function (e) {
         e.preventDefault();
 
         var target = this.hash,
         $target = $(target);
 
         $('html, body').stop().animate({
             'scrollTop': $target.offset().top
         }, 400, 'swing', function () {
             window.location.hash = target;
         });
     });
   
 });

// ham切換
$(".ham").click(function(){
    $(".header-globalnavi").fadeToggle(300).css('display', 'flex');
});
// 字體數量限制
// $(".mainvisual-news-title").each(function(){
//     var len=$(this).text().length;   //當前HTML物件text的長度
//     console.log(len);
//     if(len>16){
//         var str="";
//         str=$(this).text().substring(0,16)+"...";  //使用字串擷取，獲取前30個字元，多餘的字元使用“......”代替
//         $(this).html(str);                   //將替換的值賦值給當前物件
//     }
// });

// 製作選單filter
$("#All").click(function(){
    $(".S-media").fadeIn(150);
    $(".news").fadeIn(150);
});
$("#social-media").click(function(){
    // $(".S-media").fadein(300);
    $(".news").fadeOut(150);
    $(".S-media").fadeIn(150);
});
$("#news").click(function(){
    $(".S-media").fadeOut(150);
    $(".news").fadeIn(150);
});

