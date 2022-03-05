import {
  render,
  waitFor,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Home from "./";

describe("Home Page Component", () => {
  it("should render a pokemon", async () => {
    const { getByText, getByPlaceholderText, getByTestId } = render(<Home />);

    const inputName = getByPlaceholderText("Search pokemon name or ID");
    const buttonSearch = getByTestId("btnSearch");

    userEvent.type(inputName, "Pikachu");
    userEvent.click(buttonSearch);

    await waitFor(() => {
      expect(getByText("#25")).toBeInTheDocument(); //id
      expect(getByText("pikachu")).toBeInTheDocument(); //name
    });
  });

  it("should render the previous pokemon", async () => {
    const { getByText, getByPlaceholderText, getByTestId } = render(<Home />);

    const inputName = getByPlaceholderText("Search pokemon name or ID");
    const buttonSearch = getByTestId("btnSearch");

    userEvent.type(inputName, "25");
    userEvent.click(buttonSearch);

    await waitFor(() => {
      expect(getByText("#25")).toBeInTheDocument(); //id
    });

    const buttonPrev = getByTestId("previousPokemon");
    userEvent.click(buttonPrev);

    await waitFor(() => {
      expect(getByText("#24")).toBeInTheDocument(); //id
    });
  });

  it("should render the next pokemon", async () => {
    const { getByText, getByPlaceholderText, getByTestId } = render(<Home />);

    const inputName = getByPlaceholderText("Search pokemon name or ID");
    const buttonSearch = getByTestId("btnSearch");

    userEvent.type(inputName, "25");
    userEvent.click(buttonSearch);

    await waitFor(() => {
      expect(getByText("#25")).toBeInTheDocument(); //id
    });

    const buttonNext = getByTestId("nextPokemon");
    userEvent.click(buttonNext);

    await waitFor(() => {
      expect(getByText("#26")).toBeInTheDocument(); //id
    });
  });
});
