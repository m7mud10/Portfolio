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

(function () {
    emailjs.init("EtYl9v-tkki8RPDpH");
})();

document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const button = this.querySelector(".submitBtn");
    const originalText = button.innerText;

    button.disabled = true;
    button.innerText = "Sending...";

    emailjs
        .sendForm(
            "service_mqxkvbl", 
            "template_qvqehq8",
            this
        )
        .then(() => {
            alert("Message sent successfully ✅");
            this.reset();
        })
        .catch((error) => {
            alert("Failed to send message ❌");
            console.error(error);
        })
        .finally(() => {
            button.disabled = false;
            button.innerText = originalText;
        });
});