console.log("loaded project.js");

$(document).ready(()=>{
    $('.project').click((e)=>{
        $(e.target).siblings().removeClass('project-click');
        $(e.target).closest('.project').toggleClass('project-click');
        $(e.target).closest('.project-container').addClass('project-container-click');
        if($(e.target).hasClass('project-click')===false){
            $(e.target).closest('.project-container').removeClass('project-container-click');
        }
    }
)
})