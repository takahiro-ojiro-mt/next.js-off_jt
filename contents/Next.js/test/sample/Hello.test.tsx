// tests/Hello.test.tsx
import { render, screen } from "@testing-library/react";

function Hello() {
  return <h1>Hello World</h1>;
}

test("Helloコンポーネントが正しく表示される", () => {
  render(<Hello />);
  expect(screen.getByText("Hello World")).toBeInTheDocument();
});