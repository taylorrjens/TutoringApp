import React, { useState, useEffect } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { auth, db } from "./firebase";

export default function Admin(props) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    if (!props.isAdmin) {
      props.history.push("/app");
    }
  }, [props.isAdmin]);

  useEffect(() => {
    const users = [];
    db.collection("users")
      .get()
      .then(qs => {
        qs.forEach(doc => {
          users.push(doc.data());
        });
        setUsers(users);
      });
  }, []);

  return (
    <div>
      <Paper
        style={{
          padding: 30,
          width: 800,
          marginTop: 20,
          marginLeft: 30,
          marginRight: 30
        }}
      >
        <Typography variant="h6" style={{ marginTop: 20, marginBottom: 20 }}>
          List of Users
        </Typography>
        {users.map(user => {
          console.log(user);
          return (
            <div>
              Name: {user.name} | Class: {user.classchoice} | Email:{" "}
              {user.email} | Phone Number: {user.phonenumber}
            </div>
          );
        })}
      </Paper>
      <Button
        onClick={() => {}}
        color="secondary"
        variant="contained"
        style={{
          marginTop: 20,
          marginLeft: 30,
          marginRight: 30
        }}
      >
        Send Bill
      </Button>
    </div>
  );
}
