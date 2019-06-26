import React from 'react';
import Particles from 'react-particles-js';


const particlesOptions =  {
    particles: {
      number: {
        value: 80,
        density: {
          enable: true,
          value_area: 800
        }
      }
    }
  }

class ParticleComp extends React.Component {
    render() {
        return <Particles className='particles' params={particlesOptions} />
      }
}

export default ParticleComp;