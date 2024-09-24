const NAV_BURGER = document.getElementsByClassName('ham')[0];
const CLOSE_NAV = document.getElementsByClassName('close')[0];
const NAV_LIST = document.getElementsByClassName('nav-list-holder')[0];
const EXPLORE_BTN = document.getElementsByClassName('btn')[0];
const BG_IMG = document.querySelector('body');
const SPACE_IMG = document.getElementsByClassName('space-img-holder')[0];
const MEDIA_QUERY_TAB = window.matchMedia('(min-width:600px)');
const MEDIA_QUERY_DES = window.matchMedia('(min-width: 900px)')


function applyBackgroundImage() {
    if (MEDIA_QUERY_DES.matches) {
        console.log('desk match')
        BG_IMG.style.backgroundImage = "url('assets/home/background-home-desktop.jpg')";
        NAV_LIST.classList.remove('open');
    } else if (MEDIA_QUERY_TAB.matches) {
        BG_IMG.style.backgroundImage = "url('assets/home/background-home-tablet.jpg')";
        NAV_LIST.classList.remove('open');
    } else {
        BG_IMG.style.backgroundImage = "url('assets/home/background-home-mobile.jpg')";
    }
}
function applyBackgroundImageDestination() {
    if (MEDIA_QUERY_DES.matches) {
        BG_IMG.style.backgroundImage = "url('assets/destination/background-destination-desktop.jpg')";
        NAV_LIST.classList.remove('open');
    } else if (MEDIA_QUERY_TAB.matches) {
        BG_IMG.style.backgroundImage = "url('assets/destination/background-destination-tablet.jpg')";
        NAV_LIST.classList.remove('open');
    } else {
        BG_IMG.style.backgroundImage = "url('assets/destination/background-destination-mobile.jpg')";
    }
}

function applyBackgroundImageCrew () {
    if (MEDIA_QUERY_DES.matches) {
        BG_IMG.style.backgroundImage = "url('assets/crew/background-crew-desktop.jpg')";
        NAV_LIST.classList.remove('open');
    } else if (MEDIA_QUERY_TAB.matches) {
        BG_IMG.style.backgroundImage = "url('assets/crew/background-crew-tablet.jpg')";
        NAV_LIST.classList.remove('open');
    } else {
        BG_IMG.style.backgroundImage = "url('assets/crew/background-crew-mobile.jpg')";
    }
}

function applyBackgroundImageTech () {
    if (MEDIA_QUERY_DES.matches) {
        BG_IMG.style.backgroundImage = "url('assets/technology/background-technology-desktop.jpg')";
        NAV_LIST.classList.remove('open');
    } else if (MEDIA_QUERY_TAB.matches) {
        BG_IMG.style.backgroundImage = "url('assets/technology/background-technology-tablet.jpg')";
        NAV_LIST.classList.remove('open');
    } else {
        BG_IMG.style.backgroundImage = "url('assets/technology/background-technology-mobile.jpg')";
    }
}

function changeSpaceImage () {
    const getPath = window.location.pathname;

    if (MEDIA_QUERY_DES.matches && getPath.includes('spaceport')) {
        SPACE_IMG.style.backgroundImage = "url('assets/technology/image-spaceport-portrait.jpg')";
    } else if (MEDIA_QUERY_DES.matches && getPath.includes('capsule')) {
        SPACE_IMG.style.backgroundImage = "url('assets/technology/image-space-capsule-portrait.jpg')";
    } else if (MEDIA_QUERY_TAB.matches && getPath.includes('spaceport')) {
        SPACE_IMG.style.backgroundImage = "url('assets/technology/image-spaceport-landscape.jpg')";
    } else if (MEDIA_QUERY_TAB.matches && getPath.includes('capsule')) {
        SPACE_IMG.style.backgroundImage = "url('assets/technology/image-space-capsule-landscape.jpg')";
    } else if (getPath.includes('spaceport') && !MEDIA_QUERY_DES.matches && !MEDIA_QUERY_TAB.matches) {
        SPACE_IMG.style.backgroundImage = "url('assets/technology/image-spaceport-portrait.jpg')";
        console.log('hereagian')
    } else if (getPath.includes('capsule') && !MEDIA_QUERY_DES.matches && !MEDIA_QUERY_TAB.matches) {
        SPACE_IMG.style.backgroundImage = "url('assets/technology/image-space-capsule-portrait.jpg')";
    }
}

function addActiveMain () {
    const navItems = document.querySelectorAll('.nav-item a');
    
    const destinationNavItems = document.querySelectorAll('.destination-nav-item a');
    
    const crewNavItems = document.querySelectorAll('.crew-member a');

    const techNavItems = document.querySelectorAll('.space-nav-item a');

    navItems.forEach(item => {
        const HREF = item.getAttribute('href');
        const currentPath = window.location.pathname;
        console.log(HREF)
        console.log(currentPath)
        if (currentPath.includes(HREF)) {
            item.parentElement.classList.add('active')
        } else {
            item.parentElement.classList.remove('active');

        }
    })

    destinationNavItems.forEach(item => {
        const activePath = window.location.pathname;
        const hrefPath = item.getAttribute('href');
        if (activePath.includes(hrefPath)) {
            item.parentElement.classList.add('active');
        } else {
            item.parentElement.classList.remove('active');
        }
    })

    crewNavItems.forEach(item => {
        const crewPath = window.location.pathname;
        const hrefPathCrew = item.getAttribute('href');
        if (crewPath.includes(hrefPathCrew)) {
            console.log('here')
            item.classList.add('active')
        } else {
            item.classList.remove('active')
        }
    })

    techNavItems.forEach(item => {
        const techPath = window.location.pathname;
        const hrefPathTech= item.getAttribute('href');
        if (techPath.includes(hrefPathTech)) {
            console.log('here')
            item.parentElement.classList.add('active')
        } else {
            item.parentElement.classList.remove('active')
        }
    })

}


if (window.location.pathname.includes('index')) {
    applyBackgroundImage(); // Initial background setup
    MEDIA_QUERY_TAB.addEventListener('change', applyBackgroundImage);
    MEDIA_QUERY_DES.addEventListener('change', applyBackgroundImage);

} else if (window.location.pathname.includes('destination')) {
    applyBackgroundImageDestination(); // Initial background setup
    MEDIA_QUERY_TAB.addEventListener('change', applyBackgroundImageDestination);
    MEDIA_QUERY_DES.addEventListener('change', applyBackgroundImageDestination);
} else if (window.location.pathname.includes('crew')) {
    applyBackgroundImageCrew(); //initial background setup
    MEDIA_QUERY_TAB.addEventListener('change', applyBackgroundImageCrew);
    MEDIA_QUERY_DES.addEventListener('change', applyBackgroundImageCrew);
} else if (window.location.pathname.includes('technology')) {
    applyBackgroundImageTech();
    MEDIA_QUERY_TAB.addEventListener('change', applyBackgroundImageTech);
    MEDIA_QUERY_DES.addEventListener('change', applyBackgroundImageTech);
}



NAV_BURGER.addEventListener('click', function displayNav() {
    NAV_LIST.classList.add('open');
});


function closeNav() {
    NAV_LIST.classList.remove('open');
}

CLOSE_NAV.addEventListener('click', closeNav);

document.addEventListener('DOMContentLoaded', closeNav)
document.addEventListener('DOMContentLoaded', addActiveMain)
document.addEventListener('DOMContentLoaded', changeSpaceImage)
MEDIA_QUERY_DES.addEventListener("change", changeSpaceImage)
MEDIA_QUERY_TAB.addEventListener("change", changeSpaceImage)

if (window.location.href.includes('index')) {
    EXPLORE_BTN.addEventListener('click', function () {
        window.location.href = 'destination-moon.html'
    })
    
}
