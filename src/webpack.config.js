const path = require("path");

module.exports = {
  webpack: {
    configure: (webpackConfig, { env, paths }) => {
      const sassLoader = {
        loader: require.resolve("sass-loader"),
        options: {
          sourceMap: true,
        },
      };

      const oneOfRule = webpackConfig.module.rules.find((rule) =>
        Array.isArray(rule.oneOf)
      ).oneOf;
      oneOfRule.unshift({
        test: /\.scss$/,
        use: [
          require.resolve("style-loader"),
          require.resolve("css-loader"),
          sassLoader,
        ],
      });

      return webpackConfig;
    },
  },
};
