import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import jwtDecode from "jwt-decode";
import Family from "./components/family";
import MemberDetails from "./components/memberDetails";
import Images from "./components/images";
import NotFound from "./components/notFound";
import LoginForm from "./components/loginForm";
import NavBar from "./components/navBar";
import RegisterForm from "./components/registerForm";
import Main from "./components/main";
import LogOut from "./components/logout";
import Home from "./components/home";
import Profile from "./components/profile";
class App extends Component {
  state = {};
  componentDidMount() {
    try {
      const jwt = localStorage.getItem("token");
      const user = jwtDecode(jwt);
      this.setState({ user });
    } catch (ex) {}
  }
  render() {
    const { user } = this.state;
    return (
      <div>
        <NavBar user={user} />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/home" exact component={Main} />
          <Route path="/family" exact component={Family} />
          <Route path="/profile" exact component={Profile} />
          <Route path="/images" exact component={Images} />
          <Route path="/not-found" exact component={NotFound} />
          <Route path="/family/:id" exact component={MemberDetails} />
          <Route path="/login" exact component={LoginForm} />
          <Route path="/register" exact component={RegisterForm} />
          <Route path="/logout" exact component={LogOut} />
          <Redirect to="not-found" />
        </Switch>
      </div>
    );
  }
}

export default App;
