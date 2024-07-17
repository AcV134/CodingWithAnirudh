console.log("footer is active");

$("document").ready(()=>{$(".footer-link").hover((e)=>{
    console.log(e.target);
    $(e.target).closest('a').addClass('footer-hover');
},(e)=>{
    $(e.target).closest('a').removeClass('footer-hover');
})});