import { Prop, h, State, Watch, Component } from '@stencil/core';

@Component({
  tag: 'weather-widget',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {
  @Prop() city: string;
  @State() weatherData: any;
  @State() message = 'Loading...';

  @Watch('city')
  getWeatherData(newValue: string, oldValue?: string) {
    if (newValue !== oldValue && newValue.length >= 3) {
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=246d81ad63dba613bf2967fe6b3f0192&units=metric`)
        .then((response: Response) => {
          if (response.ok) {
            return response.json();
          } else {
            this.message = `Invalid city ${newValue}`;
          }
        })
        .then(response => {
          this.weatherData = response;
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }

  componentWillLoad() {
    this.getWeatherData(this.city);
  }

  render() {
    return (
      <div>
        {this.weatherData ? (
          <article class="widget">
            <div class="weatherInfo">
              <div class="temperature">
                <span>{this.weatherData?.main?.temp}&deg;</span>
              </div>
              <div class="description">
                <div class="weatherCondition">{this.weatherData?.weather[0]?.main}</div>
                <div class="place">
                  {this.weatherData?.name}, {this.weatherData?.sys?.country}
                </div>
              </div>
            </div>
            <div class="weatherIcon">
              <img src={`https://openweathermap.org/img/wn/${this.weatherData?.weather[0]?.icon}@2x.png`} alt="" />
            </div>
          </article>
        ) : (
          <article class="widget">{this.message}</article>
        )}
      </div>
    );
  }
}
