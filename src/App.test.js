import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import App from "./App";

test("added new user will be shown in the table UserList", async () => {
    render(<App />);

    const nameInput = screen.getByRole("textbox", { name: /name/i });
    const emailInput = screen.getByRole("textbox", { name: /email/i });
    const button = screen.getByRole("button");

    await user.click(nameInput);
    await user.keyboard("duyen");

    await user.click(emailInput);
    await user.keyboard("duyen@gmail.com");

    await user.click(button);

    //screen.debug();

    const name = screen.getByRole("cell", { name: "duyen" });
    const email = screen.getByRole("cell", { name: "duyen@gmail.com" });

    expect(name).toBeInTheDocument();
    expect(email).toBeInTheDocument();
});
