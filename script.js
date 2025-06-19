
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".faq-question").forEach((question) => {
        question.addEventListener("click", () => {
            const answer = question.nextElementSibling;
            answer.style.display = answer.style.display === "block" ? "none" : "block";
        });
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("fade-in");
            }
        });
    });

    document.querySelectorAll(".animate-on-scroll").forEach((el) => observer.observe(el));
});
