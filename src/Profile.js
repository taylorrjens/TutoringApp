import React, { useState, useEffect } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { auth, db } from "./firebase";

export default function Profile(props) {
  const [user_data, setUserData] = useState({});

  useEffect(() => {
    if (props.user) {
      console.log(props.user);
      db.collection("users")
        .doc(props.user.uid)
        .get()
        .then(doc => {
          console.log(doc.data());
          setUserData(doc.data());
        });
    }
  }, [props.user]);

  return (
    <div>
      <Paper
        style={{
          padding: 30,
          width: 400,
          marginTop: 20,
          marginLeft: 30,
          marginRight: 30
        }}
      >
        <Typography>
          Link to Calendar <Link to="//google.com">Calendar</Link>
        </Typography>
      </Paper>
      <Paper
        style={{
          padding: 30,
          width: 400,
          marginTop: 20,
          marginLeft: 30,
          marginRight: 30
        }}
      >
        <Typography variant="h6" style={{ marginTop: 20, marginBottom: 20 }}>
          Profile Details
        </Typography>
        <Typography />
        <Typography>{user_data.name}</Typography>
        <Typography>{user_data.phonenumber}</Typography>
        <Typography>{user_data.classchoice}</Typography>
      </Paper>
    </div>
  );
}
