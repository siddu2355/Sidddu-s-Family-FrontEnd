import React, { Component } from 'react';
import jwtDecode from "jwt-decode";
import {FaUserCircle} from "react-icons/fa"

class Profile extends Component {
    state = {
        user:{}
     } 
    componentDidMount() {
        try {
            const jwt = localStorage.getItem("token");
            const user = jwtDecode(jwt);
            this.setState({ user });
          } catch (ex) {}
      }
    render() { 
        return (
            <div style={{
                padding:100,
                paddingLeft:570
            }}>
                <div>
                    <FaUserCircle size={100} color="ThreeDShadow" style={{
                        marginBottom:30,
                        position:"relative",
                        marginLeft:130
                        }}/>
                </div>
                <div style={{
                    width:400,
                    height:40, 
                    backgroundColor:"#f2f2f2",
                    borderRadius:25,
                    textAlign:"center", 
                    padding:10,
                    paddingBottom:30,
                    marginTop:10,
                    color:"#ff652f",
                    fontSize:18,
                    fontWeight:"500",
                    fontStyle:"italic"
                    }}><p>{this.state.user.name}</p></div>
                <div style={{
                    width:400,
                    height:40, 
                    backgroundColor:"#f2f2f2",
                    borderRadius:25,
                    textAlign:"center", 
                    padding:10,
                    paddingBottom:30,
                    marginTop:10,
                    color:"#14a76c",
                    fontSize:18,
                    fontWeight:"500",
                    fontStyle:"italic"
                    }}><p>{this.state.user.email}</p></div>
            </div>
        );
    }
}
 
export default Profile;