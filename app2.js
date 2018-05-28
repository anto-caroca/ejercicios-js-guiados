window.onload = function(){
 
    function menu(){
       
switch (prompt('¿qué desea ordenar para comer?')) {
    case 'ceviche':
      alert('Lo sentimos, pero no queda ceviche.');
      break;
    case 'tacos al pastor':
      alert('ya se acabaron los tacos');
      break;
    case 'empanada chilena':
      alert('queda solo una empanada');
      break;
    default:
      alert('siempre hay hamburguesas');
      break;
  }
 }

return + menu();

}
