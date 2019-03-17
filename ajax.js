$(document).ready(function(){
    $("button").click(function(){
        var a = $('#num1').val();
        var b = $('#num2').val();
        var c = $('#num3').val();
let add = addition(a,b,c);
alert("addition of 3 nums is "+add);

    });
  });


function addition(x,y,z) {
    return parseInt(x)+parseInt(y)+parseInt(y);
}
