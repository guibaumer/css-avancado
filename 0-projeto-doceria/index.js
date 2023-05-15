const seta = document.querySelector('.seta');
const sidebar = document.querySelector('.barra-lateral');
const content = document.querySelector('.content');
const root = document.documentElement;
const topMenuSeta = document.querySelector('.seta2');
const hidden = document.querySelector('.hidden')

seta.addEventListener('click', () => {
    mudarTamanhoSideBar();
    girarSeta();
});
topMenuSeta.addEventListener('click', () => {
    topMenuTamanho()
    girarSeta2();
});

function mudarTamanhoSideBar() {
    if (sidebar.style.width === '30rem') {
        sidebar.style.width = '5rem';
        content.style.display = 'none';
        root.style.setProperty('--tamanho', '50px');
        return
    }
    sidebar.style.width = '30rem';
    root.style.setProperty('--tamanho', '300px');
    content.style.display = 'block';
}
function girarSeta() {
    if (seta.classList.contains('seta-invertida')) return seta.classList.remove('seta-invertida');
    seta.classList.add('seta-invertida');
}
function girarSeta2() {
    if (topMenuSeta.classList.contains('giro-seta2')) return topMenuSeta.classList.remove('giro-seta2');
    topMenuSeta.classList.add('giro-seta2');
}


function topMenuTamanho() {
    if(hidden.style.height !== '350px') {
        hidden.style.height = '350px';
    } else {
        hidden.style.height = '90px';
    }}