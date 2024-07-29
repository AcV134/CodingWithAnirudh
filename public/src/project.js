console.log("loaded project.js");

let project_container = document.getElementsByClassName('project-container');

for (let i = 0; i < 8; i++) {
    let cards = document.createElement('div');
    cards.className = `project`;
    cards.id = `p${i}`;
    project_container[0].appendChild(cards);
}

$(document).ready(()=>{
    // on clicking project card
    $('.project').click((e)=>{
        $(e.target).siblings().removeClass('project-click');
        $(e.target).closest('.project').toggleClass('project-click');
        $(e.target).closest('.project-container').addClass('project-container-click');
        if($(e.target).hasClass('project-click')===false){
            $(e.target).closest('.project-container').removeClass('project-container-click');
        }
    }
)
    // on hovering over navigation click
    $('.click').hover((e)=>{
        $(e.target).closest('.click').toggleClass('click-hover');
    })


    // on clicking next and prev

    $('.next').click((e)=>{
        if($('.project').siblings().hasClass('project-click')){
            let id = $('.project.project-click')[0].id;
            let id_num = id.slice(-1);
            let current = Number(id_num);
            $('.project').siblings().removeClass('project-click');
            let next = current + 1;
            $('#p' + next).toggleClass('project-click');
            $('.project-container').addClass('project-container-click');
            if($('.project').hasClass('project-click')===false){
                $('.project-container').removeClass('project-container-click');
            }
        }
        else{
            $($('.project')[0]).toggleClass('project-click');
            $('.project-container').addClass('project-container-click');
        }
    })

    $('.prev').click((e)=>{
        if($('.project').siblings().hasClass('project-click')){
            let id = $('.project.project-click')[0].id;
            let id_num = id.slice(-1);
            let current = Number(id_num);
            $('.project').siblings().removeClass('project-click');
            let prev = current - 1;
            $('#p' + prev).toggleClass('project-click');
            $('.project-container').addClass('project-container-click');
            if($('.project').hasClass('project-click')===false){
                $('.project-container').removeClass('project-container-click');
            }
        }
        else{
            $($('.project')[$('.project').length-1]).toggleClass('project-click');
            $('.project-container').addClass('project-container-click');
        }
    })
})