console.log("loaded project.js");


let project_container = document.getElementsByClassName('project-container');

for (let i = 0; i < 8; i++) {
    let cards = document.createElement('div');
    cards.className = 'project';
    project_container[0].appendChild(cards);
}

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