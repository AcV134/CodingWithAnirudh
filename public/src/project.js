console.log("loaded project.js");

let project_container = document.getElementsByClassName('project-container');

for (let i = 0; i < 18; i++) {
    let cards = document.createElement('div');
    cards.className = `project`;
    cards.id = `p_${i}`;
    project_container[0].appendChild(cards);
}

let total = $('.project');
let total_length = total.length;
let current = -1;

$(document).ready(() => {
    // on clicking project card
    $('.project').click((e)=>{
        $(e.target).siblings().removeClass('project-click');
        $(e.target).toggleClass('project-click');
        current = $(e.target).index();
        setTimeout(() => {
            (e.target).scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
          }, 150);
    })

    // on hovering over navigation click
    $('.click').hover((e)=>{
        $(e.target).closest('.click').toggleClass('click-hover');
    })

    // on clicking next and prev navigation click
    $('.next').click((e)=>{
        console.log(current);
        current += 1;
        if (current > total_length - 1) {
            current = 0;
        }
        let card = total.eq(current);
        card.siblings().removeClass('project-click');
        card.toggleClass('project-click');

        setTimeout(() => {
            card[0].scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
          }, 150);
    })

    $('.prev').click((e)=>{
        console.log(current);
        current -= 1;
        if (current < 0) {
            current = total_length - 1;
        }
        let card = total.eq(current);
        card.siblings().removeClass('project-click');
        card.toggleClass('project-click');

        setTimeout(() => {
            card[0].scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
          }, 150);
    })
})