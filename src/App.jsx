import React, { useState } from "react";
import AddUSer from "./Components/Users/AddUser";
import AddUserList from "./Components/Users/AddUserList";
const App = () => {
  const [enteredUser, setEnteredUser] = useState([]);

  const addUserHandler = (userName, userAge) => {
    setEnteredUser((prevEnteredUser) => {
      return [
        ...prevEnteredUser,
        { name: userName, age: userAge, id: Math.random().toString() },
      ];
    });
  };

  return (
    <div>
      <AddUSer onAddUser={addUserHandler} />
      <AddUserList users={enteredUser} />
    </div>
  );
};

export default App;
