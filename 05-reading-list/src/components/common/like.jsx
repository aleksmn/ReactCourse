// import React from 'react';

// imr
// sfc

// Stateless Function Component

const Like = (props) => {

    let classes = "fa fa-heart";
    if (!props.liked) classes += "-o";
    
    return <i onClick={props.onLikeToggle} style={{ cursor: "pointer" }} className={classes} aria-hidden="true"></i>; 

}
 
export default Like;

