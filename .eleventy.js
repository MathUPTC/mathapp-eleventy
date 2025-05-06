const path = require("path");

module.exports = function (eleventyConfig) {
  // Elimina estas líneas:
  // const tareasData = require(path.join(__dirname, "src/_data/tareas.json"));
  // console.log(tareasData);
  // eleventyConfig.addGlobalData("tareas", tareasData);

  // Mantén el resto igual...
  eleventyConfig.addFilter("split", function (value, delimiter) {
    return value.split(delimiter);
  });

  eleventyConfig.addFilter("jsonify", function (value) {
    return JSON.stringify(value);
  });

  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/js");

  return {
    dir: {
      input: "src",
      output: "docs",
    },
    pathPrefix: "/mathapp-eleventy/",
  };
};
