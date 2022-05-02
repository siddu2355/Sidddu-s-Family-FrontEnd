import React from 'react';
import "../css/App.css"

const Images = () => {
    const styles={
        tvn1:{
                width:500,
                height:300,
                borderRadius:15,
        },
        ajanta:{
            width:800, height:600,
            boxShadow:"10px 10px 10px 10px ThreeDShadow",
            borderRadius:10
        },
        img:{
            width:600,
            height:300,
            marginTop:50,
            marginBottom:50,
        },
        sane:{
            width:400,
            height:400,
            borderRadius:250,
        }
    }
    return ( 
        <div className='container'>
            <div style={{marginBottom:"15px"}}>
            <img src={require("../images/tvn1.jpeg")} style={styles.tvn1} alt="very nice" />
            <img style={{...styles.tvn1, marginLeft:295}} src={require("../images/tvn3.jpeg")} alt="nice" />
            <img style={{marginLeft:500,marginTop:5, width:300, height:400, borderRadius:"15px"}} src={require("../images/tvn2.jpeg")} alt="very nice" />
            </div>
            <div style={{textAlign:"center", paddingTop:20, paddingBottom:20}}>
            <img src={require("../images/ajanta.jpeg")} style={styles.ajanta} alt="very nice" />
            </div>
            <div style={{display:"flex", paddingTop:100, paddingBottom:100}}>
            <img src={require("../images/melilirecep.jpeg")} style={styles.img} alt="very nice" />
            <img src={require("../images/mugguru.jpeg")} style={styles.sane} alt="very nice" />
            <img src={require("../images/lilirecep.jpeg")} style={styles.img} alt="very nice" />
            </div>
            <div style={{textAlign:"center"}}>
            <img style={{height:550, borderBottomRightRadius:15, borderTopLeftRadius:15}} src={require("../images/vamsirecep.jpeg")} alt="very nice" />
            </div>
            <div style={{textAlign:"center", padding:40}}>
            <img style={styles.sane} src={require("../images/sane2.jpeg")} alt="very nice" />
            </div>
            <div>
            <img style={{boxShadow:"5px 5px 5px 5px ThreeDShadow", borderRadius:10}} src={require("../images/nare.jpeg")} alt="very nice" />
            </div>
            <div style={{display:"flex", paddingTop:50}}>
            <img style={{...styles.sane, marginRight:500}} src={require("../images/vamaish.jpeg")} alt="very nice" />
            <img style={styles.sane} src={require("../images/akilil.jpeg")} alt="very nice" />
            </div>
            <div style={{display:"flex", paddingTop:100, paddingBottom:100}}>
            <img src={require("../images/sirasan.jpeg")} style={styles.img} alt="very nice" />
            <img src={require("../images/meesam.jpeg")} className="translate" style={styles.img} alt="very nice" />
            <img src={require("../images/sirasan2.jpeg")} style={styles.img} alt="very nice" />
            </div>
        </div>
    );
}
 
export default Images;