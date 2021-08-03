const singleSpaAngularWebpack =
  require("single-spa-angular/lib/webpack").default;

module.exports = (config, options) => {
  const singleSpaWebpackConfig = singleSpaAngularWebpack(config, options);
  singleSpaWebpackConfig.externals = ["@demo/utility"];

  // Feel free to modify this webpack config however you'd like to
  return singleSpaWebpackConfig;
};
