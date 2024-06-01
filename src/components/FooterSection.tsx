import { IonGrid, IonRow, IonCol, IonIcon } from '@ionic/react';
import { logoFacebook, logoInstagram } from 'ionicons/icons';

interface ContainerProps { }

const FooterSection: React.FC<ContainerProps> = () => {
  return (
    <div className='footer-bg'> 
         <div className="wave"></div>
         <div className="footer-trees">
            <img src="../assets/images/trees.png"/>  
         </div>
         <IonGrid className='footer-grid'>
            <IonRow className='mt-68'>
                <IonCol>
                    <div className='text-center'>
                        <img className='logo' src="../assets/images/logo-no-bg.png"/> 
                    </div>
                </IonCol>
            </IonRow>
            <IonRow className='mt-20'>
                <IonCol size-lg="3" size-md="3" size-sm="12" size-xs="12" offset-lg="1" offset-md="1">
                    <h5>About Green Scenery</h5>
                    <p>
                        Your trusted source for premium plants, backed by decades of experience, unmatched variety, transparent pricing, and a dedicated family team, ensuring easy communication and continuous evolution with the times.
                    </p>
                </IonCol >
                <IonCol size-lg="3" size-md="3" size-sm="12"size-xs="12" offset-lg="1" offset-md="1">
                    <div>
                        <h5>View/Download Most Recent Catalogue</h5>
                        <div>
                            <a className='fs-32 mr-8' href='../assets/images/GreenSceneryCatalogue_MAY17.pdf' target='_blank'>
                                <img className='border-rad-18' src="../assets/images/pdf-gif.gif"/> 
                            </a>
                        </div>
                    </div>
                </IonCol>
                <IonCol size-lg="3" size-md="3" size-sm="12" size-xs="12" offset-lg="1" offset-md="1">
                    <h5>Follow Us!</h5>
                    <div className='display-flex'>
                        <div>
                            <a className='fs-32 mr-8' href='https://fb.com/greensceneryph' target='_blank'><IonIcon slot="end" icon={logoFacebook}/></a>
                        </div>
                        <div>
                            <a className='fs-32' href="https://www.instagram.com/greensceneryph/" target='_blank'><IonIcon slot="end" icon={logoInstagram}/></a>
                        </div>
                    </div>
                </IonCol>
            </IonRow>
            <IonRow className='mt-68'>
                <IonCol>
                    <div className='text-center'>
                        <div className='spacer-50'/>
                        <span className='copyright'>© 2024 Green Scenery. All rights reserved.</span>
                    </div>
                </IonCol>
            </IonRow>
        </IonGrid>
    </div>
    
  );
};

export default FooterSection;