import React, { Component } from "react";
import Sky from "react-sky";

import cow from "../../public/images/001-cow.png";
import dog from "../../public/images/002-dog.png";
import cat from "../../public/images/003-cat.png";
import sheep from "../../public/images/004-sheep.png";
import duck from "../../public/images/005-duck.png";

class Animals extends Component {
    handleClick = (event) =>{
        console.log(event.target.srcset)
    }
    
    render() {
        return (
            <div>
                /* Sky adapts size to its container */
                <Sky
                    images={{
                        /* FORMAT AS FOLLOWS */
                        0: cow,
                        1: dog,
                        2: cat,
                        3: sheep,
                        4: duck
                    }}
                    how={
                        130
                    } /* You have to pass a number so Sky will render that amount of images chosen randomly from the object you passed in the previous step */
                    time={40} /* time of the animation. Dfaults at 20s */
                    size={
                        "100px"
                    } /* size of the rendered images. Defaults at 150px */
                    background={
                        "#2F3939"
                    } /* color of background. Defaults to none */
                />
            </div>
        );
    }
}

export default Animals;
