let canvas = document.getElementById("snake"); // Cria o elemento do jogo
let context = canvas.getContext("2d"); //...
let box = 32;
let snake = []; // Cria a cobrinha como listra, já que vai ser uma série de coordenadas, que quando pintadas, criam quadradinhos 
snake[0] ={
    x: 8 * box,
    y: 8 * box
}
let direction = "right";
let food ={
    x: Math.floor(Math.random() * 15 + 1) * box,
    y: Math.floor(Math.random() * 15 + 1) * box
}

function criarBG(){
    context.fillStyle = "black";
    context.fillRect(0, 0, 16*box, 16*box); // Desenha o background do jogo, usando x e y e a altura e largura já setadas
}

function criarCobrinha(){
    for(i = 0; i < snake.length; i++){
        context.fillStyle = "green";
        context.fillRect(snake[i].x, snake[i].y, box, box);
    }
}

function desenharComida(){
    context.fillStyle = "red";
    context.fillRect(food.x, food.y, box, box);
}

document.addEventListener('keydown', update); //Chama a função quando o evento acontece

function update(event){
    if(event.keyCode == 37 && direction != "right") direction = "left";
    if(event.keyCode == 38 && direction != "down") direction = "up";
    if(event.keyCode == 39 && direction != "left") direction = "right";
    if(event.keyCode == 40 && direction != "up") direction = "down";
}

function iniciarJogo() {

    for(i = 1; i < snake.length; i++){
        if(snake[0].x == snake[i].x && snake[0].y == snake[i].y){
            clearInterval(jogo);
            alert('GAME OVER!! - Recarregue a página para jogar de novo');
        }
    }

    if(snake[0].x > 15 * box && direction == "right") snake[0].x = 0;
    if(snake[0].x < 0 && direction == "left") snake[0].x = 16 * box;
    if(snake[0].y > 15 * box && direction == "down") snake[0].y = 0;
    if(snake[0].y < 0 && direction == "up") snake[0].y = 16 * box;

    criarBG();
    criarCobrinha();
    desenharComida();

    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    if(direction == "right") snakeX += box;
    if(direction == "left") snakeX -= box;
    if(direction == "up") snakeY -= box;
    if(direction == "down") snakeY += box;

    if(snakeX != food.x || snakeY != food.y){ // Define a aleatoriedade da comida
        snake.pop(); //Tira o ultimo elemento da lista
    }
    else {
        food.x = Math.floor(Math.random() * 15 + 1) * box;
        food.y = Math.floor(Math.random() * 15 + 1) * box;
    }

    let newHead = {
        x: snakeX,
        y: snakeY
    }

    snake.unshift(newHead); // Método unshift adiciona como primeiro quadradinho da cobrinha

}

let jogo = setInterval(iniciarJogo, 100);

let github = document.addEventListener('click', redirecionarGithub)
let linkedin = document.addEventListener('click', redirecionarLinkedin)

function redirecionarGithub(){
    document = window.open("https://github.com/Rodolfidas")
}

function redirecionarLinkedin(){
    document = window.open("https://www.linkedin.com/in/rodolfidas/")
}
