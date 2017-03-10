/**
 * Created by Swante on 07.01.2017.
 */
$(document).ready(function () {
    $("#first-indicator-list li, #second-indicator-list li").click(function(e) {
        e.preventDefault();
        $("#first-indicator-list li").removeClass('active');
        $(this).addClass('active');
    });
    $("#second-indicator-list li").click(function(e) {
        e.preventDefault();
        $("#second-indicator-list li").removeClass('active');
        $(this).addClass('active');
    });

    $('.question').on('click', function () {
        var $this = $(this),
            item = $this.closest('.faq-item'),
            list = $this.closest('.faq-list'),
            items = list.find('.faq-item'),
            content = item.find('.answer'),
            otherContent = list.find('.answer'),
            duration = 300;

        if (!item.hasClass('active')){
            items.removeClass('active');
            item.addClass('active');


            otherContent.stop(true, true).slideUp(duration);
            content.stop(true, true).slideDown(duration);
        } else {
            content.stop(true, true).slideUp(duration);
            item.stop(true, true).removeClass('active');

        }
    });
});