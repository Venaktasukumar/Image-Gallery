const lightbox=document.querySelector(".light-box");
const lightboximages=lightbox.querySelector(".light-box img");
const container=document.querySelector(".container");

let openfullimage = (obj) =>{
    lightboximages.src=obj.src; 
    container.style.opacity="0.4";
    lightbox.style.display="flex";
}
let closefullimage = () =>{
    container.style.opacity="1";
    lightbox.style.display="none";
}