import { render, screen, fireEvent } from "@testing-library/react";
import AddInput from "../AddInput";

const mockedSetTodo = jest.fn();

describe("AddInput tests", () => {
  test("should render input element", async () => {
    render(<AddInput todos={[]} setTodos={mockedSetTodo} />);
    const inputElement = screen.getByPlaceholderText("Add a new task here...");
    expect(inputElement).toBeInTheDocument();
  });

  //   test("should render input change when you type something", async () => {
  //     render(<AddInput todos={[]} setTodos={mockedSetTodo} />);
  //     const inputElement = screen.getByPlaceholderText("Add a new task here...");
  //     expect(inputElement).toBeInTheDocument();
  //     fireEvent.change(inputElement, {
  //       target: { value: "Go Grocery Shooping" },
  //     });
  //     expect(inputElement.value).toBe("Go Grocery Shooping");
  //   });

  //   test("should have empty input when add button is clicked", async () => {
  //     render(<AddInput todos={[]} setTodos={mockedSetTodo} />);
  //     const buttonElement = screen.getByRole("button", { name: /Add/i });
  //     const inputElement = screen.getByPlaceholderText("Add a new task here...");
  //     expect(inputElement).toBeInTheDocument();
  //     fireEvent.change(inputElement, {
  //       target: { value: "Go Grocery Shooping" },
  //     });
  //     fireEvent.click(buttonElement);
  //     expect(inputElement.value).toBe("");
  //   });
});
