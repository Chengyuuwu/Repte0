function calcularOperacio(entrada) {
    try {
        // 1. Error de cancelación[cite: 1]
        if (entrada === null) {
            throw new Error("Has cancel·lat l'operació");
        }

        // Expresión regular analizada
        const regex = /^\s*([+-]?\d+(?:\.\d+)?)\s*([\+\-\*\/\%])\s*([+-]?\d+(?:\.\d+)?)\s*$/;
        const coincidencies = entrada.match(regex);

        // 2. Error de formato (letras, falta de operandos, más de dos operandos)[cite: 1]
        if (!coincidencies) {
            throw new Error("L'expressió no és vàlida...");
        }

        // Extracción de datos gracias a los grupos de captura
        let operandA = parseFloat(coincidencies[1]);
        let operador = coincidencies[2];
        let operandB = parseFloat(coincidencies[3]);

        // 3. Error de división entre cero[cite: 1]
        if (operador === '/' && operandB === 0) {
            throw new Error("No es pot dividir entre zero");
        }

        // 4. Error de módulo entre cero[cite: 1]
        if (operador === '%' && operandB === 0) {
            throw new Error("No es pot calcular el mòdul entre zero");
        }

        // Si supera todos los filtros, la operación es válida y se puede calcular
        console.log(`Càlcul aprovat: ${operandA} ${operador} ${operandB}`);
        
    } catch (error) {
        // Capturamos cualquier error lanzado y lo mostramos (puedes adaptarlo al DOM de tu HTML)
        console.error("Error:", error.message);
    }
}