const hamMenus = document.querySelectorAll('.ham-menu')
const navbar = document.querySelector('.header-section-nav')
const closeButtonWrapper = document.querySelector('.close-button-wrapper')
const overlay = document.querySelector('#overlay')

const media = window.matchMedia("(width < 800px)")

media.addEventListener('change', (e) => updateNavbar(e))

function updateNavbar(e) {
    const isMobile = e.matches;
    console.log(isMobile)
    if (isMobile) {
        navbar.setAttribute("inert", '')
    } else {
        navbar.removeAttribute("inert")
    }
}

function openSidebar() {
    hamMenus.forEach(menu => {
        menu.classList.add('active')
    })
    closeButtonWrapper.classList.add('active')
    navbar.classList.add('active')
    navbar.removeAttribute('inert')
}

function closeSidebar() {
    hamMenus.forEach(menu => {
        menu.classList.remove('active')
    })
    closeButtonWrapper.classList.remove('active')
    navbar.classList.remove('active')
    navbar.setAttribute('inert', '')
}

const navLinks = document.querySelectorAll('nav a')
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        closeSidebar();
    })
})

updateNavbar(media)