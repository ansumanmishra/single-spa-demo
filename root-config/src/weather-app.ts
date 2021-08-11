import singleSpaHtml from "single-spa-html";
import { defineCustomElements } from "weather-web-component-stencil/loader";

defineCustomElements(window);

export const WeatherApp = singleSpaHtml({
  template: async (props) => {
    const { keyword$ } = await System.import("@demo/utility");
    keyword$.subscribe((keyword) => {
      const weatherWidget = document.querySelector("weather-widget");
      if (weatherWidget) {
        weatherWidget.city = keyword;
      }
    });
    return `<weather-widget city="Bern"></weather-widget>`;
  },
});
