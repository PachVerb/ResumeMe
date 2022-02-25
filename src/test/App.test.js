/*
 * @Author: wangshan
 * @Date: 2022-01-27 17:47:47
 * @LastEditors: wangshan
 * @LastEditTime: 2022-02-26 02:23:06
 * @Description:
 */
import { render, screen } from "@testing-library/react";
import App from "../App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
