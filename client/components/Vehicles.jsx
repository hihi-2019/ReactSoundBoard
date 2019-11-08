import React, { Component } from "react";
import Sky from "react-sky";

// Images
import car from "../../public/images/006-racing.png";
import ufo from "../../public/images/007-ufo.png";
import plane from "../../public/images/008-air-freight.png";
import bike from "../../public/images/009-bicycle.png";
import boat from "../../public/images/010-holiday.png";

//Sounds
import carSound from "../../public/sounds/car.wav";
import ufoSound from "../../public/sounds/ufo.wav";
import planeSound from "../../public/sounds/plane.wav";
import bikeSound from "../../public/sounds/bike.wav";
import boatSound from "../../public/sounds/boat.wav";

// Car
const carFile = "wMhozWWhLIfLAAAAABJRU5ErkJggg==";
const carAudio = new Audio(carSound);

// ufo
const ufoFile = "fxHCiBWLBXP4PRFdBYy64iVEAAAAASUVORK5CYII=";
const ufoAudio = new Audio(ufoSound);

//plane
const planeFile = "L459mA4jkkiYj0VjYuLSf4PAPf2cBwxxIgAAAAASUVORK5CYII=";
const planeAudio = new Audio(planeSound);

//bike
const bikeFile = "RaDQajUaj0Wg0Go1GozkH+f/Zfr5DYcEuSwAAAABJRU5ErkJggg==";
const bikeAudio = new Audio(bikeSound);

//boat
const boatFile = "iIiIiJ3/D9I7/Cb3IMTFAAAAABJRU5ErkJggg==";
const boatAudio = new Audio(boatSound);

class Vehicles extends Component {
    handleClick = event => {
        console.log(event.target);

        if (event.target.srcset.includes(carFile)) {
            console.log("car");
            carAudio.play();
        } else if (event.target.srcset.includes(ufoFile)) {
            console.log("ufo");
            ufoAudio.play();
        } else if (event.target.srcset.includes(planeFile)) {
            console.log("plane");
            planeAudio.play();
        } else if (event.target.srcset.includes(bikeFile)) {
            console.log("bike");
            bikeAudio.play();
        } else if (event.target.srcset.includes(boatFile)) {
            console.log("boat");
            boatAudio.play();
        }
    };

    render() {
        return (
            <div onClick={this.handleClick}>
                
                <Sky
                    images={{
                        /* FORMAT AS FOLLOWS */
                        0: car,
                        1: ufo,
                        2: plane,
                        3: boat,
                        4: bike
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

export default Vehicles;
