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

export default function Home(props) {
  return (
    <div>
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
          <Typography variant="h4" style={{ marginTop: 20, marginBottom: 20 }}>
            BYU Personal Tutoring Services
          </Typography>
          <div>
            <Typography>
              One-on-one tutoring services provided for BYU students for:
            </Typography>
            <Typography>Economics 110, 380, 382</Typography>
            <Typography>Principles of Statistics 121</Typography>
            <Typography>Finance 201</Typography>
            <Typography>Math 110, 112 (Calculus 1)</Typography>
            <Typography>Finite Mathematics 118</Typography>
          </div>
        </Paper>
      </div>
      <div>
        <Paper
          style={{
            padding: 30,
            width: 800,
            marginTop: 30,
            marginLeft: 30,
            marginRight: 30
          }}
        >
          <Typography variant="h6">Meet Taylor</Typography>
          <Typography>
            Information about Taylor: Economics and Statistics Double Major,
            Strategic Management Minor. Past intern at Booz Allen Hamilton,
            Current Sales Operations & Strategy Intern at Qualtrics, Past
            Special Projects Intern at Utah Department of Transportation, Past
            Acquisitions Intern at Peak Capital Partners (Real Estate Private
            Equity).
          </Typography>
        </Paper>
        <div />
        <Card
          style={{
            padding: 30,
            width: 800,
            marginTop: 30,
            marginLeft: 30,
            marginRight: 30
          }}
        >
          <CardActionArea>
            <CardMedia image="taylorpic" />
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                Taylor Jensen
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
      <div>
        <Paper
          style={{
            padding: 30,
            width: 800,
            marginTop: 30,
            marginLeft: 30,
            marginRight: 30
          }}
        >
          <Typography variant="h6">Past Reviews</Typography>
          <Typography>
            5/5 stars rating from all 5 past students. Would recommend from
            each. 2/5 had over 10 tutoring sessions each over span of a couple
            months.
          </Typography>
        </Paper>
      </div>
      <div>
        <Paper
          style={{
            padding: 30,
            width: 800,
            marginTop: 30,
            marginLeft: 30,
            marginRight: 30
          }}
        >
          <Typography variant="h6">Rate/hour</Typography>
          <Typography>$30 per hour</Typography>
        </Paper>
      </div>
      {!props.user && (
        <div>
          <Paper
            style={{
              padding: 30,
              width: 800,
              marginTop: 30,
              marginLeft: 30,
              marginRight: 30,
              marginBottom: 100
            }}
          >
            <Typography variant="h6">Get in Touch/ Sign In</Typography>
            <div
              style={{
                display: "flex",
                justifyContent: "space-evenly",
                marginTop: "15px",
                alignItems: "center"
              }}
            >
              <Button
                component={Link}
                to="/signup"
                color="primary"
                variant="contained"
              >
                Get in Touch
              </Button>
              <Button
                component={Link}
                to="/signin"
                color="primary"
                variant="contained"
              >
                Sign In
              </Button>
            </div>
          </Paper>
        </div>
      )}
    </div>
  );
}
