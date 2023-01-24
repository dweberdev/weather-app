import { rest } from "msw";
import { setupServer } from "msw/node";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
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
beforeEach(() => render(<App />));
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

it("should render the main text, empty input and button", async () => {
  // todo: write some assertions

  expect(screen.getByText("Weather Search:")).toBeInTheDocument();
  expect(screen.getByRole("button")).toBeInTheDocument();

  const inputElement = screen.getByRole("textbox") as HTMLInputElement;
  expect(inputElement.value).toBe("");
});

it("should be able to type in input", async () => {
  const inputElement = screen.getByRole("textbox") as HTMLInputElement;

  userEvent.type(inputElement, "Dallas");
  expect(inputElement.value).toBe("");
});
