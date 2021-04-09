$(function () {
    $("a[orderStatus]").click(function () {
        let orderStatus = $(this).attr("orderStatus");
        if (orderStatus === "all") {
            $("table[orderStatus]").show();
        } else {
            $("table[orderStatus]").hide();
            $("table[orderStatus=" + orderStatus + "]").show();
        }
        $("div.orderType div").removeClass("selectedOrderType");
        $(this).parent("div").addClass("selectedOrderType");
    });
});