window.onload = function() {
  let determinante = "Un ";
  let sustantivo = [
    "perro ",
    "gato ",
    "alien ",
    "lanzallamas ",
    "zombie ",
    "vampiro ",
    "robot ",
    "orco ",
    "monstruo ",
  ];
  let adjetivo = [
    "verde ",
    "amarillo ",
    "horrible ",
    "podrido ",
    "viejo ",
    "austado ",
    "imponente ",
  ];
  let verbo = [
    "cogió ",
    "arañó ",
    "meó ",
    "escupió ",
    "robó ",
    "destruyó ",
    "manchó ",
    "golpeó ",
  ];
  let cosa = [
    "mis llaves ",
    "mi coche ",
    "mis zapatos ",
    "mi telefono ",
    "mi pasaporte ",
    "mis calzoncillos ",
    "mis gafas ",
    "mi chaqueta ",
    "mi espada ",
    "mi omnitrix ",
  ];

  let op1 = Math.floor(Math.random() * sustantivo.length);
  let op2 = Math.floor(Math.random() * adjetivo.length);
  let op3 = Math.floor(Math.random() * verbo.length);
  let op4 = Math.floor(Math.random() * cosa.length);

  document.querySelector("#escusa").innerHTML =
    determinante + sustantivo[op1] + adjetivo[op2] + verbo[op3] + cosa[op4];
};
