let rock1=document.getElementById('rock1');
let rock2=document.getElementById('rock2');
let rock3=document.getElementById('rock3');
let rock4=document.getElementById('rock4');
let rock5=document.getElementById('rock5');



document.querySelectorAll(".rocks").forEach(rock=>{
    gsap.to(rock,{opacity:1})
})

gsap.set(rock1, {
    y: window.innerHeight*-0.5,
    rotate:120
  });

gsap.set(rock2, {
    y: window.innerHeight*-0.5,
    rotate:180
  });
  
gsap.set(rock3, {
    
    y: window.innerHeight*-0.5,
    rotate:200
  });
  
gsap.set(rock4, {
    y: window.innerHeight*-0.5,
  });
gsap.set(rock5, {
    y: window.innerHeight*-0.5,
    rotate:50
  });


  
  const tl = gsap.timeline({
    onComplete:()=>onAnimationComplete()
  });



  [rock1, rock2, rock3, rock4, rock5].forEach((rock, index) => {
    tl.to(rock, {
      y: window.innerHeight * 0.5,      
      x: gsap.utils.random(-40, 40),
      rotation: gsap.utils.random(540, 900),
      duration: gsap.utils.random(1.6, 2.5),
      ease: "expo.in",
      onUpdate() {
        gsap.set(rock, {
          skewX: gsap.utils.random(-1.5, 1.5)
        });
      }
    }, 0); 
  });
  

  function onAnimationComplete(){
    document.getElementById("image-container").classList.add('anim')

    setTimeout(()=>{
        document.getElementById("para").classList.add('displayText')
    document.getElementById("navbar").classList.add('reveal')

    },500)
    


  }

  

  const observer=new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add('animate')
        }
        else{
            entry.target.classList.remove('animate')
        }
    }),
    {threshold:0.2}
  })


  document.querySelectorAll(".animate").forEach(anim => {
    observer.observe(anim);
  });
  