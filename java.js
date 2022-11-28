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
// 偵測首頁資訊換商品
var value ;
$( ".item1" ).click(function() {
    var link = document.querySelector(".item1");
    var value1 = "img-1";
    var value2 = "img-dot-1";
    var value3 = "fnt01";
    link.onclick = function jumpPage() {
        window.open(`product.html?${value1}&${value2}&${value3}`);
    }
    });
$( ".item2" ).click(function() {
    var link = document.querySelector(".item2");
    var value1 = "img-2";
    var value2 = "img-dot-2";
    var value3 = "fnt02";
    link.onclick = function ChangePage() {
        window.open(`product.html?${value1}&${value2}&${value3}`);

}});
$( ".item3" ).click(function() {
    var link = document.querySelector(".item3");
    var value1 = "img-3";
    var value2 = "img-dot-3";
    var value3 = "fnt03";
    link.onclick = function ChangePage() {
        window.open(`product.html?${value1}&${value2}&${value3}`);

}});
$( ".item4" ).click(function() {
    var link = document.querySelector(".item4");
    var value1 = "img-4";
    var value2 = "img-dot-4";
    var value3 = "fnt04";
    link.onclick = function ChangePage() {
        window.open(`product.html?${value1}&${value2}&${value3}`);

}});

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
            $('.main-pd-title').html("膠原光采修復精華液");
            $('.main-pd-subtitle').html("嫩白潔淨保養 重生肌膚生命");
            $('.maib-pd-content').html("全方位修護 讓肌膚再現光采使用Liposome微脂囊技術，雙層包覆多種精華滲透肌底。天然賽洛美淡化斑點，燕窩緊緻拉提。高效修復，無刺激性。");
            $('.main-pd-price').html("NT$2,689");
            $('.main-pd-content').html("容量：35ml <br>產地 : 台灣 <br>保存期限：36個月<br>*醫美雷射術後保養效果佳。");
        }
        if($('#img-2').is(":checked")){
            $('.main-pd-title').html("膠原柔白面膜");
            $('.main-pd-subtitle').html("10分鐘浸潤 零死角水感舒活");
            $('.maib-pd-content').html(" 凍狀面膜 輕鬆打造肌膚水床十分鐘美白、補水、嫩膚 三效合一完美肌膚狀態 妝感更服貼");
            $('.main-pd-price').html("NT$1,290");
            $('.main-pd-content').html("容量：30ml <br>產地 : 台灣 <br>保存期限：36個月");
        }
        if($('#img-3').is(":checked")){
            $('.main-pd-title').html("緊緻修護滋養油");
            $('.main-pd-subtitle').html("細緻潤膚 啟動深層修護");
            $('.maib-pd-content').html("純植物油調和，高親膚性。一滴改善缺水危肌，鞏固皮脂健康。持久緊緻肌膚、淡化細紋。");
            $('.main-pd-price').html("NT$1,590");
            $('.main-pd-content').html("容量：50ml <br>產地 : 台灣 <br>保存期限：36個月");
        }
        if($('#img-4').is(":checked")){
            $('.main-pd-title').html("海洋膠原植萃輕盈控油噴霧");
            $('.main-pd-subtitle').html("零油光零NG 重生肌膚自信");
            $('.maib-pd-content').html(" 一噴清爽 活化肌膚減少皮脂分泌 代謝老廢角質平衡肌膚油水比 妝前妝後不脫妝。");
            $('.main-pd-price').html("NT$1,489");
            $('.main-pd-content').html("容量：80ml <br>產地 : 台灣 <br>保存期限：36個月");
        }
    })