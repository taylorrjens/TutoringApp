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
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <Paper
        style={{
          padding: 30,
          width: 400,
          marginTop: 20,
          marginLeft: 30,
          marginRight: 30
        }}
      >
        <Typography variant="h6" style={{ marginTop: 1, marginBottom: 20 }}>
          Profile Details
        </Typography>
        <Typography />
        <Typography>Name: {user_data.name}</Typography>
        <Typography>Phone Number: {user_data.phonenumber}</Typography>
        <Typography>Class Choice: {user_data.classchoice}</Typography>
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
        <Typography variant="h6" style={{}}>
          Calendar & Scheduling
        </Typography>
        <Typography style={{ marginTop: 15 }}>
          Instructions: Every Sunday at 7 pm, Taylor will have updated his
          Google calendar to show the times he is available to meet. You have
          been given editing priviliges for this calendar so please add an event
          titled with your name on the times you would like to meet. Times for
          meetings will be initially allocated on a first-come-first-serve
          basis, but if rearrangement is needed, feel free to reach out directly
          to Taylor.
        </Typography>
        <Typography style={{ marginTop: 15 }}>
          Link to Taylor's availability for the upcoming week:{" "}
          <Link to="//google.com"> Calendar</Link>
        </Typography>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Button
            style={{ marginTop: 15 }}
            color="secondary"
            variant="contained"
            href="/app/calendar"
          >
            Calendar
          </Button>
        </div>
      </Paper>
    </div>
  );
}
