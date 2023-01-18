// eslint-disable @typescript-eslint/no-use-before-define
import { Component } from "react";
import { KtoF } from "../utils/convert-temp-k-to-f";

interface CityWeatherProps {
  city: string;
}

interface CityWeatherState {
  weatherResult: any;
}

export default class CityWeather extends Component<
  CityWeatherProps,
  CityWeatherState
> {
  public constructor(props) {
    super(props);
    this.state = {
      weatherResult: null,
    };
  }

  public componentDidMount() {
    const { city } = this.props;
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}`
    )
      .then((r) => r.json())
      .then((result) => this.setState({ weatherResult: result }));
  }

  public render() {
    const { city } = this.props;
    const { main, weather } = this.state.weatherResult || {};

    return (
      <div>
        <h1>{city}</h1>
        <div>Temperature: {KtoF(main?.temp).toFixed(0)} &#8457;</div>
        <div>Descripiton: {weather?.[0]?.description}</div>
      </div>
    );
  }
}
