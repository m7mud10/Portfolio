let techTags = document.querySelector(".tech-tags");
document.querySelector(".right-arrow").addEventListener("click", () => {
    techTags.scrollBy({ left: 200, behavior: "smooth" }); 
});
document.querySelector(".left-arrow").addEventListener("click", () => {
    techTags.scrollBy({ left: -200, behavior: "smooth" }); 
});

let glass = document.querySelectorAll(".glass-highlight");

glass.forEach((glasseff) => {
    glasseff.addEventListener("mousemove", (e) => {
        let x = e.pageX - glasseff.offsetLeft;
        let y = e.pageY - glasseff.offsetTop;

        glasseff.style.setProperty('--x', x + 'px');
        glasseff.style.setProperty('--y', y + 'px');
    })
})
////////////////////////////////////////
let menu = document.querySelector(".menu-opt");
let icon = document.querySelector(".fa-bars");

icon.addEventListener("click", () => {
    menu.classList.toggle("active");
    icon.classList.toggle("fa-xmark")
});
////////////////////////////
