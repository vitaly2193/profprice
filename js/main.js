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
    })
});