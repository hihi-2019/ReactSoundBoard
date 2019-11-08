import React, { Component } from "react";
import Sky from "react-sky";

// Images
import cow from "../../public/images/001-cow.png";
import dog from "../../public/images/002-dog.png";
import cat from "../../public/images/003-cat.png";
import sheep from "../../public/images/004-sheep.png";
import duck from "../../public/images/005-duck.png";
import car from "../../public/images/006-racing.png";
import ufo from "../../public/images/007-ufo.png";
import plane from "../../public/images/008-air-freight.png";
import bike from "../../public/images/009-bicycle.png";
import boat from "../../public/images/010-holiday.png";
import santa from "../../public/images/011-santa-claus.png";
import bells from "../../public/images/012-bells.png";
import elf from "../../public/images/013-elf.png";
import angel from "../../public/images/014-angel.png";
import reindeer from "../../public/images/015-reindeer.png";

//Sounds
import cowSound from "../../public/sounds/cow.wav";
import dogSound from "../../public/sounds/dog.mp3";
import catSound from "../../public/sounds/cat.wav";
import duckSound from "../../public/sounds/duck.wav";
import sheepSound from "../../public/sounds/sheep.wav";
import carSound from "../../public/sounds/car.wav";
import ufoSound from "../../public/sounds/ufo.wav";
import planeSound from "../../public/sounds/plane.wav";
import bikeSound from "../../public/sounds/bike.wav";
import boatSound from "../../public/sounds/boat.wav";
import santaSound from "../../public/sounds/santa.wav";
import bellsSound from "../../public/sounds/bell.wav";
import elfSound from "../../public/sounds/elf.wav";
import angelSound from "../../public/sounds/angel.mp3";
import reindeerSound from "../../public/sounds/reindeer.wav";
import rossSound1 from "../../public/sounds/ross1.wav";
import rossSound2 from "../../public/sounds/Ross2.wav";
import rossSound3 from "../../public/sounds/ross3.wav";
import rossSound4 from "../../public/sounds/Ross4.wav";

const images = [
    "cow",
    "dog",
    "cat",
    "duck",
    "sheep",
    "car",
    "ufo",
    "plane",
    "bike",
    "boat",
    "santa",
    "bells",
    "elf",
    "angel",
    "reindeer",
    "ross"
];

// Ross
const ross = "https://ca.slack-edge.com/T02SQPVAC-U831A7Y93-c1b6c7b2f1ff-512";
let ross1 = new Audio(rossSound1);
let ross2 = new Audio(rossSound2);
let ross3 = new Audio(rossSound3);
let ross4 = new Audio(rossSound4);

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

class Custom extends Component {
    constructor() {
        super();
        this.state = {
            currentImage: cow,
            currentTheme: "cow"
        };
    }

    handleClick = event => {

        if (this.state.currentTheme == "cow") {
            cowAudio.play();
        } else if (this.state.currentTheme == "dog") {
            dogAudio.play();
        } else if (this.state.currentTheme == "cat") {
            catAudio.play();
        } else if (this.state.currentTheme == "duck") {
            duckAudio.play();
        } else if (this.state.currentTheme == "sheep") {
            sheepAudio.play();
        } else if (this.state.currentTheme == "car") {
            carAudio.play();
        } else if (this.state.currentTheme == "ufo") {
            ufoAudio.play();
        } else if (this.state.currentTheme == "plane") {
            planeAudio.play();
        } else if (this.state.currentTheme == "bike") {
            bikeAudio.play();
        } else if (this.state.currentTheme == "boat") {
            boatAudio.play();
        } else if (this.state.currentTheme == "santa") {
            santaAudio.play();
        } else if (this.state.currentTheme == "bells") {
            bellsAudio.play();
        } else if (this.state.currentTheme == "elf") {
            elfAudio.play();
        } else if (this.state.currentTheme == "angel") {
            angelAudio.play();
        } else if (this.state.currentTheme == "reindeer") {
            reindeerAudio.play();
        } else if (this.state.currentTheme == "ross") {
            rossAudio.play();
        }
    };

    handleChange = event => {

        const images = {
            cow: cow,
            dog: dog,
            cat: cat,
            duck: duck,
            sheep: sheep,
            car: car,
            ufo: ufo,
            plane: plane,
            bike: bike,
            boat: boat,
            santa: santa,
            bells: bells,
            elf: elf,
            angel: angel,
            reindeer: reindeer,
            ross: ross
        };

        this.setState({
            currentImage: images[event.target.value],
            currentTheme: event.target.value
        });
    };

    render() {
        return (
            <>
                <form>
                    <label name="Pick a thing">Pick a thing</label>
                    <select name="picture" onChange={this.handleChange}>
                        {images.map(image => {
                            return <option value={image}>{image}</option>;
                        })}
                    </select>
                </form>
                <div onClick={this.handleClick}>
                    <Sky
                        images={{
                            /* FORMAT AS FOLLOWS */
                            0: this.state.currentImage
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
            </>
        );
    }
}

export default Custom;
