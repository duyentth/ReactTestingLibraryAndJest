import { screen, render, within } from "@testing-library/react";
import UserList from "./UserList";

test("one user per row", () => {
    //render UserList component
    const users = [
        { name: "duyen", email: "duyen@gmail.com" },
        { name: "kelly", email: "Kelly@gmail.com" },
    ];
    render(<UserList users={users} />);

    //Find all row in the table
    //screen.logTestingPlaygroundURL();
    //https://testing-playground.com/#markup=DwEwlgbgfMAuCGAjANgUxrAFq+IMCcNMoA5eAW1WAHosioBRc+MZGu9w97XDRAexABPAhjwgArkNQA7dnjjipsgAIBzZqwB0AY37l5MWl1gm8Aa1TJkQw4qgBpKzfWbku-XeNHYA4T6Q0I3BoIA

    const rows = within(screen.getByTestId("users")).getAllByRole("row");

    //Assertion: correct number of rows in the table
    expect(rows).toHaveLength(2);
});

test("show correctly name and email of each user", () => {
    //render UserList component with the given users list
    const users = [
        { name: "duyen", email: "duyen@gmail.com" },
        { name: "kelly", email: "Kelly@gmail.com" },
    ];
    render(<UserList users = {users}/>);    

    //for each user, try to find the element by role with the same name and email in each row
    for (let user of users) {
        const name = screen.getByRole("cell", {name: user.name})
        const email = screen.getByRole("cell", {name: user.email});
        expect(name).toBeInTheDocument();
        expect(email).toBeInTheDocument();
    }
});
