import { Component, Prop, h, State } from '@stencil/core';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {
  @Prop() city: string;
  @State() weatherData: any;

  componentWillLoad() {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=246d81ad63dba613bf2967fe6b3f0192&units=metric`)
      .then((response: Response) => response.json())
      .then(response => {
        this.weatherData = response;
        console.log(this.weatherData);
      });
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
          <div>Loading...</div>
        )}
      </div>
    );
  }
}
