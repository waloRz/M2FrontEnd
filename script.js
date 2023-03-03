let menuVisible = false;

const toggleBtn = document.querySelector(".toggle_btn");
const toggleBtnIcon = document.querySelector(".toggle_btn i");
const dropDownMenu = document.querySelector(".dropdown_menu");

toggleBtn.onclick = function () {
  dropDownMenu.classList.toggle("open");
  const isOpen = dropDownMenu.classList.contains("open");

  toggleBtnIcon.classList = isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars";
};

//Función que oculta o muestra el menu

function mostrarOcultarMenu() {
  if (menuVisible) {
    menuVisible = false;
  } else {
    document.getElementById("nav2").classList = "dropdown_menu";
    menuVisible = true;
  }
  const isOpen = dropDownMenu.classList.contains("open");

  toggleBtnIcon.classList = isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars";
}

function seleccionar() {
  //oculto el menu una vez que selecciono una opcion

  document.getElementById("nav2").classList = "closed";
  menuVisible = false;
}

//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades() {
  var skills = document.getElementById("skills");
  var distancia_skills =
    window.innerHeight - skills.getBoundingClientRect().top;
  if (distancia_skills >= 300) {
    let habilidades = document.getElementsByClassName("progreso");
    habilidades[0].classList.add("javascript");
    habilidades[1].classList.add("htmlcss");
    habilidades[2].classList.add("photoshop");
    habilidades[3].classList.add("wordpress");
    habilidades[4].classList.add("drupal");
    habilidades[5].classList.add("comunicacion");
    habilidades[6].classList.add("trabajo");
    habilidades[7].classList.add("creatividad");
    habilidades[8].classList.add("dedicacion");
    habilidades[9].classList.add("proyect");
  }
}

//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function () {
  efectoHabilidades();
};

//validacion y envio de msj de formulario de contacto

const nombre = document.getElementById("nombre");
const correo = document.getElementById("correo");
const asunto = document.getElementById("asunto");
const mensaje = document.getElementById("mesaje");
const formuid = document.getElementById("formulario");
const parrafos = document.getElementById("warnings");
const $listoE = document.getElementById("correctoE");

formuid.addEventListener("submit", (e) => {
  e.preventDefault();

  let warnings = "";
  let regexEmail =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  let entrar = true;

  if (nombre.value.length < 6) {
    warnings += "* El Nombre no es valido <br>";
    entrar = false;
  }
  if (!regexEmail.test(correo.value)) {
    warnings += "* El Email no es valido <br>";
    entrar = false;
  }

  if (entrar) {
    enviomsj();
    parrafos.innerHTML = "";
  } else {
    parrafos.innerHTML = warnings;
    $listoE.innerHTML = "";
  }
});

// envio de mensaje
function enviomsj() {
  const $listoE = document.getElementById("correctoE");
  const $formulario = document.querySelector("#formulario");

  $formulario.addEventListener("submit", elFormulario);

  async function elFormulario(event) {
    event.preventDefault();
    const form = new FormData(this);
    //console.log(form.get("nombre"));

    const response = await fetch(this.action, {
      method: this.method,
      body: form,
      headers: {
        Accept: "application/json",
        
      },

    });

    if (response.ok) {
      this.reset();      
      $listoE.innerHTML =
        "Gracias por contactarme, te respondere a la brevedad...";
    }
    //https://formspree.io/forms/xvonrqjv/submissions
  }
}
