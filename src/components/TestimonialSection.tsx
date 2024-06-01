import { IonGrid, IonRow, IonCol } from '@ionic/react';
import TestimonialSlider from '../components/TestimonialSlider';
import '../theme/TestimonialSection.css';

interface ContainerProps { }

const TestimonialSection: React.FC<ContainerProps> = () => {
  return (
      <div id='testimonials' className='testimonial-section'>
        <IonGrid className='testimonial-grid'>
            <IonRow>
                <IonCol className='bg-white' size-lg="12" size-md="12" size-sm="12">
                    <div className='ion-padding-top m-pad-top-0 ion-text-center'>
                        <h2 className='mb-0'>What our customers say</h2>
                    </div>
                </IonCol>
            </IonRow>
            <IonRow>
                <IonCol className='bg-white' size-lg="12" size-md="12" size-sm="12">
                    <TestimonialSlider/>
                </IonCol>
            </IonRow>
        </IonGrid>
      </div>
        
  );
};

export default TestimonialSection;
