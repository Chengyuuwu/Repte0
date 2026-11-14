function avaluarEntrada() {
    const valor = document.getElementById("entradaDatos").value; /*[cite: 4] */
    const mensaje = document.getElementById("mensaje"); /*[cite: 4] */

    try {
        if (valor.trim() === "" || isNaN(valor)) { /*[cite: 4] */
            throw new Error("Opció incorrecta: El valor introduït no és un número.");
        }

        // Forzamos un error de código interno intencionado
        if (valor === "5") {
            funcioInexistentQueForcaErrorDeCodi(); 
        }

        mensaje.className = "exito"; /*[cite: 4] */
        mensaje.textContent = "Tot correcte! El número és el: " + valor;
        console.log("Execució correcta.");

    } catch (error) {
        console.error("S'ha capturat un error al sistema:", error);
        
        mensaje.className = "error"; /*[cite: 4] */

        if (error instanceof ReferenceError) {
            mensaje.textContent = "Error de sistema: Hi ha un error intern de codi a l'aplicació.";
        } else {
            mensaje.textContent = error.message;
        }
    }
}