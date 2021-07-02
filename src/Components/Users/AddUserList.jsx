import React from "react";
import Card from "../UI/Card";
import classes from "./AddUserList.module.css";

const AddUserList = (props) => {
  return (
    <Card className={classes.users}>
      <ul>
        {props.users.map((enteredUser) => {
          return (
            <li key={enteredUser.id}>
              {enteredUser.name} ({enteredUser.age} years old)
            </li>
          );
        })}
      </ul>
    </Card>
  );
};

export default AddUserList;
