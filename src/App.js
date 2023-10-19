import logo from "./logo.svg";
import "./App.css";
import UserForm from "./UserForm";
import { useState } from "react";
import UserList from './UserList'

function App() {
    const [users, setUsers] = useState([]);
    const onAddUser = (user) => {
        setUsers([...users, user]);
    };
    return (
        <>
            <div className="App">
                <UserForm onAddUser={onAddUser} />
            </div>
            <hr />
            <div>
              <UserList users ={users}/>
            </div>
        </>
    );
}

export default App;
