window.addEventListener('DOMContentLoaded', function () {

    const closeBtn = document.querySelector('.close'),
        openBtn = document.querySelector('.open'),
        content = document.querySelector('.content'),
        hero = document.querySelector('.hero'),
        links = document.getElementsByClassName('nav-link');
    console.log(links);

    for (let i = 0; i < links.length; i++) {
        links[i].addEventListener('click', function() {
            openBtn.classList.toggle('d-none');
            closeBtn.classList.toggle('d-none');
            content.style.display = ('none');
            hero.style.opacity = 1;
        }, false);
    }

    openBtn.addEventListener('click', () => {
        openBtn.classList.toggle('d-none')
        closeBtn.classList.toggle('d-none')
        content.style.display = ('flex')
        hero.style.opacity = 0.3
    })
    closeBtn.addEventListener('click', () => {
        openBtn.classList.toggle('d-none')
        closeBtn.classList.toggle('d-none')
        content.style.display = ('none')
        hero.style.opacity = 1
    })

});