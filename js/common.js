/**
 * Created by Swante on 07.01.2017.
 */
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