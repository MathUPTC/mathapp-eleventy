const fs = require('fs');
const path = require('path');

module.exports = function(eleventyConfig) {
    
    // Passthrough para copiar archivos estáticos
    eleventyConfig.addPassthroughCopy("src/css");
    eleventyConfig.addPassthroughCopy("src/js");

    // Agregar colección de tareas
    eleventyConfig.addCollection("tareas", function(collectionApi) {
        const tareasPath = path.join(__dirname, "src", "_data", "tareas.json"); // Cambia esta ruta
        console.log("Ruta de tareas.json:", tareasPath); // Verifica que sea correcta
        const tareas = JSON.parse(fs.readFileSync(tareasPath, "utf-8"));
        return tareas;
    });

    // Configuración de entrada, salida y pathPrefix
    return {
        dir: {
            input: "src",       // Carpeta de entrada
            output: "docs"      // Carpeta de salida
        },
        pathPrefix: "/mathapp-eleventy/"
    };
};
