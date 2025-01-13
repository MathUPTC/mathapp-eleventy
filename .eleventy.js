module.exports = function(eleventyConfig) {
    // Passthrough para copiar archivos estáticos
    eleventyConfig.addPassthroughCopy("src/css");
    eleventyConfig.addPassthroughCopy("src/js");

    // Configuración de entrada, salida y pathPrefix
    return {
        dir: {
            input: "src",       // Carpeta de entrada
            output: "docs"      // Carpeta de salida
        },
        pathPrefix: "/mathapp-eleventy/" // Cambia esto por el nombre real del repositorio
    };
};
