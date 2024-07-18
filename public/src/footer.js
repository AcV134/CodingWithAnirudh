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
    $(e.target).closest("a").find('.fg-primary').css('fill', '#F92C85');
    // $(e.target).closest("a").find('.fg-primary').css('box-shadow', '0 10px 10px rgba(0, 0, 0, 0.2)');
    setTimeout(() => {
        $(e.target).closest("a").removeClass('hop');
        $(e.target).closest("a").find('.fg-primary').css('fill', '#5EBEC4');
        // $(e.target).closest("a").find('.fg-primary').css('box-shadow', '0');   
    }, 600);
});