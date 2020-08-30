$(document).ready(function() {
    $('.header__burger').click(function(event) {
        $('.header__burger,.header_list,.header_logo').toggleClass('active');
        $('body').toggleClass('lock');
    });
});