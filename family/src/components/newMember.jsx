import React from 'react';
import Joi from "joi-browser"
import Form from "./form"
import {getCatogeries} from "../services/catogeryService"
import { saveMember } from '../services/memberService';

class NewMember extends Form {
    state = { 
        data:{
            name:"",
            age:1,
            phone:"",
            desc:"",
            gender:"",
            catogeryId:"",
        },
        catogeries:[],
        errors:{}
     }
     schema={
        _id:Joi.string(),
        name:Joi.string().min(5).required().label("Name"),
        age:Joi.number().min(1).required().label("Age"),
        phone:Joi.string().min(10).required().label("Phone Number"),
        desc:Joi.string().max(1024).required().label("Description"),
        gender:Joi.string().required().label("Gender"),
        catogeryId:Joi.string().label("Catogery"),
     }
     async componentDidMount() {
         const {data: catogeries} = await getCatogeries();
         this.setState({catogeries})
     }
     doSubmit = async()=>{
         await saveMember(this.state.data);
         this.props.history.push("/family")
     }
    render() { 
        return (
            <div className="container" >
        <h1 style={{textAlign:"center", marginTop:50, marginBottom:30}} >New Family Member</h1>
            <form>
             {this.renderInput("name", "Name")}
             {this.renderInput("age", "Age")}
             {this.renderInput("gender", "Gender")}
             {this.renderInput("phone", "Phone Number")}
             {this.renderInput("catogeryId", "Catogery", this.state.catogeries)}
             {this.renderInput("desc", "Description", "text", "Give a short description...")}
             {this.renderButton("Save")}
            </form>
            </div>
        );
    }
}
 
export default NewMember;