const canvas = document.getElementById('canvas');
const aumentarBtn = document.getElementById('aumentar');
const diminuirBtn = document.getElementById('diminuir');
const tamanhoEl = document.getElementById('tamanho');
const ctx = canvas.getContext('2d');

let tamanho = 30;
let apertado = false;

canvas.addEventListener('mousedown', () => {
    apertado = true;
});

canvas.addEventListener('mouseup', () => {
    apertado = false;
});
 
canvas.addEventListener('mousemove', (e) => {
    if(apertado) {
        const x = e.offsetX;
        const y = e.offsetY;

        drawCircle(x, y);
    } 
});

function drawCircle(x, y) {
    ctx.beginPath();
    ctx.arc(x, y, tamanho, 0, Math.PI * 2);
    ctx.fill();
}

aumentarBtn.addEventListener('click', () => {
    tamanho += 5;

    if(tamanho > 50) {
        tamanho = 50;
    }

    atualizarTamanhoNaTela();
});

diminuirBtn.addEventListener('click', () => {
    tamanho -= 5;

    if(tamanho < 5) {
        tamanho = 5;
    }

    atualizarTamanhoNaTela();
});

function atualizarTamanhoNaTela() {
    tamanhoEl.innerText = tamanho;
}
