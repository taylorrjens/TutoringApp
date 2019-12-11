import React, { useState, useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { auth, db, functions } from "./firebase";

export default function Admin(props) {
  const [users, setUsers] = useState([]);

  const sendEmail = (name, Amount, url, to) => {
    const sendMessage = functions.httpsCallable("sendemail");
    sendMessage({
      to: to,
      name: name,
      Amount: Amount,
      url: url
    }).then();
  };

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
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div>
                <Typography>
                  Name: {user.name} | Class: {user.classchoice} | Email:{" "}
                  {user.email} | Phone Number: {user.phonenumber}
                </Typography>
              </div>
              <Button
                onClick={() => {}}
                color="secondary"
                variant="contained"
                style={{
                  marginTop: 0,
                  marginBottom: 20,
                  marginLeft: 0,
                  marginRight: 30
                }}
                onClick={() => {
                  sendEmail(
                    user.email,
                    user.name,
                    50,
                    "venmo://paycharge?txn=pay&recipients=Taylor-Jensen-36&amount=50&note=Tutoring"
                  );
                }}
              >
                Send Bill
              </Button>
            </div>
          );
        })}
      </Paper>
    </div>
  );
}
