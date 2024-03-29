import React, { useState, useEffect } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { Link, Route } from "react-router-dom";
import { auth, db } from "./firebase";
import Profile from "./Profile";
import Survey from "./Survey";
import Home from "./home";
import Admin from "./admin";

export function App(props) {
  const [drawer_open, setDrawerOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    if (user) {
      db.collection("users")
        .doc(user.uid)
        .get()
        .then(doc => {
          setIsAdmin(doc.data().admin);
        });
    }
  }, [user]);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(u => {
      if (u) {
        setUser(u);
      } else {
        props.history.push("/");
      }
    });

    return unsubscribe;
  }, [props.history]);

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        props.history.push("/");
      })
      .catch(error => {
        alert(error.message);
      });
  };

  if (!user) {
    return <div />;
  }

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            onClick={() => {
              setDrawerOpen(true);
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            color="inherit"
            variant="h6"
            style={{ marginLeft: 15, marginRight: 15, flexGrow: 1 }}
          >
            General Info
          </Typography>
          <Typography color="inherit" style={{ marginRight: 30 }}>
            Hi {user.email}!
          </Typography>
          <Button onClick={handleSignOut} type={"password"} color="inherit">
            Sign Out
          </Button>
        </Toolbar>
      </AppBar>
      <Drawer
        open={drawer_open}
        onClose={() => {
          setDrawerOpen(false);
        }}
      >
        <List>
          <ListItem
            button
            to="/app"
            component={Link}
            onClick={() => {
              setDrawerOpen(false);
            }}
          >
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem
            button
            to="/app/profile"
            component={Link}
            onClick={() => {
              setDrawerOpen(false);
            }}
          >
            <ListItemText primary="Your Profile" />
          </ListItem>
          {isAdmin && (
            <ListItem
              button
              to="/app/admin"
              component={Link}
              onClick={() => {
                setDrawerOpen(false);
              }}
            >
              <ListItemText primary="Admin" />
            </ListItem>
          )}
        </List>
      </Drawer>
      <Route
        exact
        path="/app/"
        render={routeProps => {
          return (
            <Home
              user={user}
              match={routeProps.match}
              location={routeProps.location}
              history={routeProps.history}
            />
          );
        }}
      />
      <Route
        exact
        path="/app/survey/"
        render={routeProps => {
          return (
            <Survey
              user={user}
              match={routeProps.match}
              location={routeProps.location}
              history={routeProps.history}
            />
          );
        }}
      />
      <Route
        path="/app/profile/"
        render={routeProps => {
          return (
            <Profile
              user={user}
              match={routeProps.match}
              location={routeProps.location}
              history={routeProps.history}
            />
          );
        }}
      />
      <Route
        path="/app/admin/"
        render={routeProps => {
          return (
            <Admin
              user={user}
              match={routeProps.match}
              location={routeProps.location}
              history={routeProps.history}
              isAdmin={isAdmin}
            />
          );
        }}
      />
      <Route
        path="/app/calendar"
        component={() => {
          window.location.href =
            "https://calendar.google.com/calendar/b/1/r?tab=mc";
          return null;
        }}
      />
    </div>
  );
}
