const cssnano = require("cssnano");
const postCssPresetEnv = require("postcss-preset-env");

module.exports = {
  plugins: [
    cssnano({
      preset: "default",
    }),
    postCssPresetEnv({
      stage: 1,
    }),
  ],
};
