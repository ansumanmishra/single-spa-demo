const singleSpaAngularWebpack =
  require("single-spa-angular/lib/webpack").default;

module.exports = (config, options) => {
  const singleSpaWebpackConfig = singleSpaAngularWebpack(config, options);
  singleSpaWebpackConfig.externals.push(
    "@demo/utility",
    "rxjs",
    "rxjs/operators"
  );

  // Feel free to modify this webpack config however you'd like to
  return singleSpaWebpackConfig;
};
