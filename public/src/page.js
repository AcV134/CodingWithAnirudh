console.log("loaded page.js");

const tween = KUTE.fromTo(
    "#blob4",
    { path: "#blob4" },
    { path: "#blob3" },
    { repeat: 999, duration: 4000, yoyo: true, easing: "easingCubicInOut" }
).start();

const mean = KUTE.fromTo(
    "#blob1",
    { path: "#blob1" },
    { path: "#blob2" },
    { repeat: 999, duration: 5000, yoyo: true, easing: "easingCubicInOut" }
).start();