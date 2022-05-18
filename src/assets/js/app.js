function closeFlyBox() {
    $("body").removeClass("stop");
    $(".overlay").fadeOut();
}

$(function () {

    $(".openFlyBoxBtn").on("click", function (e) {
        e.preventDefault();
        var $this = $(this);
        var id = $this.data("id");
        var content = $('.overlay[data-overlay="' + id + '"]');
        content.fadeIn(200);
        $("body").addClass("stop");
    });
    $(".flyBox").on("click", function (e) {
        e.stopPropagation();
    });

    // Закрытие акции по кнопке Close
    $(".flyBox__close").on("click", function (e) {
        e.preventDefault();
        $(".overlay").fadeOut(200);
        $("body").removeClass("stop");
    });

    // Закрытие акции по оверлею
    $(".overlay").on("click", function (e) {
        e.stopPropagation();
        e.preventDefault();
        $("body").removeClass("stop");
        $(".overlay").fadeOut();
    });



});
