$(function () {
    $("img.smallImage").mouseenter(function () {
        let bigImageURL = $(this).attr("bigImageURL");
        $("img.bigImg").attr("src", bigImageURL);
    });
    $("img.bigImg").load(
        function () {
            $("img.smallImage").each(function () {
                let bigImageURL = $(this).attr("bigImageURL");
                img = new Image();
                img.src = bigImageURL;
                img.onload = function () {
                    console.log(bigImageURL);
                    $("img.img4load").append($(img));
                }
            });
        }
    );
})

$(function () {
    let stock = 66;
    $(".productNumberSetting").keyup(function () {
        let num = $(".productNumberSetting").val();
        num = parseInt(num);
        if (isNaN(num) && num != null) {
            num = 1;
        }
        if (num <= 0) {
            num = 1;
        }
        if (num >= stock) {
            num = stock;
        }
        $(".productNumberSetting").val(num);
    });
    $(".increaseNumber").click(function () {
        let num = $(".productNumberSetting").val();
        num = parseInt(num);
        num++;
        if (num > stock) {
            num = stock;
        }
        $(".productNumberSetting").val(num);
    });
    $(".decreaseNumber").click(function () {
        let num = $(".productNumberSetting").val();
        num = parseInt(num);
        num--;
        if (num <= 0) {
            num = 1;
        }
        $(".productNumberSetting").val(num);
    });
})

$(function () {
    $("div.productReviewDiv").hide();
    $("a.productDetailTopReviewLink").click(function () {
        $("div.productDetailDiv").hide();
        $("div.productReviewDiv").show();
    });
    $("a.productReviewTopPartSelectedLink").click(function () {
        $("div.productReviewDiv").hide();
        $("div.productDetailDiv").show();
    });
})