window.onload = function() {
    let nombre = ["Marcos", "Juan", "Martín", "Laura"];
    let acción = ["comió", "estudió", "durmió", "apareció"];
    let lugar = ["en la playa", "en la calle", "en el monte", "en la carretera"];
    let indiceNombre = Math.floor(Math.random() * nombre.length);
    let indiceAcción = Math.floor(Math.random() * acción.length);
    let indiceLugar = Math.floor(Math.random() * lugar.length);
    document.querySelector("#excuse").innerHTML =
      nombre[indiceNombre] +
      " " +
      acción[indiceAcción] +
      " " +
      lugar[indiceLugar];
  };
  