import React, { useState, useEffect, useRef } from 'react';

import { IonContent, IonHeader, IonPage, IonToolbar, IonIcon} from '@ionic/react';
import Navigation from '../components/TopNavigation';
import IntroSection from '../components/IntroSection';
import ProductSection from '../components/ProductionSection';
import ProductComponent from '../components/ProductComponent'; 

import BusinessProcessSection from '../components/BusinessProcessSection';
import MapSection from '../components/MapSection';
import FooterSection from '../components/FooterSection';
import './Home.css';

import { arrowUpCircleOutline, arrowForwardCircle } from 'ionicons/icons';

const Home: React.FC = () => {

  const [showScrollButton, setShowScrollButton] = useState(false);
  const contentRef = useRef<HTMLIonContentElement>(null);

  const handleScroll = (scrollElement: HTMLElement) => {
    const scrollTop = scrollElement.scrollTop;
    const scrollHeight = scrollElement.scrollHeight;
    const clientHeight = scrollElement.clientHeight;
    const bottom = scrollTop + clientHeight >= scrollHeight - 50;
    setShowScrollButton(bottom);
  };

  useEffect(() => {
    const attachScrollListener = async () => {
      if (contentRef.current) {
        const scrollElement = await contentRef.current.getScrollElement();
        scrollElement.addEventListener('scroll', () => handleScroll(scrollElement));

        return () => {
          scrollElement.removeEventListener('scroll', () => handleScroll(scrollElement));
        };
      }
    };

    attachScrollListener();
  }, []);

  const scrollToTop = () => {
    const contentElement = contentRef.current;
    if (contentElement) {
      contentElement.scrollToTop(500);
    }
  };

  return (
    <>
      <IonPage id="main-content">
        <IonHeader>
          <IonToolbar>
            {/* <IonButtons slot="start">
              <IonMenuButton></IonMenuButton>
            </IonButtons> */}
            <span className='store-open'>OPEN DAILY</span>
            <span className='store-call'><a href="tel:+6394290310001">CALL +63 919 007 5711</a></span>
          </IonToolbar>
        </IonHeader>

        <IonContent ref={contentRef} fullscreen>
            <Navigation/>
            <IntroSection />
            <ProductSection />

            {/* Product Component */}
              <ProductComponent/>
                <div className='mt-20 text-center'>
                  <a href='/WhatsGrowing'>
                      <button className="cta-button" type="submit">
                          More Collections <IonIcon icon={arrowForwardCircle} />
                      </button>
                  </a>
                </div>
            {/* Product Component */}

            <BusinessProcessSection/>
            <MapSection/>
            <FooterSection />

            {/* {showScrollButton && (
              <div className="scroll-to-top">
                  <button onClick={scrollToTop}>
                    <IonIcon icon={arrowUpCircleOutline} />
                  </button>
              </div>
            )} */}

        </IonContent>
      </IonPage>
    </>
  );
};

export default Home;
