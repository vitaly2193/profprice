$(document).ready(function(){
    $(".selectric").selectric();
    $("[data-fancybox]").fancybox();
    $(".btn-user-message").on('click', function (e) {
        e.preventDefault();
        $.fancybox.open({
            src: '#user_new_message',
            type: 'inline'
        });
    });
    $('.performer').on('click', '.read-message', function (e) {
        e.preventDefault();
        $.fancybox.open({
            src: '#user_message',
            type: 'inline'
        });
    });
    $('.performer').on('click', '.support', function (e) {
        e.preventDefault();
        $.fancybox.open({
            src: '#support',
            type: 'inline'
        });
    });
    $('.performer').on('click', '.tsk-review', function (e) {
        e.preventDefault();
        $.fancybox.open({
            src: '#task-review',
            type: 'inline'
        });
    });
    $('#nav-icon').click(function(){
        $(this).toggleClass('open fixed');
        $('.footer-nav').toggleClass('footer-nav__open');
    });
    /*STARS*/
    $('#stars li').on('mouseover', function(){
        var onStar = parseInt($(this).data('value'), 10); // The star currently mouse on

        // Now highlight all the stars that's not after the current hovered star
        $(this).parent().children('li.star').each(function(e){
            if (e < onStar) {
                $(this).addClass('hover');
            }
            else {
                $(this).removeClass('hover');
            }
        });
    }).on('mouseout', function(){
        $(this).parent().children('li.star').each(function(e){
            $(this).removeClass('hover');
        });
    });
    $('#stars li').on('click', function(){
        var onStar = parseInt($(this).data('value'), 10); // The star currently selected
        var stars = $(this).parent().children('li.star');

        for (i = 0; i < stars.length; i++) {
            $(stars[i]).removeClass('selected');
        }

        for (i = 0; i < onStar; i++) {
            $(stars[i]).addClass('selected');
        }
    });
});