console.log("blog works")

$(document).ready(()=>{
    $(".cards").hover((e)=>{
        $(e.target).closest("article").addClass("cards-hover");
        $(e.target).closest("article").nextAll().addClass("cards-after");
    },
    ((e)=>{
        $(e.target).closest("article").removeClass("cards-hover");
        $(e.target).closest("article").nextAll().removeClass("cards-after"); 
    })
)})