
const containerGame = document.querySelector('.container_game');

for (let i = 1; i <= 49; i++) {

   let box = document.createElement('div');
   console.log(box);
   box.classList.add('quadrato');
   box.innerHTML = i;
   containerGame.append(box);   
}