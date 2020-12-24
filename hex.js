const hex_arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
const btn = document.querySelector('.click-me');
const color = document.querySelector('.color');

btn.addEventListener('click', (e)=>{
    e.preventDefault();
    let hex = '#';
    for(let i=0; i < 6; i++){
        hex += hex_arr[getRandomColor()];
    }

    color.textContent = hex;
    document.body.style.backgroundColor = hex;
});

function getRandomColor(){
    console.log(Math.floor(Math.random() * hex_arr.length));
    return Math.floor(Math.random() * hex_arr.length);
}