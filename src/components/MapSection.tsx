import { IonGrid, IonRow, IonCol } from '@ionic/react';

interface ContainerProps { }

const MapSection: React.FC<ContainerProps> = () => {
  return (
      <IonGrid>
          <IonRow className='ion-text-center mt-68'>
                <IonCol className='bg-white ion-margin-top'>
                    <h3>Where we are located</h3>
                </IonCol>
          </IonRow>
          <IonRow className='ion-margin-top'>
                <IonCol size-lg="10" size-md="12" size-sm="12" offset-lg="1">
                <iframe
                 width="100%"
                 height="400"
                 frameBorder="0"
                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15438.96201764584!2d121.07053!3d14.609408!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b7f05ee99b11%3A0x533bad872d4bf4fe!2sGreen%20Scenery%20Nursery!5e0!3m2!1sen!2sph!4v1652118327655!5m2!1sen!2sph">
                
                </iframe>
                
                </IonCol>
          </IonRow>
      </IonGrid>
  );
};

export default MapSection;
