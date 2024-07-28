console.log("loaded project.js");

let project_container = document.getElementsByClassName('project-container');

for (let i = 0; i < 8; i++) {
    let cards = document.createElement('div');
    cards.className = `project`;
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
        if($('.project').hasClass('project-click')===false){
            $($('.project')[0]).toggleClass('project-click');
        }
        else{
            if($($('.project.project-click')[0]).next().length ===1){
                let current = $($('.project.project-click')[0]).next()[0];
                $(current).siblings().removeClass('project-click');
                $(current).toggleClass('project-click');
            }
            else{
                $('.project').siblings().removeClass('project-click');
                $($('.project')[0]).toggleClass('project-click');
            }
        }
    })

    $('.prev').click((e)=>{
        if($('.project').hasClass('project-click')===false){
            $($('.project')[$('.project').length-1]).toggleClass('project-click');
        }
        else{
            if($($('.project.project-click')[0]).prev().length ===1){
                let current = $($('.project.project-click')[0]).prev()[0];
                $(current).siblings().removeClass('project-click');
                $(current).toggleClass('project-click');
            }
            else{
                $('.project').siblings().removeClass('project-click');
                $($('.project')[$('.project').length-1]).toggleClass('project-click');
            }
        }
    }) 
})