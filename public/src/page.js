console.log("loaded page.js");

const tween = KUTE.fromTo(
    "#blob3",
    { path: "#blob3" },
    { path: "#blob4" },
    { repeat: 999, duration: 4000, yoyo: true, easing: "easingCubicInOut" }
).start();

const mean = KUTE.fromTo(
    "#blob1",
    { path: "#blob1" },
    { path: "#blob2" },
    { repeat: 999, duration: 3000, yoyo: true, easing: "easingCubicInOut" }
).start();