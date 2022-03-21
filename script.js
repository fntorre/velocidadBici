function calcular() {
    if (document.getElementById("distancia").value.length > 0 && document.getElementById("tiempo").value.length > 0) {
        let nombre = document.getElementById("nombre").value;
        let distancia = document.getElementById("distancia").value;
        let tiempo = document.getElementById("tiempo").value;
        let horas = tiempo / 60;
        let resultado = distancia / horas;
        let final = resultado.toFixed(2);
        document.getElementById("result").innerHTML = `${nombre} tu velocidad promedio en bicicleta es de ${final} km/h.`;
    }
    else {
        document.getElementById("result").innerHTML = `<p class="alert">Falta uno o más datos.</p>`;
    }
}

function updateTextInputDist(val) {
    document.getElementById('textInputDist').value=val + " "  + "Km."; 
  }

  function updateTextInputTiempo(val) {
    document.getElementById('textInputTiempo').value=val  + " "  + "Minutos"; 
  }
function resetear() {
    location.reload()
}

document.getElementById("mic").addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
        calcular()
    }
}); 