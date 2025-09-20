// Mobile Navigation Toggle
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
	hamburger.classList.toggle("active");
	navMenu.classList.toggle("active");
});

// Close mobile menu when clicking on a link
document.querySelectorAll(".nav-link").forEach((n) =>
	n.addEventListener("click", () => {
		hamburger.classList.remove("active");
		navMenu.classList.remove("active");
	})
);

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
	anchor.addEventListener("click", function (e) {
		e.preventDefault();
		const target = document.querySelector(this.getAttribute("href"));
		if (target) {
		target.scrollIntoView({
			behavior: "smooth",
			block: "start",
		});
		}
	});
});

// Add scroll effect to header
window.addEventListener("scroll", () => {
	const header = document.querySelector(".header");
	if (window.scrollY > 100) {
		header.style.background = "rgba(255, 255, 255, 0.98)";
	} else {
		header.style.background = "rgba(255, 255, 255, 0.95)";
	}
});

// Add animation on scroll
const observerOptions = {
	threshold: 0.1,
	rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
		entry.target.style.opacity = "1";
		entry.target.style.transform = "translateY(0)";
		}
	});
}, observerOptions);

// Animate elements on scroll
document.querySelectorAll(".skill-card, .project-card, .contact-card")
	.forEach((el) => {
		el.style.opacity = "0";
		el.style.transform = "translateY(30px)";
		el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
		observer.observe(el);
	});

// Add click handlers for contact cards
document.querySelectorAll(".contact-card").forEach((card) => {
	card.addEventListener("click", () => {
		const title = card.querySelector("h3").textContent.toLowerCase();
		const value = card.querySelector("p").textContent;

		if (title === "email") {
		window.open(`mailto:${value}`, "_blank");
		} else if (title === "github") {
		window.open(`https://${value}`, "_blank");
		} else if (title === "linkedin") {
		window.open(`https://${value}`, "_blank");
		}
	});
});

// Add typing effect to hero title
function typeWriter(element, text, speed = 100) {
	let i = 0;
	element.innerHTML = "";

	function type() {
		if (i < text.length) {
		element.innerHTML += text.charAt(i);
		i++;
		setTimeout(type, speed);
		}
	}

	type();
}

// Initialize typing effect when page loads
window.addEventListener("load", () => {
	const heroTitle = document.querySelector(".hero-title");
	const originalText = heroTitle.textContent;
	setTimeout(() => {
		typeWriter(heroTitle, originalText, 150);
	}, 1000);
});
