import { IonIcon } from '@ionic/react';
import { arrowForwardCircleOutline } from 'ionicons/icons';
import '../theme/IntroSection.css';
import { properties } from "../config/properties"

interface ContainerProps { }

const IntroSection: React.FC<ContainerProps> = () => {
  return (
    <div className="hero-banner">
      {/* <div className="gradient-background" /> */}
      <video playsInline autoPlay loop muted className="video-background">
          <source src="./assets/video/clip1.mp4" type="video/mp4" />
      </video>
      <div className="content">
        <div className="banner-content">
          <h2 className="banner-title">{ properties.bannerTitle }</h2>
          <div className="banner-subtitle">{ properties.bannerSubtitle }</div>
          {/* <a href="/contact" className="cta-button">
            Get Started
            <IonIcon slot="end" icon={arrowForwardCircleOutline}/>
          </a> */}
        </div>
      </div>
    </div>
  );
};

export default IntroSection;
