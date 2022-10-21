import React, { Component } from "react";
import {Link} from "react-router-dom"
import Card from "./card";
import CardRight from "./cardRight";
import Footer from "./footer";
import MySelf from "./myself";
import mega from "../images/mega.jpg"
import daggubati from "../images/daggubati.jpg"
import nandamuri from "../images/nandamuri.jpg"
import {FaLongArrowAltLeft, FaLongArrowAltRight} from "react-icons/fa"
import {AiOutlineLine} from "react-icons/ai"
import "../css/App.css"

class Main extends Component {
  state = {};
  render() {
    return (
      <div>
        <div className="container" style={{textAlign:"center", padding:50}}>
        <AiOutlineLine size={30} color="#3feee6"/>
        <span style={{fontSize:18, color:"#4056a1"}}>Family is not an important thing. It's everything.</span>
        <AiOutlineLine size={30} color="#3feee6"/>
        </div>
        <Card
          name="Mega"
          img={mega}
          desc="Chiranjeevi is married to Sureka, daughter of Allu Ramalingaiah and
          sister of Telugu film producer Allu Aravind.The couple has three
          children: Srija, Sushmitha and Ram Charan, the latter is one of the
          highest paid actors of Telugu cinema. Charan is married to Upasana
          Kamineni, grand-daughter of businessman Prathap C. Reddy. Allu Aravind with his wife Nirmala has three children—Venkatesh,
           Arjun, and Sirish.[8] The latter two are actors in Telugu cinema. Allu Arjun is married to Sneha Reddy, and the couple 
           has two children, Ayaan and Arha............"
        />
        <CardRight
          name="Daggubati"
          img={daggubati}
          desc="
          The Daggubati–Akkineni family is a prominent Indian family with a history in Indian cinema, mainly Telugu cinema. Akkineni Nageswara Rao and Daggubati Ramanaidu are the prominent heads of both families.
           Many members of the family have been successful actors, film directors, and producers.Akkineni Nageswara Rao, actor and producer, known by his initials ANR.
           D. Ramanaidu, producer.........
        "
        />
        <Card
          name="Nandamuri"
          img={nandamuri}
          desc="Nandamuri Taraka Rama Rao (28 May 1923 – 18 January 1996), popularly known as NTR, was
           an Indian actor, filmmaker and politician who served as Chief Minister of Andhra Pradesh for seven years 
           over three terms. He starred in over 300 films, predominantly in Telugu cinema, and was referred to as Viswa Vikhyatha Nata Sarwa Bhouma
          (transl. World's famous emperor of acting). Rao received three National Film Awards for co-producing Thodu Dongalu (1954)
          and Seetharama Kalyanam (1960) under National Art Theater, Madras,[3] and for directing Varakatnam (1970).
          He has received the erstwhile Rashtrapati Awards for his performance in the Raju Peda (1954) and the Lava Kusa (1963)................"
        />
        <div style={{width:"100%", height:200, textAlign:"center", padding:50}}>
            <p style={{color:"#66fcf1", fontSize:18, fontFamily:"sans-serif", textTransform:"uppercase"}}>Very Important</p>
          <span style={{marginTop:30}}>
            <FaLongArrowAltRight size={30} color="#45a29e"  />
            <Link to="/family" style={{fontSize:20,fontWeight:"bold", textDecoration:"none", color:"#c5c6c7"}}>Click</Link>
            <FaLongArrowAltLeft size={30} color="#45a29e"/>
          </span>
        </div>
        <MySelf/>
        <Footer/>
      </div>
    );
  }
}

export default Main;
