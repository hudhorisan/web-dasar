const links = document.querySelectorAll("a");

function smoothScrool(e) {
    e.preventDefault();
    const href = this.getAttribute("href");
    const offsetTop = document.querySelector(href).offsetTop;

    scroll({
        top: offsetTop,
        behavior: "smooth"
    });
}

for (const link of links) {
    link.addEventListener("click", smoothScrool);
}

const side = document.getElementsByTagName('aside')[0];

function stikySide() {

    const offsetTop = side.offsetTop;
    if (offsetTop < 30) {
        side.classList.toggle('tempel')
    }
}

side.addEventListener("scroll", stikySide);