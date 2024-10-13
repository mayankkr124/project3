const container = document.querySelector(".container")
const btn = document.querySelector(".btn")
const toggle = document.querySelector(".toggle")
const title = document.querySelector(".title")
let dark = false;
toggle.addEventListener("click", (e) =>{
    e.preventDefault();
    if(dark == false){
        dark = true;
        container.style.backgroundColor = "black"; 
        toggle.style.backgroundColor = "rgb(223, 220, 220)"; 
        title.innerHTML = "Dark Mode";
        title.style.color = "white";
        toggle.style.justifyContent = "flex-end";
        btn.style.backgroundImage = "url('mobile.jpg')";
        
    }
    else{
        dark = false;
        container.style.backgroundColor = "rgb(223, 220, 220)"; 
        toggle.style.backgroundColor = "hsla(0, 0%, 0%, 0.944)"; 
        title.innerHTML = "Light Mode";
        title.style.color = "black";
        toggle.style.justifyContent = "flex-start";
        btn.style.backgroundImage = "url('sun.png')";
    }
});