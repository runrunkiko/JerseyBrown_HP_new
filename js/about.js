//ページトップボタン
$(function(){
  $("#page_top").on("click", function(){
    $("html, body").animate({scrollTop: 0 }, 600, "swing");
  });
});
// ページ内遷移
$(function(){
    $('#areaNav a[href*="#"]').click(function(){
        var elmHash = $(this).attr('href');
        var pos = $(elmHash).offset().top;
        $('body,html').animate({scrollTop: pos}, 500);
        return false;
        console.log('きたよ');
    });
});
    /**
     * ハンバーガーメニュー
     */
    $('#menuButton').on('click',function(){
        console.log('クリックしたよ');
        $('#menuButton').toggleClass('active');
        $('#nav').toggleClass('active');
    });