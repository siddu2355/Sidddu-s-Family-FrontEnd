import React from 'react';
import {AiOutlineHeart } from "react-icons/ai"

class Like extends Component {

    state={x:true}
    render() { 
        return (
            <div>
                <p>
                <AiOutlineHeart size={300} color="red" style={{}}/>
                </p>
            </div>
        );
    }
}
 
export default Like;