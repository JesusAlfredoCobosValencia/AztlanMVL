// Esperamos a que cargue toda la página
document.addEventListener("DOMContentLoaded", function () {

    // Guardamos todas las cajas de andamios
    var cajas = document.querySelectorAll(".caja-andamio");

    // Recorremos cada caja
    cajas.forEach(function (caja) {

        // Cuando se haga click en una caja
        caja.addEventListener("click", function () {

            // Primero cerramos todas las cajas menos la actual
            cajas.forEach(function (otraCaja) {

                // Si no es la caja que acabamos de tocar
                if (otraCaja != caja) {

                    // Buscamos si tiene información extra
                    var infoAbierta = otraCaja.querySelector(".info-extra");

                    // Si tiene información abierta, la quitamos
                    if (infoAbierta) {
                        infoAbierta.remove();
                    }

                    // Quitamos la clase de abierto
                    otraCaja.classList.remove("activo");
                }

            });

            // Revisamos si la caja actual ya está abierta
            var infoActual = caja.querySelector(".info-extra");

            // Si ya está abierta, la cerramos
            if (infoActual) {
                infoActual.remove();
                caja.classList.remove("activo");
            }

            // Si no está abierta, la abrimos
            else {

                // Creamos el cuadro negro de información
                var nuevaInfo = document.createElement("div");

                // Le damos la clase para el diseño
                nuevaInfo.className = "info-extra";

                // Agregamos la clase activo a la caja seleccionada
                caja.classList.add("activo");

                // Tomamos el título del andamio
                var titulo = caja.querySelector("h3").textContent;

                // Información de cada andamio
                if (titulo == "Andamio 1.50 x 0.8") {
                    nuevaInfo.innerHTML =
                        "<strong>Uso recomendado:</strong><br>" +
                        "Ideal para espacios reducidos y trabajos de mantenimiento ligero.";
                }

                if (titulo == "Andamio 1.50 x 1.56") {
                    nuevaInfo.innerHTML =
                        "<strong>Uso recomendado:</strong><br>" +
                        "Recomendado para pintura, construcción y trabajos generales de obra.";
                }

                if (titulo == "Andamio 2 x 1.56") {
                    nuevaInfo.innerHTML =
                        "<strong>Uso recomendado:</strong><br>" +
                        "Ofrece mayor altura y estabilidad para proyectos profesionales.";
                }

                if (titulo == "Andamio 2 x 1") {
                    nuevaInfo.innerHTML =
                        "<strong>Uso recomendado:</strong><br>" +
                        "Excelente para fachadas, mantenimiento y trabajos de construcción.";
                }

                // Agregamos la información solamente a la caja seleccionada
                caja.appendChild(nuevaInfo);
            }

        });

    });

});