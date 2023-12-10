const header = document.querySelector(".header");

function toggleSticky() {
    header.classList.toggle("is-sticky", window.scrollY > 50);
}

toggleSticky();

window.onscroll = () => {
    toggleSticky();
}