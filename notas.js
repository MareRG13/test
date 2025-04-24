    let totalSegundos = 3600; //  1 hora
    let enMarcha = false;
    let intervalo;

    function actualizarPantalla() {
      const horas = Math.floor(totalSegundos / 3600);
      const minutos = Math.floor((totalSegundos % 3600) / 60);
      const segundos = totalSegundos % 60;

      document.getElementById("tiempo").textContent =
        (horas < 10 ? "0" + horas : horas) + ":" +
        (minutos < 10 ? "0" + minutos : minutos) + ":" +
        (segundos < 10 ? "0" + segundos : segundos);

      if (totalSegundos <= 300) { // menos de 5 minutos
        document.getElementById("tiempo").classList.add("agotando");
      }
    }

    function iniciar() {
      if (!enMarcha) {
        actualizarPantalla(); // Mostrar tiempo inicial
        intervalo = setInterval(() => {
          if (totalSegundos <= 0) {
            clearInterval(intervalo);
            alert("¡Tiempo terminado!");
          } else {
            totalSegundos--;
            actualizarPantalla();
          }
        }, 1000);
        enMarcha = true;
      }
    }

    if (!window.history.state) {
      window.history.replaceState({ reloaded: true }, "");
  } else {
      window.location.href = "preguntas.html";
  }
  window.addEventListener('load', iniciar);
    window.addEventListener('load', function () {
    if (performance.navigation.type ==1) {
      // Redirigir a otra página
      window.location.href = "preguntas.html"; 
    }
  });
  if (sessionStorage.getItem("reloaded")) {
    sessionStorage.removeItem("reloaded");
    window.location.href = "preguntas.html";
} else {
    sessionStorage.setItem("reloaded", "true");
}
function Resultado() {
  var op1, op2, op3, op4, op5, op6, op7, op8, op9, op10,
    op11, op12, op13, op14, op15, op16, op17, op18, op19, op20,
    op21, op22, op23, op24, op25, op26, op27, op28, op29, op30,
    op31, op32, op33, op34, op35, op36, op37, op38, op39, op40,
    op41, op42, op43, op44, op45, op46, op47, op48, op49, op50;
  
  // Pregunta 1
  if (document.getElementById('opcion1_3').checked) {
    op1 = 1;
  } else {
    op1 = 0;
  }

  // Pregunta 2
  if (document.getElementById('opcion2_1').checked) {
    op2 = 1;
  } else {
    op2 = 0;
  }

  // Pregunta 3
  if (document.getElementById('opcion3_1').checked) {
    op3 = 1;
  } else {
    op3 = 0;
  }

  // Pregunta 4
  if (document.getElementById('opcion4_3').checked) {
    op4 = 1;
  } else {
    op4 = 0;
  }

  // Pregunta 5
  if (document.getElementById('opcion5_2').checked) {
    op5 = 1;
  } else {
    op5 = 0;
  }

  // Pregunta 6
  if (document.getElementById('opcion6_1').checked) {
    op6 = 1;
  } else {
    op6 = 0;
  }

  // Pregunta 7
  if (document.getElementById('opcion7_2').checked) {
    op7 = 1;
  } else {
    op7 = 0;
  }

  // Pregunta 8
  if (document.getElementById('opcion8_1').checked) {
    op8 = 1;
  } else {
    op8 = 0;
  }

  // Pregunta 9
  if (document.getElementById('opcion9_1').checked) {
    op9 = 1;
  } else {
    op9 = 0;
  }

  // Pregunta 10
  if (document.getElementById('opcion10_3').checked) {
    op10 = 1;
  } else {
    op10 = 0;
  }

  // Pregunta 11
  if (document.getElementById('opcion11_2').checked) {
    op11 = 1;
  } else {
    op11 = 0;
  }

  // Pregunta 12
  if (document.getElementById('opcion12_3').checked) {
    op12 = 1;
  } else {
    op12 = 0;
  }

  // Pregunta 13
  if (document.getElementById('opcion13_1').checked) {
    op13 = 1;
  } else {
    op13 = 0;
  }

  // Pregunta 14
  if (document.getElementById('opcion14_3').checked) {
    op14 = 1;
  } else {
    op14 = 0;
  }

  // Pregunta 15
  if (document.getElementById('opcion15_1').checked) {
    op15 = 1;
  } else {
    op15 = 0;
  }

  // Pregunta 16
  if (document.getElementById('opcion16_3').checked) {
    op16 = 1;
  } else {
    op16 = 0;
  }

  // Pregunta 17
  if (document.getElementById('opcion17_2').checked) {
    op17 = 1;
  } else {
    op17 = 0;
  }

  // Pregunta 18
  if (document.getElementById('opcion18_1').checked) {
    op18 = 1;
  } else {
    op18 = 0;
  }

  // Pregunta 19
  if (document.getElementById('opcion19_1').checked) {
    op19 = 1;
  } else {
    op19 = 0;
  }

  // Pregunta 20
  if (document.getElementById('opcion20_2').checked) {
    op20 = 1;
  } else {
    op20 = 0;
  }

  // Pregunta 21
  if (document.getElementById('opcion21_1').checked) {
    op21 = 1;
  } else {
    op21 = 0;
  }

  // Pregunta 22
  if (document.getElementById('opcion22_1').checked) {
    op22 = 1;
  } else {
    op22 = 0;
  }

  // Pregunta 23
  if (document.getElementById('opcion23_1').checked) {
    op23 = 1;
  } else {
    op23 = 0;
  }

  // Pregunta 24
  if (document.getElementById('opcion24_2').checked) {
    op24 = 1;
  } else {
    op24 = 0;
  }

  // Pregunta 25
  if (document.getElementById('opcion25_2').checked) {
    op25 = 1;
  } else {
    op25 = 0;
  }

  // Pregunta 26
  if (document.getElementById('opcion26_2').checked) {
    op26 = 1;
  } else {
    op26 = 0;
  }

  // Pregunta 27
  if (document.getElementById('opcion27_1').checked) {
    op27 = 1;
  } else {
    op27 = 0;
  }

  // Pregunta 28
  if (document.getElementById('opcion28_1').checked) {
    op28 = 1;
  } else {
    op28 = 0;
  }

  // Pregunta 29
  if (document.getElementById('opcion29_1').checked) {
    op29 = 1;
  } else {
    op29 = 0;
  }

  // Pregunta 30
  if (document.getElementById('opcion30_1').checked) {
    op30 = 1;
  } else {
    op30 = 0;
  }

  // Pregunta 31
  if (document.getElementById('opcion31_1').checked) {
    op31 = 1;
  } else {
    op31 = 0;
  }

  // Pregunta 32
  if (document.getElementById('opcion32_2').checked) {
    op32 = 1;
  } else {
    op32 = 0;
  }

  // Pregunta 33
  if (document.getElementById('opcion33_2').checked) {
    op33 = 1;
  } else {
    op33 = 0;
  }

  // Pregunta 34
  if (document.getElementById('opcion34_1').checked) {
    op34 = 1;
  } else {
    op34 = 0;
  }

  // Pregunta 35
  if (document.getElementById('opcion35_1').checked) {
    op35 = 1;
  } else {
    op35 = 0;
  }

  // Pregunta 36
  if (document.getElementById('opcion36_1').checked) {
    op36 = 1;
  } else {
    op36 = 0;
  }

  // Pregunta 37
  if (document.getElementById('opcion37_1').checked) {
    op37 = 1;
  } else {
    op37 = 0;
  }

  // Pregunta 38
  if (document.getElementById('opcion38_2').checked) {
    op38 = 1;
  } else {
    op38 = 0;
  }

  // Pregunta 39
  if (document.getElementById('opcion39_1').checked) {
    op39 = 1;
  } else {
    op39 = 0;
  }

  // Pregunta 40
  if (document.getElementById('opcion40_1').checked) {
    op40 = 1;
  } else {
    op40 = 0;
  }

  // Pregunta 41
  if (document.getElementById('opcion41_1').checked) {
    op41 = 1;
  } else {
    op41 = 0;
  }

  // Pregunta 42
  if (document.getElementById('opcion42_1').checked) {
    op42 = 1;
  } else {
    op42 = 0;
  }

  // Pregunta 43
  if (document.getElementById('opcion43_1').checked) {
    op43 = 1;
  } else {
    op43 = 0;
  }

  // Pregunta 44
  if (document.getElementById('opcion44_1').checked) {
    op44 = 1;
  } else {
    op44 = 0;
  }

  // Pregunta 45
  if (document.getElementById('opcion45_1').checked) {
    op45 = 1;
  } else {
    op45 = 0;
  }

  // Pregunta 46
  if (document.getElementById('opcion46_1').checked) {
    op46 = 1;
  } else {
    op46 = 0;
  }

  // Pregunta 47
  if (document.getElementById('opcion47_1').checked) {
    op47 = 1;
  } else {
    op47 = 0;
  }

  // Pregunta 48
  if (document.getElementById('opcion48_1').checked) {
    op48 = 1;
  } else {
    op48 = 0;
  }

  // Pregunta 49
  if (document.getElementById('opcion49_1').checked) {
    op49 = 1;
  } else {
    op49 = 0;
  }

  // Pregunta 50
  if (document.getElementById('opcion50_1').checked) {
    op50 = 1;
  } else {
    op50 = 0;
  }

  nota = op1 + op2 + op3 + op4 + op5 + op6 + op7 + op8 + op9 + op10 +
         op11 + op12 + op13 + op14 + op15 + op16 + op17 + op18 + op19 + op20 +
         op21 + op22 + op23 + op24 + op25 + op26 + op27 + op28 + op29 + op30 +
         op31 + op32 + op33 + op34 + op35 + op36 + op37 + op38 + op39 + op40 +
         op41 + op42 + op43 + op44 + op45 + op46 + op47 + op48 + op49 + op50;
  calificacionSobre10 = (nota * 10) / 50;

  alert("Tuviste " + nota + " respuestas correctas. Cada respuesta correcta equivale al 0,2 puntos, por lo tanto tu calificacion es de " + calificacionSobre10 + " sobre 10.");

  if (calificacionSobre10 >= 7){
  	alert("Felicidades!!!. Aprovaste el test.");
  }
  else {
  	alert("No aprovaste el test. Quizá para la siguiente ocación te irá mejor") ;
  }
document.querySelectorAll('input[type="radio"]:checked').forEach(radio => {
    radio.checked = false;
  });
  window.location.href = "enviar.html"; 
}

