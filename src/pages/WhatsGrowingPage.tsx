import { IonContent, IonHeader, IonPage, IonToolbar, IonButtons, IonMenuButton, IonGrid, IonRow, IonCol } from '@ionic/react';
import Navigation from '../components/TopNavigation';
import WhatsGrowing from '../components/WhatsGrowing';
import ProductComponent from '../components/ProductComponent';
import FooterSection from '../components/FooterSection';
import './WhatsGrowing.css';

const WhatsGrowingPage: React.FC = () => {

  return (
    <>
      <IonPage id="main-content">
        <IonHeader>
          <IonToolbar>
            <span className='store-open'>OPEN DAILY</span>
            <span className='store-call'><a href="tel:+6394290310001">CALL +63 919 007 5711</a></span>
          </IonToolbar>
        </IonHeader>

        <IonContent fullscreen>
            <Navigation/>
            <div className='whatsgrowing-banner'/>
            <div className='spacer-50'/>
            <IonGrid>
                <IonRow>
                  <IonCol size-lg="10" size-md="12" size-sm="12" offset-lg="1">
                    <div>
                      <div>
                        <p className='ion-text-center'>Discover our vibrant array of plants currently in full growth or thriving at their peak beauty. From our regular selections to the latest flourishing, seize the opportunity to reserve these botanical treasures promptly! Act fast – they're first come, first serve. Check our online catalogue.</p>
                      </div>
                    </div>
                  </IonCol>
                </IonRow>
            </IonGrid>
            <WhatsGrowing />
            <ProductComponent />
            <FooterSection />
        </IonContent>
      </IonPage>
    </>
  );
};

export default WhatsGrowingPage;
