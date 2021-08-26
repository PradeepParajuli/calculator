"strict mode"
// 1. change  style button on click 
// 2. Store button clicks as String
// 3. If '=' clicked eveluate and display answer

function changeStyle(id){
    let btn = document.getElementById(id);
    let btnColor = btn.style.backgroundColor;
    // btn.style.color = "black";
    btn.style.backgroundColor="#53F2D1";
    setTimeout(()=>{
        // btn.style.color = "black";
        btn.style.backgroundColor=btnColor;
    },50);
}

function solve(equation){
    let mainDisplay = document.getElementById("display-main-text");
    mainDisplay.innerText = eval(equation);
}

function secondaryDisplay(input){
    let secondaryDisp = document.getElementById("display-secondary-text");
    let secondaryText = secondaryDisp.innerText;
    let mainDisplay = document.getElementById("display-main-text");
    let mainText = mainDisplay.innerText;

    if(input==='/' || input==='*' || input==='+' || input==='-'){

        if(secondaryText===""){
            secondaryDisp.innerText = mainText + input;
            mainDisplay.innerText = "0.0";
        }else{
            secondaryDisp.innerText = secondaryText + mainText + input;
            mainDisplay.innerText = "0.0";
        }  
    }
    else if(input==='AC'){
        secondaryDisp.innerText = "";
        mainDisplay.innerText = "0.0";
    }
    else if(input==='='){
        let t = secondaryText.charAt(secondaryText.length-1);
        if( t==='/' || t==='*' || t==='+' || t==='-'){
            secondaryDisp.innerText = "";
            secondaryText = secondaryText + mainText;
            solve(secondaryText);
        }
        
    }
    else if(input==='DEL'){
        mainDisplay.innerText = mainText.substring(0,mainText.length - 1);
    }
    else{
        if(mainText=="0.0"){
            mainDisplay.innerText = input;
        }else{
            mainDisplay.innerText = mainText + input;
        }
        
    }
}
function clicked(btn_id){
    let key = document.getElementById(btn_id).value;
    if(key==='÷'){
        key='/';
    }
    secondaryDisplay(key);

    // change style when key press
    changeStyle(btn_id);
}



//  ---- work with key press ----
// let calculator = document.getE
function keyPress(btn){
    let key = btn.key;
    console.log(key);
    let id;
    
        // switch(key){
        //     case "Delete":
        //         key = 'AC';
        //         id = 'ac';
        //         break;
        
        //     case "Backspace":
        //         key = 'DEL';
        //         id='del';
        //         break;
            
        //     case "Enter":
        //         key = '=';
        //         id='eql';
        //         break;

        //     case '*':
        //         id = 'mul';
        //         break;
            
        //     case '/':
        //         id = 'dev';
        //         break;
            
        //     case '.':
        //         id = 'dot';
        //         break;
                
        //     case '+':
        //         id = 'add';
        //         break;
                
        //     case '-':
        //         id = 'sub';
        //         break;
                
        //     case '*':
        //         id = 'mul';
        //         break;

        //     default:
        //         id = 'btn-'+ key;
        // }
        console.log(key === "Delete")
        if (key === "Delete"){
            key = 'AC';
            id = 'ac';
        }
        else if (key === "Backspace"){
            key = 'DEL';
            id='del';
        }
        else if (key === "Enter"){
            key = '=';
            id='eql';
        }
        else if (key === "*"){
            id = 'mul';
        }
        else if (key === "/"){
            id = 'dev';
        }
        else if (key === "."){
            id = 'dot';
        }
        else if (key === "+"){
            id = 'add';
        }
        else if (key === "-"){
            id = 'sub';
        }
        else if (key === "*"){
            id = 'mul';
        }
        else if (key>='0' && key<='9'){
            id = 'btn-'+ key;
        }


        secondaryDisplay(key);

        // change style when key press
        changeStyle(id);
    
}
let body = document.getElementsByTagName("body")[0];
body.addEventListener("keyup",keyPress);