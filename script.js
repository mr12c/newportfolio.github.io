let cursor=document.getElementsByClassName("crsr")[0]
window.addEventListener("mousemove",mover)
function mover(e){
   cursor.style.transform=`translate(${e.clientX}px,${e.clientY}px)`
   
}
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function myAnime(){
    var tl=gsap.timeline();

    tl.from("#nav",{
        y:'-10',
        opacity:0,
        durantion:1.8,
        ease: Expo.easeInOut,
    })
    .to(".boundingElem",{
        y:0,
        duration:1.5,
        stagger:0.2,
        ease:Expo.easeInOut
    })
    .from(".hero-footer",{
        opacity:0,
        y:'-10',
        duration:1.7,
        delay:-1,
        ease:Expo.easeInOut,

    })

}

myAnime()
 
let menu=document.getElementById("mn");
console.log(menu);
menu.addEventListener("mousemove",resize)
function resize(){
    cursor.style="width:4rem; height:4rem;";
}
menu.addEventListener("mouseleave",none);
function none(){
    cursor.style="width:1.55rem; height:1.55rem;";
    
}
let anotherElement=document.getElementsByClassName("chotiHeading")[0];
anotherElement.addEventListener("mousemove",resize);
anotherElement.addEventListener("mouseleave",none);