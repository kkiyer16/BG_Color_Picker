const btn = document.querySelector('.click-me');
const color = document.querySelector('.color');

btn.addEventListener('click', (e)=>{
    e.preventDefault();
    document.body.style.backgroundColor = rgb_col(getRandomColor(), getRandomColor(), getRandomColor());
    color.textContent = rgb_col(getRandomColor(), getRandomColor(), getRandomColor());
})

function rgb_col(r, g, b){
    r = Math.floor(r);
    g = Math.floor(g);
    b = Math.floor(b);
    return [`rgb( ${r}, ${g}, ${b} )`];
}

function getRandomColor(){
    return 1 + Math.floor(Math.random() * 255);
}
