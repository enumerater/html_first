const headerWapper2 = document.querySelector('.r2');
const back = document.querySelector('.back');
console.log(back);
window.addEventListener('scroll', () => {
    console.log(back.getBoundingClientRect().top);
    if (back.getBoundingClientRect().top <= 0) {
        headerWapper2.style.display = 'flex';
    } else {
        headerWapper2.style.display = 'none';
    }
});
