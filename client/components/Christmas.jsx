import React, { Component } from "react";
import Sky from "react-sky";

// Images
import santa from "../../public/images/011-santa-claus.png";
import bells from "../../public/images/012-bells.png";
import elf from "../../public/images/013-elf.png";
import angel from "../../public/images/014-angel.png";
import reindeer from "../../public/images/015-reindeer.png";

//Sounds
import santaSound from "../../public/sounds/santa.wav";
import bellsSound from "../../public/sounds/bell.wav";
import elfSound from "../../public/sounds/elf.wav";
import angelSound from "../../public/sounds/angel.mp3";
import reindeerSound from "../../public/sounds/reindeer.wav";

// santa
const santaFile = "AfStVFyIjGgAAAABJRU5ErkJggg==";
const santaAudio = new Audio(santaSound);

// bells
const bellsFile = "wcbkzAOp5vDrwAAAABJRU5ErkJggg==";
const bellsAudio = new Audio(bellsSound);

//elf
const elfFile = "h0KogeO2OGkAAAAASUVORK5CYII=";
const elfAudio = new Audio(elfSound);

//angel
const angelFile = "Fr6X41bG2JpnJjjAAAAAElFTkSuQmCC";
const angelAudio = new Audio(angelSound);

//reindeer
const reindeerFile = "H/5m9fcCp4PWgAAAAASUVORK5CYII=";
const reindeerAudio = new Audio(reindeerSound);

class Christmas extends Component {
    handleClick = event => {
        console.log(event.target);

        if (event.target.srcset.includes(santaFile)) {
            console.log("santa");
            santaAudio.play();
        } else if (event.target.srcset.includes(bellsFile)) {
            console.log("bells");
            bellsAudio.play();
        } else if (event.target.srcset.includes(elfFile)) {
            console.log("elf");
            elfAudio.play();
        } else if (event.target.srcset.includes(angelFile)) {
            console.log("angel");
            angelAudio.play();
        } else if (event.target.srcset.includes(reindeerFile)) {
            console.log("reindeer");
            reindeerAudio.play();
        }
    };

    render() {
        return (
            <div onClick={this.handleClick}>
                /* Sky adapts size to its container */
                <Sky
                    images={{
                        /* FORMAT AS FOLLOWS */
                        0: santa,
                        1: bells,
                        2: elf,
                        3: reindeer,
                        4: angel
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

export default Christmas;
