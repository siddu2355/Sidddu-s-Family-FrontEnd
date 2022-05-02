import React from "react";
import Joi from "joi-browser";
import Form from "./form";
import {Link} from "react-router-dom"
import {FiLogIn} from "react-icons/fi"
import {loginUser} from "../services/loginService.js";

class LoginForm extends Form {
  state = {
    data: { email: "", password: "" },
    errors: {}
  };

  schema = {
    email: Joi.string()
      .required()
      .label("Email"),
    password: Joi.string()
      .required()
      .min(6)
      .label("Password")
  };

  doSubmit = async () => {
    const { data } = this.state;
    try {
      const {data:jwt} = await loginUser(data.email, data.password);
      localStorage.setItem("token", jwt);
      this.props.history.replace("/home")
      window.location="/home"
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const errors = { ...this.state.errors };
        errors.email = ex.response.data;
        this.setState({ errors });
      }
    }
  };

  render() {
    return (
      <div className="container" >
        <h1 style={{textAlign:"center",color:"#7689de", marginTop:165}} >Login<FiLogIn color="dodgerblue"/></h1>
        <form onSubmit={this.handleSubmit} style={{marginTop:17}}>
          {this.renderInput("email", "Email")}
          {this.renderInput("password", "Password", "Password")}
          {this.renderButton("Login")}
        </form>
        <p style={{position:"relative",marginLeft:525, marginTop:10}}>Don't you have an account? <Link to="/register" style={{textDecoration:"none"}}>Sign Up</Link></p>
      </div>
    );
  }
}

export default LoginForm;