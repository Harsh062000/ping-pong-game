document.addEventListener("DOMContentLoaded", () => {

       let ball = document.getElementById("ball"); //targetting the ball element
       let table = document.getElementById("ping-pong-table");

       // here the ballX and ballY will be helping us to set a starting point of the ball w.r.t table      
       let ballX = 50; // distance of the top of the ball w.r.t ping pong table
       let ballY = 50; // distance of the left of the ball w.r.t ping pong table

       let dx = 2;// displacement factor in x-direction
       let dy = 2;// displacement factor in y-direction

       ball.style.left = `${ballX}px`;
       ball.style.top = `${ballY}px`;

       setInterval(function exec() {

              ballX += dx;
              ballY += dy;

              ball.style.left = `${ballX}px`;
              ball.style.top = `${ballY}px`;


              // if (ballX > 700 - 20 || ballX <= 0) dx *= -1;
              // if (ballY > 400 - 20 || ballY <= 0) dy *= -1;

              if (ballX > table.offsetWidth - ball.offsetWidth || ballX <= 0) dx *= -1; //change the direction of the ball
              if (ballY > table.offsetHeight - ball.offsetHeight || ballY <= 0) dy *= -1; //change the direction of the ball

       }, 1);
})