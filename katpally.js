function adding(){

        
    let a = document.getElementById("num1").value;
    let b = document.getElementById("num2").value;
    let c = document.getElementById("num3").value;
    
    let add = addition(a,b,c);
    alert("Addition  of 3 nums is "+add);
}

function addition(x,y,z) {
    return parseInt(x)+parseInt(y)+parseInt(z);
}