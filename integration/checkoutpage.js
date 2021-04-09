$(function () {
    $(".leaveMessageImg").click(function () {
        $(this).hide();
        $(".orderItemSumDiv").css("height", "100px");
        $("span.leaveMessageTextareaSpan").show();
    });
});
