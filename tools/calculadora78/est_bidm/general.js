$(document).ready(function() {

    // When div is clicked, hidden content divs will slide out  
    $('div.accordionButton').click(function() {
        $('div.accordionContent').slideUp('normal');    
        $(this).next().slideDown('normal');
    });


    // Close all divs on load page  
    $("div.accordionContent").hide();

});