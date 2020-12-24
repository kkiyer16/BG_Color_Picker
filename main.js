const colors_arr = ['red', 'green', 'blue', 'rgb(3, 3, 252)', '#ffff00'];
const btn = document.querySelector(".click-me");
const color = document.querySelector(".color");

btn.addEventListener('click', (e)=>{
    e.preventDefault();
    const random_color = getRandomColor()
    document.body.style.backgroundColor = colors_arr[random_color];
    color.textContent = colors_arr[random_color];
});

function getRandomColor(){
    console.log(Math.floor(Math.random() * colors_arr.length));
    return Math.floor(Math.random() * colors_arr.length);
}
