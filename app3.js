
var isInt = function(n) { return parseInt(n) === n };

do {
    var yourAge = parseInt(prompt('¿Qué edad tienes?'));
}
   while (!isInt === yourAge);
  
alert('debe ingresar solo números enteros');



  if (yourAge <= 4){
      alert('you are a toddler');
  }else if(yourAge >4 && yourAge <7){
    alert('you are a preschooler');
  }else if(yourAge >=7 && yourAge<13){
    alert('you are a gradeschooler');
  }else if(yourAge >=13 && yourAge<18){
    alert('you are a teenager');
  }else if(yourAge >=18 && yourAge<22){
    alert('you are a young adult');
  }else{(yourAge>=22);
      alert('you are an adult');
  }

