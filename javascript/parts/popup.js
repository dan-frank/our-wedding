$('.popup-trigger').on('click', function() {
    var target = $(this).data('target');

    $('#' + target).addClass('active');
    $('body').addClass('popup-active');
});

$('.popup').on('click', function() {
    $(this).removeClass('active');
    $('body').removeClass('popup-active');

    var weddingVideo = document.getElementById("weddingVideo");
    weddingVideo.pause();
});

$('.popup-content').on('click', function(e) {
    e.stopPropagation();
});