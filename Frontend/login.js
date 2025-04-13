let username = document.querySelector(".username");
let password = document.querySelector(".password");
let para = document.querySelector(".para");

function fun(){
    if(username === "" || password === ""){
        para.innerHTML = "";
        para.innerHTML = "Please fill all the details.";
        para.style.color = "red";
        
    }
    else{
        para.innerHTML = "";
        para.innerHTML = "Your form has been submitted.";
        para.style.color = "black";
    }
}
