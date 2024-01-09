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
$(".header-choice").click(function(){
    $(".header-globalnavi").fadeOut(300);
    document.querySelector('.ham1').classList.remove('active');
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
    $(".CANS-cob").fadeIn(150);
    $(".news").fadeIn(150);
});
$("#social-media").click(function(){
    // $(".S-media").fadein(300);
    $(".news").fadeOut(150);
    $(".CANS-cob").fadeOut(150);
    $(".S-media").fadeIn(150);
});
$("#news").click(function(){
    $(".S-media").fadeOut(150);
    $(".CANS-cob").fadeOut(150);
    $(".news").fadeIn(150);
});
$("#CANS-cob").click(function(){
    $(".S-media").fadeOut(150);
    $(".news").fadeIn(150);
    $(".CANS-cob").fadeIn(150);
});

jQuery(document).ready(function ($) {
    var valueFromPageA = window.location.search;
    //console.log('valueFromPageA: ' + valueFromPageA);
    var aftercut = valueFromPageA.substr(1);
    //console.log('aftercut: ' + aftercut);
    var aftersplit = aftercut.split('&');
    //console.log('aftersplit: ' + aftersplit + '类型: ' + typeof (aftersplit));
    var value1 = aftersplit[0];
    var value2 = aftersplit[1];
    var value3 = aftersplit[2];
    //console.log(value1, value2);  
    $("#"+value1).prop("checked", true);
    $('#'+value2).trigger('click');
    $("#"+value3).prop("checked", true);
});

// 轉換產品文字
    $('[name=radio-btn]').change(function () {
        if($('#img-1').is(":checked")){
            $('.main-pd-title').html("能量韌髮機能水");
            $('.main-pd-subtitle').html("強健髮根、維護頭皮健康丶創造毛髮蓬鬆感");
            $('.maib-pd-content').html("金色之光，讓你的內在更有力量、更有勇氣，將這巨大的光能量由頭頂接地，讓你的身體在劇烈變化中保持穩定、滋養與支持，那是一種深層的活力連結，能夠給你穩固與平衡的感受。");
            $('.main-pd-price').html("NT$680");
            $('.main-pd-content').html("容量：50ml <br>保存期限:3年")
        }
        if($('#img-2').is(":checked")){
            $('.main-pd-title').html("合一結構乳");
            $('.main-pd-subtitle').html("粉紅之光，幸福能量無所不在");
            $('.maib-pd-content').html("適用於染髮、捲髮(受損髮~極度受損髮)，可用於保濕、護色、增添髮色光澤、修護毛躁髮質、塑型、滋潤有彈度，");
            $('.main-pd-price').html("NT$1,480");
            $('.main-pd-content').html("容量：120ml <br> 保存期限：36個月");
        }
        if($('#img-3').is(":checked")){
            $('.main-pd-title').html("活力結構乳");
            $('.main-pd-subtitle').html("薄荷綠之光，回復青春，永遠有活力");
            $('.maib-pd-content').html("染髮、直髮、捲髮(一般髮~受損髮)，可用於保濕、護色、增添髮色光澤、修護毛躁髮質");
            $('.main-pd-price').html("NT$1,280");
            $('.main-pd-content').html("容量：120ml <br> 保存期限：36個月");
        }
        if($('#img-4').is(":checked")){
            $('.main-pd-title').html("海洋膠原植萃輕盈控油噴霧");
            $('.main-pd-subtitle').html("零油光零NG 重生肌膚自信");
            $('.maib-pd-content').html(" 一噴清爽 活化肌膚減少皮脂分泌 代謝老廢角質平衡肌膚油水比 妝前妝後不脫妝。");
            $('.main-pd-price').html("NT$1,489");
            $('.main-pd-content').html("容量：80ml <br>產地 : 台灣 <br>保存期限：36個月");
        }
    })