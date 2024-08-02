import { render, screen } from "@testing-library/react";
import Login from "../Login";

describe("LoginTest", () => {
  test("ログインコンポーネントの中にボタンが一つだけ存在するかをチェック", async () => {
    render(<Login />);
    const buttonList = await screen.findAllByRole("button");
    expect(buttonList).toHaveLength(1);
  });
});
