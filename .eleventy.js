const path = require("path");

module.exports = function(eleventyConfig) {
    
    // Cargar el archivo JSON de tareas desde la carpeta src/_data
    const tareasData = require(path.join(__dirname, "src/_data/tareas.json"));

    console.log(tareasData); // Verificar los datos cargados

    // Agregar datos globales para que estén disponibles en todas las plantillas
    eleventyConfig.addGlobalData("tareas", tareasData);

    eleventyConfig.addFilter("split", function(value, delimiter) {
        return value.split(delimiter);});

    eleventyConfig.addFilter("jsonify", function(value) {
        return JSON.stringify(value);
});
    // Passthrough para copiar archivos estáticos (CSS y JS)
    eleventyConfig.addPassthroughCopy("src/css");
    eleventyConfig.addPassthroughCopy("src/js");

    // Configuración de entrada, salida y pathPrefix
    return {
        dir: {
            input: "src",       // Carpeta de entrada
            output: "docs"      // Carpeta de salida (donde se generarán los archivos estáticos)
        },
        pathPrefix: "/mathapp-eleventy/" // Para configurar el path si se usa en un entorno de subcarpeta
    };
};
