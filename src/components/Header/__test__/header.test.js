import { render, screen } from "@testing-library/react";
import Header from "../Header";

test("should render the same text passed into title prop as the header", async () => {
  render(<Header title="My Header" />);
  const headerElement = screen.getByText(/My Header/i); // regular expression
  expect(headerElement).toBeInTheDocument();
});

// test("renders learn react link", async () => {
//   //passes when thre is one heading
//   render(<Header />);
//   const headerElement = screen.getByRole("heading");
//   expect(headerElement).toBeInTheDocument();
// });

test("renders by heading role", async () => {
  render(<Header title="My Header" />);
  const headerElement = screen.getByRole("heading", { name: "My Header" });
  expect(headerElement).toBeInTheDocument();
});

test("renders by heading title", async () => {
  render(<Header />);
  const headerElement = screen.getByTitle("subHeader");
  expect(headerElement).toBeInTheDocument();
});
