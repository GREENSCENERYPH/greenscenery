import { IonGrid, IonRow, IonCol, IonIcon } from '@ionic/react';
import { arrowForwardCircle } from 'ionicons/icons';

import '../theme/ProductSection.css';

interface ContainerProps { }

const ProductSection: React.FC<ContainerProps> = () => {
  return (
    <div className='product-section'>
        <IonGrid className="product-grid bg-white" id='products'>
            <IonRow>
                <IonCol className='ion-text-center' size-lg="10" size-md="12" size-sm="12" offset-lg="1">
                    <h3 className='product-sub-line'>
                        Palms are our passion, and we specialize in their cultivation, leveraging decades of expertise to nurture these iconic trees into thriving, majestic specimens for your landscape needs
                    </h3>
                </IonCol>
            </IonRow>

            <IonRow>
                <IonCol size-lg="8" size-md="12" size-sm="12">
                    <div className='display-flex overflow-x'>
                        <div className='product-iv-1 mr-16'/>
                        <div className='product-iv-2'/>
                    </div>
                </IonCol>
                <IonCol size-lg="3" size-md="12" size-sm="12">
                    <div className='ml-16'>
                        <p>
                            For over 40 years, our family-owned wholesale nursery has thrived as a top supplier of palms and landscaping solutions for projects throughout the Philippines. Our core values of integrity, quality, continuous growth, curiosity, and sustainability have fueled our success since 1970. Located in Malolos, Bulacan, we serve as a trusted resource for commercial and residential landscapers, garden centers, landscape architects, and municipalities.
                        </p>
                        <div className='product-section-cta'>
                            <a href='/About'>
                                <button className="cta-button" type="submit">
                                    READ MORE <IonIcon icon={arrowForwardCircle} />
                                </button>
                            </a>
                        </div>
                    </div>
                </IonCol>
            </IonRow>

        </IonGrid>
    </div>
  );
};

export default ProductSection;
