import { useState } from "react";

const UserForm = ({ onAddUser }) => {
    const [user, setUser] = useState({ name: "", email: "" });
    const onHandleSubmit = (e) => {
        e.preventDefault();
        onAddUser(user);
        setUser({ name: "", email: "" });
    };
    return (
        <form onSubmit={onHandleSubmit}>
            <div>
                <label htmlFor="name">Name</label>
                <input
                    id="name"
                    value={user.name}
                    onChange={(e) => setUser({ ...user, name: e.target.value })}
                />
            </div>
            <div>
                <label htmlFor="email">Enter Email</label>
                <input
                    id="email"
                    value={user.email}
                    onChange={(e) =>
                        setUser({ ...user, email: e.target.value })
                    }
                />
            </div>
            <div>
                <button>Add User</button>
            </div>
        </form>
    );
};

export default UserForm;
