$(function () {
    $("div.productsAsideCategories div.row a").each(function () {
        let v = Math.round(Math.random() * 6);
        if (v === 1) {
            $(this).css("color", "#87CEFA");
        }
    });
});

function showProductsAsideCategories(cid) {
    $("div.eachCategory[cid=" + cid + "]").css("background-color", "white");
    $("div.eachCategory[cid=" + cid + "] a").css("color", "#87CEFA");
    $("div.productsAsideCategories[cid=" + cid + "]").show();
}

function hideProductsAsideCategories(cid) {
    $("div.eachCategory[cid=" + cid + "]").css("background-color", "#e2e2e2");
    $("div.eachCategory[cid=" + cid + "] a").css("color", "#000");
    $("div.productsAsideCategories[cid=" + cid + "]").hide();
}

$(function () {
    $("div.eachCategory").mouseenter(function () {
        let cid = $(this).attr("cid");
        showProductsAsideCategories(cid);
    });
    $("div.eachCategory").mouseleave(function () {
        let cid = $(this).attr("cid");
        hideProductsAsideCategories(cid);
    });
    $("div.productsAsideCategories").mouseenter(function () {
        let cid = $(this).attr("cid");
        showProductsAsideCategories(cid);
    });
    $("div.productsAsideCategories").mouseleave(function () {
        let cid = $(this).attr("cid");
        hideProductsAsideCategories(cid);
    });
    $("div.rightMenu span").mouseenter(function () {
        let left = $(this).position().left;
        let top = $(this).position().top;
        let width = $(this).css("width");
        let destLeft = parseInt(left) + parseInt(width) / 2 + 7;
        $("img.catear").css("left", destLeft + 90);
        $("img.catear").css("top", top + 198);
        $("img.catear").fadeIn(500);
    });
    $("div.rightMenu span").mouseleave(function () {
        $("img#catear").hide();
    });
    let left = $("div#carousel-of-product").offset().left;
    $("div.categoryMenu").css("left", left - 20);
    $("div.categoryWithCarousel div.head").css("margin-left", left);
    $("div.productsAsideCategories").css("left", left - 20);
})