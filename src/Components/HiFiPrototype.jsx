import React from 'react';
import Iframe from 'react-iframe'

class HiFiPrototype extends React.Component {

  render() {

    return (
      <div>
        <section className="page-section bg-primary" id="about">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 text-center">
                <Iframe  
                  src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FQRvgLbgvhM6iSVNne1uOks%2FWebsite%3Fnode-id%3D128%253A528%26viewport%3D-1266%252C-1335%252C0.3018951714038849%26scaling%3Dmin-zoom" 
                  width="800" 
                  height="450" 
                  allowFullScreen
                />  
              </div>
            </div>
          </div>
        </section>

      </div>
    );
  }
}

// style={{border: "none"}}

export default HiFiPrototype;
