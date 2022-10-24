// ham切換
$(".ham").click(function(){
    $(".header-globalnavi").fadeToggle(300);
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