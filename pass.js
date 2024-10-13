const passlen = document.querySelector(".passlen");
const passbox = document.querySelector(".passbox");
const btn = document.querySelector(".btn");

// Bind Enter key to Length Input Box
passlen.addEventListener("keydown", (e) => {
    if(e.key === "Enter"){
        btn.click();
    }
})

// Bind Click to Generate Button
btn.addEventListener("click", (e) => {
        e.preventDefault();
        let len = Number(passlen.value);
        if(len <= 0){
            passbox.value = "Inalid Length!"
        }
        else{
            generatePass(len);
        }
})

// Generate Password
const generatePass = (len) =>{
    const passchar = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890@_.#&";
    let password = "";
    for(i = 1; i <= len; i++){
        password += passchar[Math.floor(Math.random() * passchar.length)];
    }
    passbox.value = password;
}