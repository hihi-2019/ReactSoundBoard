import React, { Component } from 'react';
import Sky from 'react-sky';


class Christmas extends Component {
    render() {
      return (
        <div> 
          /* Sky adapts size to its container */
          <Sky 
            images={{
              /* FORMAT AS FOLLOWS */
              0: "https://c.ndtvimg.com/2019-08/k8519lf8_bugatti-centodieci-unveiled-at-pebble-beach-car-show_625x300_17_August_19.jpg"
             
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

export default Christmas