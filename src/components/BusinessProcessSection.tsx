import { IonGrid, IonRow, IonCol, IonIcon, IonText } from '@ionic/react';
import { arrowForwardCircle } from 'ionicons/icons';
import '../theme/BusinessProcessSection.css';

interface ContainerProps { }

const BusinessProcessSection: React.FC<ContainerProps> = () => {
  return (
    <div className="process-section">
        <IonGrid className='process-grid bg-white' id='process'>
            <IonRow>
                <IonCol size-lg="5" size-md="5" size-sm="12" size-xs="12">
                    <div className='pad-10'>
                        <h1>Kindly visit us!</h1>
                        <p>
                            Dive into our retail store for a firsthand look at our green offerings. From palms to perennials, we've got the variety you need for your projects. Our team is ready to discuss your wholesale needs and help you find the perfect plants.  Visit us today and let's grow together!"
                        </p>
                        <div className='product-section-cta'>
                            <a href='/Contact'>
                                <button className="cta-button" type="submit">
                                    READ MORE <IonIcon icon={arrowForwardCircle} />
                                </button>
                            </a>
                        </div>
                    </div>
                </IonCol>
                <IonCol size-lg="7" size-md="7" size-sm="12" size-xs="12">
                    <div className='kindly-visit-img'/>
                </IonCol>
            </IonRow>
        </IonGrid>
    </div>
  );
};

export default BusinessProcessSection;
