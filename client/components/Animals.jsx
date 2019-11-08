import React, { Component } from "react";
import Sky from "react-sky";

// Images
import cow from "../../public/images/001-cow.png";
import dog from "../../public/images/002-dog.png";
import cat from "../../public/images/003-cat.png";
import sheep from "../../public/images/004-sheep.png";
import duck from "../../public/images/005-duck.png";

//Sounds
import cowSound from "../../public/sounds/cow.wav";
import dogSound from "../../public/sounds/dog.mp3";
import catSound from "../../public/sounds/cat.wav";
import duckSound from "../../public/sounds/duck.wav";
import sheepSound from "../../public/sounds/sheep.wav"

// Cow
const cowFile = "8P8BfWjJzJK9jsYAAAAASUVORK5CYII=";
const cowAudio = new Audio(cowSound);

// Dog
const dogFile = "HyidtB1VHyhsAAAAAElFTkSuQmCC";
const dogAudio = new Audio(dogSound);

//Cat
const catFile = "j02bwAAAABJRU5ErkJggg==";
const catAudio = new Audio(catSound);

//Duck
const duckFile = "grCSa1AAAAAElFTkSuQmCC";
const duckAudio = new Audio(duckSound);

//Sheep
const sheepFile = "wEoQcKbyfVxwwAAAABJRU5ErkJggg==";
const sheepAudio = new Audio(sheepSound);

class Animals extends Component {
    handleClick = event => {
        console.log(event.target);

        if (event.target.srcset.includes(cowFile)) {
            console.log("cow");
            cowAudio.play();
        } else if (event.target.srcset.includes(dogFile)) {
            console.log("dog");
            dogAudio.play();
        } else if (event.target.srcset.includes(catFile)) {
            console.log("CAT");
            catAudio.play();
        } else if (event.target.srcset.includes(duckFile)) {
            console.log("duck");
            duckAudio.play();
        } else if (event.target.srcset.includes(sheepFile)) {
            console.log("sheep");
            sheepAudio.play();
        }
    };

    render() {
        return (
            <div onClick={this.handleClick}>
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
