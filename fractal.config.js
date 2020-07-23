const { resolve } = require("path");

const fractal = require("@frctl/fractal").create();

fractal.set("project.title", "AHCS - Template Engines");

fractal.components.set("path", resolve(__dirname, "src/components"));

module.exports = fractal;