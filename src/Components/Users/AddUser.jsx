import React, { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import classes from "./AddUser.module.css";

const AddUSer = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [errorModal, setErrorModal] = useState();

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setErrorModal({
        title: "An Error Occured!",
        message: "Please enter a valid (Username & Age)",
      });
      return;
    }

    if (+enteredAge < 1) {
      setErrorModal({
        title: "An Error Occured!",
        message: "Please enter a valid (age > 1)",
      });
      return;
    }

    props.onAddUser(enteredUsername, enteredAge);
    setEnteredUsername("");
    setEnteredAge("");
  };

  const errorHandler = () => {
    setErrorModal(null);
  };
  return (
    <div>
      {errorModal && (
        <ErrorModal
          title={errorModal.title}
          message={errorModal.message}
          onError={errorHandler}
        />
      )}
      <Card className={classes.formControls}>
        <form onSubmit={formSubmitHandler}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            placeholder="Enter Username"
            value={enteredUsername}
            onChange={usernameChangeHandler}
          />

          <label htmlFor="age">Age</label>
          <input
            type="number"
            placeholder="Enter Age"
            value={enteredAge}
            onChange={ageChangeHandler}
          />

          <Button type="submit">Add User</Button>

          <label id={classes.caption}>Mirani❤️</label>
        </form>
      </Card>
    </div>
  );
};

export default AddUSer;
