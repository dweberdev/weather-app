import { rest } from "msw";
import { render, screen } from "@testing-library/react";

import WeatherCard from "./weather-card";

beforeEach(() =>
  render(
    <WeatherCard
      city="Dallas"
      temp="50"
      description="Cloudy"
      icon="http://openweathermap.org/img/wn/01d@2x.png"
    />
  )
);

describe("test the weather card component", () => {
  it("should display the city", async () => {
    expect(screen.getByText("Dallas")).toBeInTheDocument();
  });

  it("should display the description", async () => {
    expect(screen.getByText("Cloudy")).toBeInTheDocument();
  });

  it("should display the temperature", async () => {
    expect(screen.getByText("50 ℉")).toBeInTheDocument();
  });

  it("should display the correct alt attribute", async () => {
    expect(screen.getByAltText("Dallas-Cloudy")).toBeInTheDocument();
  });

  it("should add the correct src attribute", () => {
    expect(screen.getByAltText("Dallas-Cloudy")).toHaveAttribute(
      "src",
      "/_next/image?url=http%3A%2F%2Fopenweathermap.org%2Fimg%2Fwn%2F01d%402x.png&w=256&q=75"
    );
  });
});
