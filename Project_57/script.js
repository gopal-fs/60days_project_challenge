let button = document.getElementById("btn");
let but = document.querySelector(".com");
let progress = document.querySelector(".progress");
let bar = document.querySelector(".bar");

let current_width = 0;

button.onclick = () => {
  current_width += 200;
  progress.style.width = `${current_width}px`;

  if (current_width == 600) {
    
    bar.style.opacity = "0";

    // wait for opacity transition to finish (0.5s)
    setTimeout(() => {
      bar.style.display = "none";
      button.style.display = "none";

      // show second button with fade-in
      but.style.display = "block";
      requestAnimationFrame(() => {  // force repaint
        but.style.opacity = "1";
        setTimeout(()=>{
            but.style.opacity = "0";
            but.style.display = "none";
            bar.style.opacity = "1";
            bar.style.display = "block";
            current_width=0;
            progress.style.width = `${current_width}px`;
            button.style.display='block'
            

        },1000)
      });
    }, 500); // matches your transition time
  }
};
