import cssnano from 'cssnano';
import postCssPresetEnv from 'postcss-preset-env'

export default {
  plugins: [
    cssnano({
      preset: "default",
    }),
    postCssPresetEnv({
      stage: 1,
    }),
  ],
};
