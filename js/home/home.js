document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector(".header");
    const siteTitle = document.querySelector(".site-title");
    const navLinks = document.querySelectorAll(".header nav ul li a");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {  // 50px以上スクロールしたら縮小
            header.classList.add("shrink");
        } else {
            header.classList.remove("shrink");
        }
    });
});
