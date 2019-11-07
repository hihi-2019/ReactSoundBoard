import React, { Component } from 'react';
import Sky from 'react-sky';
import rosssound from '../../public/sounds/ross1.wav';

let ross1 = new Audio(rosssound)


 
class Ross extends Component {
  handleClick = (event) =>{
    ross1.play()
    console.log(event.target.srcset)
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
          size={'100px'} /* size of the rendered images. Defaults at 150px */
          background={'#2F3939'} /* color of background. Defaults to none */
        />
      </div>
    );
  }
}

export default Ross