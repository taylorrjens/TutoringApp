import React, { useState, useEffect } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { auth } from "./firebase";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

export default function Profile(props) {
  return (
    <div>
      <Typography>Link to Calendar</Typography>
      <Typography>Profile Details</Typography>
      <Paper
        style={{
          padding: 30,
          width: 400,
          marginTop: 100,
          marginLeft: 30,
          marginRight: 30
        }}
      >
        <Typography variant="h6" style={{ marginTop: 20, marginBottom: 20 }}>
          Profile Details
        </Typography>
        <Typography />
      </Paper>
      <Typography>Venmo Account Details</Typography>
    </div>
  );
}
