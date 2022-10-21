import React, { Component } from 'react';
import {BsPhone} from "react-icons/bs"
import { getMember } from '../services/fakeMemberService';
import abhi from "../images/abhi.jpeg"
import aishu from "../images/aishu.jpeg"
import akhila from "../images/akhilamain.jpeg"
import balaram from "../images/balaram.jpeg"
import barathi from "../images/barathi.jpeg"
import charan from "../images/charan.jpeg"
import hemi from "../images/hemi.jpeg"
import lili from "../images/lili.jpeg"
import poster from "../images/poster.jpeg"
import pinni from "../images/pinni.jpeg"
import prasuna from "../images/akhila1.jpeg"
import sati from "../images/sati.jpeg"
import nanna from "../images/nanna.jpeg"
import mani from "../images/mani.jpeg"
import siddu from "../images/siddu3.jpeg"
import sulo from "../images/sulo.jpeg"
import vamsi from "../images/vamsi.jpeg"
import vishnu from "../images/vishnu.jpeg"
import yukthi from "../images/yukthi1.jpeg"
class MemberDetails extends Component {
    state = { 
        member:{},
        images:[
            {_id:"626e442596aed580569905e8", img:abhi},
            {_id:"626e478496aed580569905f4", img:aishu},
            {_id:"626e47f496aed580569905f8", img:akhila},
            {_id:"626e52ae96aed58056990782", img:balaram},
            {_id:"626e77b1aebc285f3e074528", img:barathi},
            {_id:"626e176d988f5cb5f4a21048", img:charan},
            {_id:"626e1879988f5cb5f4a2104c", img:hemi},
            {_id:"626e25cf988f5cb5f4a21064", img:lili},
            {_id:"626e52fe96aed58056990786", img:poster},
            {_id:"626e22ef988f5cb5f4a2105c", img:pinni},
            {_id:"626e2cce988f5cb5f4a21070", img:prasuna},
            {_id:"626e1d2a988f5cb5f4a21058", img:sati},
            {_id:"626e37b2988f5cb5f4a210cd", img:nanna},
            {_id:"626e7657aebc285f3e074510", img:mani},
            {_id:"626e78a3aebc285f3e07452e", img:siddu},
            {_id:"626e29de988f5cb5f4a2106c", img:sulo},
            {_id:"626e46b696aed580569905f0", img:vamsi},
            {_id:"626e1a16988f5cb5f4a21054", img:vishnu},
            {_id:"626e18ef988f5cb5f4a21050", img:yukthi},
        ],
        image:{},
    };
     componentDidMount(){
        const member = getMember(this.props.match.params.id)
        const image = this.state.images.find(i => i._id === this.props.match.params.id)
        this.setState({member, image})
        console.log(member)
    }
    render() {
        const {member, image} = this.state;
        return (
                <div className='container' style={{
                    textAlign:"center",
                    fontSize:20,
                    fontWeight:"400",
                    fontStyle:"italic"
                }}>
                    {member.image && <img src={image.img} style={{
                        width:400,
                        height:400, 
                        borderBottomRightRadius:20, 
                        borderTopLeftRadius:20,
                        boxShadow:" 10px 5px 10px #9E9E9E"
                        }} alt="member's Image" />}
                    {member.name && <p>Name: {member.name}</p>}
                    {member.age &&<p>Age: {member.age}</p>}
                    {member.desc &&<p>{member.desc}</p>}
                    {member.phone &&<p><BsPhone size={30} color="grey"/>Contact Me: {member.phone}</p>}
                </div>
        );
    }
}
 
export default MemberDetails;
