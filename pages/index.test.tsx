import { rest } from "msw";
import { setupServer } from "msw/node";
import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "isomorphic-unfetch";

import App from "./index";

const server = setupServer(
  rest.get("https://api.openweathermap.org/*", (req, res, ctx) => {
    return res(
      ctx.json({
        weather: [
          {
            description: "Overcast clouds",
          },
        ],
        main: {
          // temp in Kelvin
          temp: 295.372,
        },
      })
    );
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("render the weather card component with correct props", () => {
  it("renders weather app", async () => {
    render(<App />);
    // todo: write some assertions

    expect(screen.getByText("Weather Search:")).toBeInTheDocument();
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("should be able to type in input", async () => {
    render(<App />);

    const inputElement = screen.getByTestId("weather-input");
    fireEvent.change(inputElement, { target: { value: "Dallas" } });
    expect(inputElement.value).toBe("Dallas");
  });
});

// todo: add more tests, maybe error handling?
