$("document").ready(()=>{
    $(".footer-link").hover((e)=>{
    $(e.target).closest('a').addClass('footer-hover');
},(e)=>{
    $(e.target).closest('a').removeClass('footer-hover');
});
});



$(".icon-link").hover((e) => {
    console.log(e.target);
    $(e.target).closest("a").addClass('hop');
    $(e.target).closest("a").find('.fg-primary').css('color', '#F92C85');
    setTimeout(() => {
        $(e.target).closest("a").removeClass('hop');
        $(e.target).closest("a").find('.fg-primary').css('color', '#5EBEC4');
    }, 600);
});