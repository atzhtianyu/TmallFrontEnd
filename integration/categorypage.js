$(function () {
    $("input.sortBarPrice").keyup(function () {
        let num = $(this).val();
        if (num.length === 0) {
            $("div.productUnit").show();
            return;
        }

        num = parseInt(num);
        if (isNaN(num))
            num = 1;
        if (num <= 0)
            num = 1;
        $(this).val(num);

        let begin = $("input.beginPrice").val();
        let end = $("input.endPrice").val();
        if (!isNaN(begin) && !isNaN(end)) {
            $("div.productUnit").hide();
            $("div.productUnit").each(function () {
                let price = $(this).attr("price");
                price = Number(price);
                if (price <= end && price >= begin) {
                    $(this).show();
                }
            });
        }
        if (isNaN(begin) && !isNaN(end)) {
            $("div.productUnit").hide();
            $("div.productUnit").each(function () {
                let price = $(this).attr("price");
                price = Number(price);
                if (price <= end) {
                    $(this).show();
                }
            });
        }
        if (!isNaN(begin) && isNaN(end)) {
            $("div.productUnit").hide();
            $("div.productUnit").each(function () {
                let price = $(this).attr("price");
                price = Number(price);
                if (price >= begin) {
                    $(this).show();
                }
            });
        }
    });
});