var isMenuOpen = false; // se o menu está aberto ou não

var header = null

if(window.innerWidth < 950) {
    header = getElement('.mobile')
}else{
    header = getElement('.desktop')

}


//AnimaçãoZinha massa no header

window.addEventListener('scroll', () => {

    if (window.scrollY == 0) {
        header.classList.remove('header-scroll');
        
    } else {
        header.classList.add('header-scroll')
        
    }

    

})


//show and hide menu

const menuButton = getElement("#menuButton")
const menu = getElement('#menu');
console.log('eae')

menuButton.addEventListener('click', () => {
    menu.classList.toggle('show-nav');
    // menu.style.display = 'grid'

    header.classList.toggle('headerScroll-openedMenu')


    // if(window.scrollY > 0) {
    //     header.classList.toggle('headerScroll-openedMenu')
    // }else {
    //     header.classList.toggle('headerNoScroll-openedMenu')

    // }

    if (!isMenuOpen) {
        menuButton.src = "./assets/x.svg";
        isMenuOpen = true

    } else (
        menuButton.src = "./assets/menu.svg",
        isMenuOpen = false

    )

})

//fechando menu





// Iniciar Download


function startDownload(){
    location.href = `https://doc-0c-c4-docs.googleusercontent.com/docs/securesc/5vifin5gkrvcsq8ta9kh57jo9gef0ne9/jjn6s2v66ic7gl750lql3lnac3r3bbfj/1618779600000/05102036936540637151/05102036936540637151/1Z0Qg6lBX1pHne5Xi17nrTUxyVF5RhThW?e=download&authuser=1&nonce=9pk11faljgh8o&user=05102036936540637151&hash=pccdcahqker102etv3qjo282rtheut7t`
}






function getElement(classOrId) {
    const element = document.querySelector(classOrId)
    return element
}

