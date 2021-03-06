/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';
export namespace Components {
  interface WeatherWidget {
    city: string;
  }
}
declare global {
  interface HTMLWeatherWidgetElement extends Components.WeatherWidget, HTMLStencilElement {}
  var HTMLWeatherWidgetElement: {
    prototype: HTMLWeatherWidgetElement;
    new (): HTMLWeatherWidgetElement;
  };
  interface HTMLElementTagNameMap {
    'weather-widget': HTMLWeatherWidgetElement;
  }
}
declare namespace LocalJSX {
  interface WeatherWidget {
    city?: string;
  }
  interface IntrinsicElements {
    'weather-widget': WeatherWidget;
  }
}
export { LocalJSX as JSX };
declare module '@stencil/core' {
  export namespace JSX {
    interface IntrinsicElements {
      'weather-widget': LocalJSX.WeatherWidget & JSXBase.HTMLAttributes<HTMLWeatherWidgetElement>;
    }
  }
}
