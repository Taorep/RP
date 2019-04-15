$("#arrow").on("click",function(){
    reset()
    $(this).toggleClass("arrowTwo")
    $("#nav-ul").fadeToggle(600);
    $('body').css('background-color','#ccc')


})

function reset() {
    $('#about-button').css('color','#000')
    $('#work-button').css('color','#000')
    $('#arrow').css('color','#000')
    $(".about-info").hide()
    $(".work-info").hide()
    $(".contact-info").hide()
}

$("#about-button").on("click", function(){
    reset()
    $(".about-info").fadeToggle()
    $('body').css('background-color','#ccc')
})

$("#work-button").on("click", function(){
    reset()
    $(".work-info").fadeToggle()
    $('body').css('background-color','#ccc')
})

$(".contact").on("click", function(){
    reset()
    $(".contact-info").fadeToggle()
    $('body').css('background-color','#6d6c6c')
    $('#about-button').css('color','#ccc')
    $('#work-button').css('color','#ccc')
    $('#arrow').css('color','#ccc')

})


