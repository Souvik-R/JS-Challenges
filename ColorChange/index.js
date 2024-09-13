const btn = document.querySelector('button');

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// setInterval(() => {
//     document.body.style.backgroundColor = getRandomColor();
// }, 2000);
// btn.addEventListener('click', () => {
//     document.body.style.backgroundColor = getRandomColor();
// })