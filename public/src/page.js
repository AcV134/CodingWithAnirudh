// document.addEventListener("DOMContentLoaded", function() {
//     const sections = document.querySelectorAll('.page');

//     const observerOptions = {
//         root: null,
//         rootMargin: '0px',
//         threshold: 0.1
//     };

//     const observerCallback = (entries, observer) => {
//         entries.forEach(entry => {
//             if (entry.isIntersecting) {
//                 entry.target.classList.add('fade-in');
//                 observer.unobserve(entry.target); // Optional: Unobserve after the first fade-in
//             }
//         });
//     };

//     const observer = new IntersectionObserver(observerCallback, observerOptions);

//     sections.forEach(section => {
//         observer.observe(section);
//     });
// });