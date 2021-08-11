import singleSpaHtml from "single-spa-html";
import { defineCustomElements } from "weather-web-component-stencil";

defineCustomElements(window);

export const WeatherApp = singleSpaHtml({
  template: (props) => `<my-component city="London"></my-component>`,
});
