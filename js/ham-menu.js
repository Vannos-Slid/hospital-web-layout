const hamMenu = document.querySelector('.ham-menu')
const offScreenMenu = document.querySelector('.off-screen-menu')
const overlay = document.querySelector('#overlay')

const media = window.matchMedia("(width < 800px)")

media.addEventListener('change', (e) => updateNavbar(e))

hamMenu.addEventListener('click', () => toggleNavbar())

function updateNavbar(e) {
    const isMobile = e.matches;
    console.log(isMobile)
    // if (isMobile) {
    //     offScreenMenu.setAttribute("inert", '')
    // } else {
    //     offScreenMenu.removeAttribute("inert")
    // }
}

function toggleNavbar() {
    hamMenu.classList.toggle('active')
    offScreenMenu.classList.toggle('active')
    overlay.classList.toggle('active')
}

updateNavbar(media)