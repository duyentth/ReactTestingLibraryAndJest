import { screen, render } from "@testing-library/react";
import user from "@testing-library/user-event";
import UserForm from "./UserForm";

test("it shows two inputs and one button", () => {
    //render the component
    render(<UserForm />);

    //manipulate the component or find elements in it
    const inputs = screen.getAllByRole("textbox");
    const button = screen.getByRole("button");

    //assertion - make sure the component is doing what we expect it to do
    expect(inputs).toHaveLength(2);
    expect(button).toBeInTheDocument();
});

test("it calls onAddUser when the form is submitted", async () => {
    const mock = jest.fn();

    //try to render component UserForm
    render(<UserForm onAddUser={mock} />);

    //Find the two inputs
    //const [nameInput, emailInput] = screen.getAllByRole("textbox");
    const nameInput = screen.getByRole("textbox", { name: /name/i });
    const emailInput = screen.getByLabelText(/email/i);

    //Simulate typing in a name
    await user.click(nameInput);
    await user.keyboard("duyen");

    //Simulate typing in a email
    await user.click(emailInput);
    await user.keyboard("duyen@gmail.com");

    //Find the button
    const button = screen.getByRole("button");

    //Simulate clicking the button
    await user.click(button);

    //Assertion to make sure 'onAddUser' get call with email and name
    expect(mock).toHaveBeenCalled();
    expect(mock).toHaveBeenCalledWith({
        name: "duyen",
        email: "duyen@gmail.com",
    });
});

test("name and email inputs are empty after form submitting", async () => {
    render(<UserForm onAddUser={() => {}}/>);
    const nameInput = screen.getByRole("textbox", {name: /name/i});
    const emailInput = screen.getByRole("textbox", {name: /email/i});
    const button = screen.getByRole("button");

    await user.click(nameInput);
    await user.keyboard("duyen");
    
    await user.click(emailInput);
    await user.keyboard("duyen@gmail.com");

    await user.click(button);

    expect(nameInput).toHaveValue("");
    expect(emailInput).toHaveValue("");



});
