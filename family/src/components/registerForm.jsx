import React from "react";
import Joi from "joi-browser";
import Form from "./form";
import * as userService from "../services/userService";

class RegisterForm extends Form {
  state = {
    data: { email: "", password: "", name: "" },
    errors: {}
  };

  schema = {
    email: Joi.string()
      .required()
      .email()
      .label("Email"),
    password: Joi.string()
      .required()
      .min(6)
      .label("Password"),
    name: Joi.string()
      .required()
      .min(5)
      .label("Name")
  };

  doSubmit = async () => {
    try {
      const response = await userService.registerUser(this.state.data);
      localStorage.setItem("token", response.headers["x-auth-token"])
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
      <div>
        <h1 style={{textAlign:"center",color:"#7689de", marginTop:165}}>Register</h1>
        <form onSubmit={this.handleSubmit} style={{marginTop:17, marginLeft:110}}>
          {this.renderInput("name", "Name","text", "Your Sweet Name")}
          {this.renderInput("email", "Email")}
          {this.renderInput("password", "Password", "password",)}
          {this.renderButton("Register")}
        </form>
      </div>
    );
  }
}

export default RegisterForm;