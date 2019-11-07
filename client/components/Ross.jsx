import React, { Component } from 'react';
import Sky from 'react-sky';
import rossSound1 from '../../public/sounds/ross1.wav';
import rossSound2 from '../../public/sounds/Ross2.wav';
import rossSound3 from '../../public/sounds/ross3.wav';
import rossSound4 from '../../public/sounds/Ross4.wav';

let ross1 = new Audio(rossSound1)
let ross2 = new Audio(rossSound2)
let ross3 = new Audio(rossSound3)
let ross4 = new Audio(rossSound4)


 
class Ross extends Component {
  handleClick = (event) =>{
    let num = Math.floor(Math.random()*5)
    console.log(num)
    if(num === 0){
        ross1.play()
    } else if(num === 1){
        ross2.play()
    } else if (num === 2){
        ross3.play()
    } else if(num ===3){
      ross4.play()
    }
}

  render() {
    return (
      <div onClick={this.handleClick}> 
        /* Sky adapts size to its container */
        <Sky 
          images={{
            /* FORMAT AS FOLLOWS */
            0: "https://ca.slack-edge.com/T02SQPVAC-U831A7Y93-c1b6c7b2f1ff-512"
           
          }}
          how={130} /* You have to pass a number so Sky will render that amount of images chosen randomly from the object you passed in the previous step */
          time={40} /* time of the animation. Dfaults at 20s */
          size={'150px'} /* size of the rendered images. Defaults at 150px */
          background={'#2F3939'} /* color of background. Defaults to none */
        />
      </div>
    );
  }
}

export default Ross