import React, { useState, useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { auth } from "./firebase";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import TaylorAppPhoto from "./TaylorAppPhoto.JPG";
import ForestPic from "./nature-forest-trees-fog.jpeg";
import TallBg from "./tallbackground.jpeg";

export default function Home(props) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage: { TallBg },
        //* backgroundImage: ForestPic,
        //* backgroundImage: `url("src/nature-forest-trees-fog.jpeg")` ,
        //* backgroundImage: "url(" + "https://images.pexels.com/photos/34153/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350" + ")",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat"
      }}
    >
      <Typography variant="h4" style={{ marginTop: 40, marginBottom: 20 }}>
        BYU Personal Tutoring Services
      </Typography>
      <Paper
        style={{
          padding: 30,
          width: 800,
          marginTop: 20,
          marginLeft: 30,
          marginRight: 30
        }}
      >
        <div>
          <Typography variant="h6">
            One-on-one tutoring services provided for BYU students for:
          </Typography>
          <Typography style={{ marginTop: 10 }}>
            Economics 110, 380, 382
          </Typography>
          <Typography>Principles of Statistics 121</Typography>
          <Typography>Finance 201</Typography>
          <Typography>Math 110, 112 (Calculus 1)</Typography>
          <Typography>Finite Mathematics 118</Typography>
        </div>
      </Paper>

      <Paper
        style={{
          padding: 30,
          width: 800,
          marginTop: 30,
          marginLeft: 30,
          marginRight: 30
        }}
      >
        <Typography variant="h6">Meet the Tutor: Taylor</Typography>
        <div>
          <Typography style={{ marginTop: 10 }}>
            BYU: Economics Major, Statistics and Strategic Management Minor
          </Typography>
          <Typography>
            Work Experience: Current Sales Operations & Strategy Intern at
            Qualtrics, Past Intern at Booz Allen Hamilton, Special Projects
            Intern at Utah Department of Transportation, & Acquisitions Intern
            at Peak Capital Partners (Real Estate Private Equity)
          </Typography>
        </div>
      </Paper>

      <Card
        style={{
          maxWidth: 345,
          marginRight: 10,
          marginTop: 10
        }}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            image={TaylorAppPhoto}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              Taylor at Angel's Landing (Zion National Park)
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

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
        <div>
          <Typography style={{ marginTop: 10 }}>
            5/5 stars rating from all 5 past students
          </Typography>
          <Typography>
            2 students had over 10 tutoring sessions each during one semester
          </Typography>
          <Typography style={{ marginTop: 15 }}>
            Quotes from past students:
          </Typography>
          <Typography style={{ marginTop: 15 }}>
            "Meeting had a huge difference on my learning and understanding.
            Most days leaving class, I was super confused and didn't know what
            was going on. But the tutoring sessions cleared up so many
            concepts."
          </Typography>
          <Typography style={{ marginTop: 15 }}>
            "Yes! he made sure i was understanding as we went along and had me
            explain the concepts back. he made sure the examples were applicable
            to me."
          </Typography>
          <Typography style={{ marginTop: 15 }}>
            "Taylor is the best tutor ever. Seriously a life-saver. He's super
            clear in his explanations and tries to make sure you understand the
            concepts instead of just making sure he tells you about the
            concepts. Big difference. He's a little on the pricey side, but
            worth every penny. 10/10, would recommend."
          </Typography>
        </div>
      </Paper>

      <Paper
        style={{
          padding: 30,
          width: 800,
          marginTop: 30,
          marginLeft: 30,
          marginRight: 30
        }}
      >
        <Typography variant="h6">Price</Typography>
        <Typography style={{ marginTop: 10 }}>$30 per hour</Typography>
      </Paper>

      {!props.user && (
        <div
          style={{
            padding: 30,
            width: 800,
            marginTop: 30,
            marginLeft: 30,
            marginRight: 30,
            marginBottom: 100
          }}
        >
          <Typography
            style={{ display: "flex", justifyContent: "center" }}
            variant="h6"
          >
            Request a meeting or if you already have an acocunt, sign in!
          </Typography>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "15px",
              alignItems: "center",
              marginBottom: 50
            }}
          >
            <Button
              component={Link}
              to="/signup"
              color="primary"
              variant="contained"
              style={{ marginRight: 20 }}
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
        </div>
      )}
    </div>
  );
}
