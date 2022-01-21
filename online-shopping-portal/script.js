/* Your code goes here */
    $(document).ready(function() {

    $(".slidingDiv").hide();
    $(".show_hide").show();

    $('.show_hide').click(function() {
        $("slidingDiv").slideToggle();
    });

});