// import { render, screen } from "@testing-library/react";
// import TodoFooter from "../TodoFooter";

// test("should render the correct of incomplete test for TodoFooter", async () => {
//   render(<TodoFooter numberOfIncompleteTasks={5} />);
//   const paragraphElement = screen.getByText(/5 tasks left/i); // regular expression
//   expect(paragraphElement).toBeInTheDocument();
// });

// This fails because we are using React Router Link outside of Router
// Since we testing this component in complete isloation it is not wrapped around Browswer Router
// So we must create a mock component
// Invariant failed: You should not use <Link> outside a <Router>

import { render, screen } from "@testing-library/react";
import TodoFooter from "../TodoFooter";
import { BrowserRouter } from "react-router-dom";

const MockTodoFooter = ({ numberOfIncompleteTasks }) => {
  return (
    <BrowserRouter>
      <TodoFooter numberOfIncompleteTasks={numberOfIncompleteTasks} />
    </BrowserRouter>
  );
};

test("should render the correct amount of incomplete tasks", () => {
  render(<MockTodoFooter numberOfIncompleteTasks={5} />);
  const paragraphElement = screen.getByText(/5 tasks left/i);
  expect(paragraphElement).toBeInTheDocument();
});
