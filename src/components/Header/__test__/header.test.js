import { render, screen } from "@testing-library/react";
import Header from "../Header";

//GETBY
describe("Header tests", () => {
  test("should render the same text passed into title prop as the header", async () => {
    render(<Header title="My Header" />);
    const headerElement = screen.getByText(/My Header/i); // regular expression
    expect(headerElement).toBeInTheDocument();
  });
});

// // test("renders learn react link", async () => {
// //   //passes when thre is one heading
// //   render(<Header />);
// //   const headerElement = screen.getByRole("heading");
// //   expect(headerElement).toBeInTheDocument();
// // });

// test("renders by heading role", async () => {
//   render(<Header title="My Header" />);
//   const headerElement = screen.getByRole("heading", { name: "My Header" });
//   expect(headerElement).toBeInTheDocument();
// });

// test("renders by heading title", async () => {
//   render(<Header />);
//   const headerElement = screen.getByTitle("subHeader");
//   expect(headerElement).toBeInTheDocument();
// });

// test("renders by heading title", async () => {
//   render(<Header />);
//   const headerElement = screen.getByTestId("header-1");
//   expect(headerElement).toBeInTheDocument();
// });

// //FIND BY

// test("should render the same text passed into title prop as the header", async () => {
//   render(<Header title="My Header" />);
//   // fails because it has to be asyncronys
//   // const headerElement = screen.findByText(/My Header/i);
//   const headerElement = await screen.findByText(/My Header/i);
//   expect(headerElement).toBeInTheDocument();
// });

// //QueryBy

// test("should render the same text passed into title prop as the header", async () => {
//   render(<Header title="My Header" />);
//   const headerElement = screen.queryByText(/dogs/i);
//   expect(headerElement).not.toBeInTheDocument();
// });

// //GetAllBy

// test("should render the same text passed into title prop as the header", async () => {
//   render(<Header title="My Header" />);
//   const headerElement = screen.getAllByRole("heading");
//   expect(headerElement.length).toBe(2);
// });
