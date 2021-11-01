
let btn1 = document.getElementById("theme");
function applyDarkMode(){
    if (btn1.innerHTML == "Dark"){
        btn1.innerHTML = "Light";
        btn1.style.backgroundColor = "White"
    }else{
        btn1.innerHTML = "Dark";
        btn1.style.backgroundColor = "rgb(82, 79, 79)";
    }
    document.body.classList.toggle("darkmodebody");
    document.querySelector("nav").classList.toggle("darkmodenav");
    document.querySelector("p").classList.toggle("darkmodenavp");
}

let btn2 =  document.getElementById("notes");
function addTextArea(){
    document.getElementById("notearea").innerHTML += "<textarea id = 'usertext' rows='20' cols='150'></textarea>";
    document.getElementById("notearea").innerHTML += "<button id ='save'>Save</button>";
    document.getElementById("notearea").innerHTML +="<button id ='cancel'>Cancel</button>";
    let btn3 = document.getElementById("save");
    let btn4 = document.getElementById("cancel")
    btn3.addEventListener('click',saveTextArea);
    btn4.addEventListener("click",resetPage)
}
function saveTextArea(){
    let textvalue = document.getElementById("usertext").value;
    if (textvalue.includes("\n\n")){

        let title = '';
        let count = 0;
        let i = 0;
        while(count < 2){
            if (textvalue[i] == '\n'){
                count+=1;
            }else{
                title+=textvalue[i];
            }
        i+=1;
        }
        document.querySelector('ul').innerHTML += `<li>${title}</li>`;
        resetPage();
    }
    else{
        console.log("condition not met")
        resetPage();
    }
}
function resetPage(){
    document.getElementById("usertext").remove();
    document.getElementById("save").remove();
    document.getElementById("cancel").remove();
}


btn1.addEventListener('click',applyDarkMode);
btn2.addEventListener('click',addTextArea);