let elLightThemeButton = document.querySelector('.js-light-theme-button');
let elDarkThemeButton = document.querySelector('.js-dark-theme-button');
elLightThemeButton.addEventListener('click', function(){
    document.body.classList.remove('dark-mode');
})
elDarkThemeButton.addEventListener('click',
function(){
    document.body.classList.add('dark-mode');
});

let elMask = document.querySelector(".mask");

window.addEventListener("load", () => {
    elMask.classList.add("hide");
    setTimeout(() => {
        elMask.remove();
    }, 600);
});