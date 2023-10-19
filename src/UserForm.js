import { useState } from "react";

const UserForm = ({ onAddUser }) => {
    const [user, setUser] = useState({ name: "", email: "" });
    const onHandleSubmit = (e) => {
        e.preventDefault();
        onAddUser(user);
    };
    return (
        <form onSubmit={onHandleSubmit}>
            <div>
                <label>Name</label>
                <input
                    value={user.name}
                    onChange={(e) => setUser({ ...user, name: e.target.value })}
                />
            </div>
            <div>
                <label>Email</label>
                <input
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
