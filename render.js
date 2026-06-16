import { renderInicio } from "./pages/inicio.js";
import { renderNuestroEquipo } from "./pages/nosotros.js";
import { renderServicios } from "./pages/servicios.js";
import { renderConvenios } from "./pages/convenios.js";
import { renderBlog } from "./pages/blog.js";
import { renderContacto } from "./pages/contacto.js";
import { renderGaleria } from "./pages/galeria.js";

const content = document.getElementById("content");

function router() {
    const route = location.hash || "#inicio";

    if (route === "#inicio") {
        renderInicio(content);
    }
  
    } else if (route === "#nosotros") {
        renderNuestroEquipo(content);

    } else if (route === "#servicios") {
        renderServicios(content);

    } else if (route === "#convenios") {
        renderConvenios(content);

   } else if (route === "#blog") {
        renderBlog(content);

   } else if (route === "#contacto") {
        renderContacto(content);

   } else if (route === "#galeria") {
        renderGaleria(content);

   } else {
        renderInicio(content);
   }
}

window.addEventListener("hashchange", router);
window.addEventListener("load", router);
